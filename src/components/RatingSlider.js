import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const mapDispatchToProps = dispatch => ({
    onChangesFilterRating: payload =>
        dispatch({ type: 'FILTER_RATING', payload: payload })
});


class RatingSlider extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      value: 1
    }

    this.onChangeComplete = newFilterRating => () => {
      this.props.onChangesFilterRating(newFilterRating);
    };
  }

  handleOnChange = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    let { value } = this.state
    return (
      <div className='slider'>        
        <span>Рейтинг</span>
        <Slider
          min={1}
          max={10}
          step={1}
          value={value}
          onChange={this.handleOnChange}
          onChangeComplete={this.onChangeComplete(value)}
        />        
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(RatingSlider);
