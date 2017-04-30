import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';

import GeoMap from './GeoMap';
import RatingSlider from './RatingSlider';
import TypesTogglePanel from './TypesTogglePanel';


const mapDispatchToProps = dispatch => ({
    onAddRandomPoints: value =>
        dispatch({ type: 'ADD_RANDOM_POINTS', value: value })
});

const mapStateToProps = state => {
  return {
    addPointsCount: state.points.globalConfig.addPointsCount,
    countFiltered: state.points.filtered.length,
  }
};


class GeoAppContaner extends Component {

  constructor(props, context) {
    super(props, context)

    this.addRandomPoints = value => () => {
      this.props.onAddRandomPoints(value);
    };
  }

  render() {
    return (
      <div id="geo_app_contaner">
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={3}>
              <TypesTogglePanel />
              <RatingSlider />
              <div className="command_panel">
                <Button className="command_button"             
                  onClick={this.addRandomPoints(this.props.addPointsCount)}>
                    Добавить {this.props.addPointsCount}                    
                </Button>
                <span className="pointsRenderedCount">Всего:&nbsp;{this.props.countFiltered}</span>
              </div>
            </Col>
            <Clearfix visibleSmBlock></Clearfix>
            <Col sm={12} md={9}>              
              <div id="geo_map_contaner">
                <GeoMap />
              </div>
            </Col>      
          </Row>
        </Grid>        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeoAppContaner);
