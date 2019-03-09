import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from './Product'
import withLayout from '@hoc/withLayout';
import { getProductData, changeProductData } from './actions'

class ProductContainer extends Component {

  componentDidMount() {
    const { city, changeProductData } = this.props
    let urlParams = new URLSearchParams(this.props.location.search);
    let keyword = urlParams.get('keyword')
    const params = {city, keyword}
    getProductData(params).then(data => {
      changeProductData(data)
    })
  }

  render() {
    let params = new URLSearchParams(this.props.location.search);
    let keyword = params.get('keyword')
    let { city, list, types, areas } = this.props

    return <Product
            city = { city }
            keyword = { keyword }
            types = { types }
            areas = { areas }
            list = { list }
            />
  }
}

const mapStateToProps = state => ({
  city: state.header.city,
  list: state.product.list,
  types: state.product.types,
  areas: state.product.areas,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeProductData
}, dispatch);

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(ProductContainer))
