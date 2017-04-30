import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup } from 'react-bootstrap';

import TypeToggle from './TypeToggle';


const mapStateToProps = state => {
  return {
    types: state.points.types
  }
};

class TypesTogglePanel extends Component {

  render() {
    return (
      <form>
        <FormGroup>
          {   
            this.props.types.map((type) =>
              (
              <TypeToggle
                key={type.id}
                id={type.id}
                name={type.name}
              />          
              )
            )
          }
        </FormGroup>
      </form>
    );
  }
}

export default connect(mapStateToProps, {})(TypesTogglePanel);