export default (state = {}, action) => {

  function getFilteredPoints(originPoints, filterConfig){
    let pointsFiltered = originPoints.filter(
      point => {
        let flag = true;
        flag = (point.rating >= filterConfig.rating) ? true : false;
        if(flag === false) return false;

        let filterConfigTypesElement = getFilterConfigTypesElement(filterConfig.types, point.typeId);
        if(filterConfigTypesElement.length > 0){
          if(filterConfigTypesElement[0].flag === false) return false;
        }
        return true;
      }
    );

    return pointsFiltered;
  }

  function getFilterConfigTypesElement(filterConfigTypes, typeId){
    let filteredArray = filterConfigTypes.filter(item => {
      if(item.typeId === typeId){
        return true;
      }
      return false;
    });

    return filteredArray;
  }

  let filterConfig = {};
  let pointsFiltered = [];
  switch (action.type) {
    case 'FILTER_RATING':

      filterConfig = {types: state.filterConfig.types, rating: action.payload};
      pointsFiltered = getFilteredPoints(state.origin, filterConfig);
      return {
        ...state,
        filtered: pointsFiltered,
        filterConfig: filterConfig
      };
    case 'FILTER_TYPE':

      let testTypeIsSet = getFilterConfigTypesElement(state.filterConfig.types, action.typeId);
      //add or update element to filterConfigTypes
      var filterConfigTypes = [];
      if(testTypeIsSet.length === 0){
        filterConfigTypes = state.filterConfig.types;
        filterConfigTypes.push({typeId: action.typeId, flag: action.flag});        
      }else{
        filterConfigTypes = state.filterConfig.types.map(item => {
          if(item.typeId === action.typeId){
            return {typeId: item.typeId, flag: action.flag};
          }
          return item;
        });
      }

      filterConfig = {types: filterConfigTypes, rating: state.filterConfig.rating};
      pointsFiltered = getFilteredPoints(state.origin, filterConfig);

      return {
        ...state,
        filtered: pointsFiltered,
        filterConfig: filterConfig
      };

    case 'ADD_RANDOM_POINTS':

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let originPoints = state.origin;

      for (var i = 0; i < 100; i++) {
        originPoints.push(
          {
            id: originPoints.length+1,
            typeId: getRandomInt(1, 6),
            rating: getRandomInt(1, 10),
            lat: parseFloat('56.'+getRandomInt(221568, 441568)),
            lng: parseFloat('43.'+getRandomInt(789893, 999999)),
          }
        );
      }

      filterConfig = {types: state.filterConfig.types, rating: state.filterConfig.rating};
      pointsFiltered = getFilteredPoints(originPoints, filterConfig);

      return {
        ...state,
        filtered: pointsFiltered,
        filterConfig: filterConfig
      };
    default:
      return {...state};
  }
};