import expect from 'expect';
import pointsReducer from './../../src/reducers/points';


describe('pointsReducer', () => {
  function stateBefore() {

    const initState = { 
      points: {
        origin: [
          {id:1, typeId:1, rating: 1, lat: 56.2703745, lng: 43.8068256},
          {id:2, typeId:1, rating: 2, lat: 56.2503745, lng: 43.7068256},
          {id:3, typeId:2, rating: 2, lat: 56.2803745, lng: 43.7068256},
          {id:4, typeId:2, rating: 4, lat: 56.2403745, lng: 43.9068256},
          {id:5, typeId:2, rating: 4, lat: 56.2303745, lng: 43.7068256},
          {id:6, typeId:3, rating: 5, lat: 56.2303745, lng: 43.5068256},
          {id:7, typeId:3, rating: 5, lat: 56.1703745, lng: 43.9068256},
          {id:8, typeId:4, rating: 5, lat: 56.1703745, lng: 43.2068256},
          {id:9, typeId:5, rating: 5, lat: 56.4703745, lng: 43.6068256},
          {id:10, typeId:5, rating: 6, lat: 56.1703745, lng: 43.3068256},
          {id:11, typeId:6, rating: 7, lat: 56.1703745, lng: 43.5068256},
          {id:12, typeId:6, rating: 10, lat: 56.1703745, lng: 43.7068256},
          {id:13, typeId:4, rating: 3, lat: 56.1303745, lng: 43.7368256},
          {id:14, typeId:4, rating: 2, lat: 56.322768, lng: 43.925393},
          {id:15, typeId:5, rating: 5, lat: 56.342768, lng: 43.935393},
          {id:16, typeId:2, rating: 5, lat: 56.322768, lng: 43.965393},
          {id:17, typeId:2, rating: 3, lat: 56.352768, lng: 43.955393},
          {id:18, typeId:1, rating: 1, lat: 56.382768, lng: 43.915393},
          {id:19, typeId:1, rating: 7, lat: 56.372768, lng: 43.925393},
          {id:20, typeId:1, rating: 5, lat: 56.362768, lng: 43.985393},
          {id:21, typeId:1, rating: 4, lat: 56.382768, lng: 43.985393},
          {id:22, typeId:2, rating: 7, lat: 56.392768, lng: 43.995393},
          {id:23, typeId:2, rating: 3, lat: 56.442768, lng: 43.885393},
          {id:24, typeId:2, rating: 2, lat: 56.322768, lng: 43.875393},
          {id:25, typeId:3, rating: 4, lat: 56.332768, lng: 43.935393},
          {id:26, typeId:3, rating: 4, lat: 56.362768, lng: 43.965393},
          {id:27, typeId:6, rating: 5, lat: 56.372768, lng: 43.945393},
          {id:28, typeId:7, rating: 10, lat: 56.301568, lng: 43.989893},
        ],
        filtered: [
          {id:1, typeId:1, rating: 1, lat: 56.2703745, lng: 43.8068256},
          {id:2, typeId:1, rating: 2, lat: 56.2503745, lng: 43.7068256},
          {id:3, typeId:2, rating: 2, lat: 56.2803745, lng: 43.7068256},
          {id:4, typeId:2, rating: 4, lat: 56.2403745, lng: 43.9068256},
          {id:5, typeId:2, rating: 4, lat: 56.2303745, lng: 43.7068256},
          {id:6, typeId:3, rating: 5, lat: 56.2303745, lng: 43.5068256},
          {id:7, typeId:3, rating: 5, lat: 56.1703745, lng: 43.9068256},
          {id:8, typeId:4, rating: 5, lat: 56.1703745, lng: 43.2068256},
          {id:9, typeId:5, rating: 5, lat: 56.4703745, lng: 43.6068256},
          {id:10, typeId:5, rating: 6, lat: 56.1703745, lng: 43.3068256},
          {id:11, typeId:6, rating: 7, lat: 56.1703745, lng: 43.5068256},
          {id:12, typeId:6, rating: 10, lat: 56.1703745, lng: 43.7068256},
          {id:13, typeId:4, rating: 3, lat: 56.1303745, lng: 43.7368256},
          {id:14, typeId:4, rating: 2, lat: 56.322768, lng: 43.925393},
          {id:15, typeId:5, rating: 5, lat: 56.342768, lng: 43.935393},
          {id:16, typeId:2, rating: 5, lat: 56.322768, lng: 43.965393},
          {id:17, typeId:2, rating: 3, lat: 56.352768, lng: 43.955393},
          {id:18, typeId:1, rating: 1, lat: 56.382768, lng: 43.915393},
          {id:19, typeId:1, rating: 7, lat: 56.372768, lng: 43.925393},
          {id:20, typeId:1, rating: 5, lat: 56.362768, lng: 43.985393},
          {id:21, typeId:1, rating: 4, lat: 56.382768, lng: 43.985393},
          {id:22, typeId:2, rating: 7, lat: 56.392768, lng: 43.995393},
          {id:23, typeId:2, rating: 3, lat: 56.442768, lng: 43.885393},
          {id:24, typeId:2, rating: 2, lat: 56.322768, lng: 43.875393},
          {id:25, typeId:3, rating: 4, lat: 56.332768, lng: 43.935393},
          {id:26, typeId:3, rating: 4, lat: 56.362768, lng: 43.965393},
          {id:27, typeId:6, rating: 5, lat: 56.372768, lng: 43.945393},
          {id:28, typeId:7, rating: 10, lat: 56.301568, lng: 43.989893},
        ],
        types:[
          {id:1, name: 'Магазины', color: '#bfc41f', glyph: 'shopping-cart'},
          {id:2, name: 'Гостиницы', color: 'green', glyph: 'bed'},
          {id:3, name: 'Учебные заведения', color: 'blue', glyph: 'education'},
          {id:4, name: 'Банки', color: '#17aa8d', glyph: 'rub'},
          {id:5, name: 'Аптеки', color: 'red', glyph: 'plus'},
          {id:6, name: 'Государственные учреждения', color: '#a54309', glyph: 'home'},
          {id:7, name: 'Frontend developers', color: '#f4e842', glyph: 'user'}
        ],
        filterConfig: {types: [], rating: 1},
        globalConfig: {
          addPointsCount: 100
        }    
      }
    };

    return initState.points;
  };



  it('should add 100 random points', () => {
    const action = {
      type: 'ADD_RANDOM_POINTS',
    }

    const actual = pointsReducer(stateBefore(), action)

    expect(actual.filtered.length).toEqual(128);
  });

  it('should filter orign points by type', () => {
    const action = {
      type: 'FILTER_TYPE',
      typeId: 4,
      flag: false 
    }

    const actual = pointsReducer(stateBefore(), action)

    expect(actual.filtered.length).toEqual(25);
  });

  it('should filter orign points by rating', () => {
    const action = {
      type: 'FILTER_RATING',
      payload: 3,
    }

    const actual = pointsReducer(stateBefore(), action)

    expect(actual.filtered.length).toEqual(22);
  });
  
});