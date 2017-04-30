import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import Point from './Point';

const mapStateToProps = state => {
  return {
    pointsFiltered: state.points.filtered
  }
};

class GeoMap extends Component {
  
  static defaultProps = {
    center: {lat: 56.2903745, lng: 43.9068256},
    zoom: 11,
    API_KEY: 'AIzaSyDh_8BhNU8Zbc-mcRmhN-pddWm8_GCFm1c'
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key: this.props.API_KEY,
          language: 'ru',
        }}
      > 
        {   
          this.props.pointsFiltered.map((point) =>
            (
            <Point
              key={point.id}
              lat={point.lat}
              lng={point.lng}
              typeId={point.typeId}
              rating={point.rating}
            />            
            )
          )
        }
      </GoogleMapReact>
    );
  }
}

export default connect(mapStateToProps, {})(GeoMap);