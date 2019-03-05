import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Select from './Select'
import { getProvinces, getAllCity } from './actions'
import { changePosition } from '@components/Header/actions'

class SelectContainer extends React.Component {

  componentDidMount() {
    if (!this.props.provinces.length) {
      const { getProvinces } = this.props
      getProvinces()
    }
    if(!this.props.allCity.length) {
      const { getAllCity } = this.props
      getAllCity()
    }
  }

  render() {
    const { provinces, allCity, changePosition } = this.props

    return <Select
              provinces={provinces}
              allCity = {allCity}
              changePosition ={changePosition}
            />
  }
}

const mapStateToProps = state => ({
  provinces: state.changeCity.provinces,
  allCity: state.changeCity.allCity
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProvinces,
  getAllCity,
  changePosition
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);