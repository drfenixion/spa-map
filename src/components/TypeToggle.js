import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toggle from 'react-toggle';


const mapDispatchToProps = dispatch => ({
    onTypeToogle: (typeId, flag) =>
        dispatch({ type: 'FILTER_TYPE', typeId: typeId, flag: flag })
});

class TypeToggle extends Component {

  constructor(props, context) {
    super(props, context)

    this.handleChange = (ev) => {   
      this.props.onTypeToogle(this.props.id, ev.target.checked);
    };
  }

  render() {
    return ( 
      <label>
        <Toggle
          key={this.props.id}
          defaultChecked={true}
          icons={false}
          onChange={this.handleChange} />
        <span>{this.props.name}</span>
      </label>    
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(TypeToggle);