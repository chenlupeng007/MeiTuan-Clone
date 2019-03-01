import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Geo from './Geometry'
import { getPosition } from '../actions'

class GeoContainer extends React.Component {

  componentDidMount() {
    if(!this.props.city) {
      const { getPosition } = this.props
      getPosition()
    }
  }

  render() {
    const { city } = this.props

    return <Geo city={city} />
  }

  static loadData = (store) => {
    return store.dispatch(getPosition())
  }
}


const mapStateToProps = state => ({
  city: state.header.city
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPosition
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GeoContainer);