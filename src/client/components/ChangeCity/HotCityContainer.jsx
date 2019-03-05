import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HotCity from './HotCity'
import { getHotCity } from './actions'

class HotCityContainer extends React.Component {

  componentDidMount() {
    if (!this.props.hotCity.length) {
      const { getHotCity } = this.props
      getHotCity()
    }
  }

  render() {
    const { hotCity } = this.props

    return <HotCity hotCity = {hotCity}/>
  }
}

const mapStateToProps = state => ({
  hotCity: state.changeCity.hotCity
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getHotCity
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HotCityContainer);