import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Detail from './Detail'
import withLayout from '@hoc/withLayout';
import { getDetailData } from './actions'

class DetailContainer extends Component {

  componentDidMount() {
    const { city, getDetailData } = this.props
    const urlParams = new URLSearchParams(this.props.location.search);
    const keyword = urlParams.get('keyword')
    const type = urlParams.get('type')
    const params = { city, keyword, type }
    getDetailData(params)
  }

  render() {
    const params = new URLSearchParams(this.props.location.search);
    const keyword = params.get('keyword')
    const type = params.get('type')
    const { city, product, list } = this.props

    return <Detail
      city={city}
      keyword={keyword}
      type={type}
      product={product}
      list={list}
    />
  }
}

const mapStateToProps = state => ({
  city: state.header.city,
  list: state.detail.list,
  product: state.detail.product,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getDetailData
}, dispatch);

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(DetailContainer))
