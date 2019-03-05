import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Category from './Category'
import { getAllCity } from './actions'
import { changePosition } from '@components/Header/actions'

class CategoryContainer extends React.Component {

  componentDidMount() {
    if (!this.props.allCity.length) {
      const { getAllCity } = this.props
      getAllCity()
    }
  }

  render() {
    const { allCity, changePosition } = this.props
    return <Category allCity={allCity} changePosition={changePosition}/>
  }
}

const mapStateToProps = state => ({
  allCity: state.changeCity.allCity
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCity,
  changePosition
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);