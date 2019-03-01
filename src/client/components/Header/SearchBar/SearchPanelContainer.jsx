import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchPanel from './SearchPanel'
import { getSearchList, getHotPlace } from '../actions'

class SearchPanelContainer extends React.Component {
  render() {
    const { hotPlace, searchList, getSearchList, city } = this.props

    return <SearchPanel
      hotPlace = { hotPlace }
      searchList = { searchList }
      getSearchList = { getSearchList }
      city = { city }/>
  }

  static loadData = (store) => {
    const { city } = store.getState().header

    return store.dispatch(getHotPlace({
      city: city.replace('市', '')
    }))
  }
}

const mapStateToProps = state => ({
  hotPlace: state.header.hotPlace,
  searchList: state.header.searchList,
  city: state.header.city
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearchList
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanelContainer);