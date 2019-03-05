import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Artistic from './Artistic'
import { getList } from './actions'

class ArtisticContainer extends React.Component {

  componentDidMount() {
    const { getList } = this.props

    getList({
      keyword: '景点',
      city: this.props.city
    })
  }

  getArtList = (keyword, kind) => {
    const { getList, city } = this.props
    return getList({ keyword, city }, kind)
  }

  render() {
    const { list } = this.props

    return <Artistic list = { list } getList = { this.getArtList }/>
  }

  static loadData = (store) => {
    return store.dispatch(getList({
      keyword: '景点',
      city: store.getState().header.city
    }))
  }
}

const mapStateToProps = state => ({
  list: state.home.artistic,
  city: state.header.city
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getList
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtisticContainer);