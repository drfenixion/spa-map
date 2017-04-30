import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Glyphicon } from 'react-bootstrap';


const mapStateToProps = (state, props) => {

  
  let ownType = state.points.types.filter(item => {
    if(item.id === props.typeId){
      return true;
    }
    return false;
  });

  return {
    ownType: ownType[0]
  }
};


class Point extends Component {  

  render() {

    let styleSize = {
      fontSize: this.props.rating * 10 + 100 + '%',//font-size grow by rating
    }

    let styleColor = {
      color: this.props.ownType.color
    }

    return (
      <div style={styleSize} className='point_back'>
        <span style={styleColor} className='glyph_wrapper'>
          <Glyphicon glyph={this.props.ownType.glyph} />
        </span>
        R:{this.props.rating}
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Point);