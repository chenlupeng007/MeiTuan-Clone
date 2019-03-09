import React from 'react'

import { Row, Col } from 'antd';
import Crumbs from './Crumbs'
import Category from './Category'
import List from './List'

import withStyles from '@hoc/withStyles';
import crumbStyles from 'antd/lib/breadcrumb/style/index.css'
import rateStyles from 'antd/lib/rate/style/index.css'
import styles from './Product.scss'

const Product = ({city, keyword, types, areas, list}) => (
  <Row style={{ width: '1190px', margin: '0 auto' }}>
    <Col span={19}>
      <Crumbs city={city} keyword={keyword} />
      <Category types = { types} areas = { areas }/>
      <List list = { list }/>
    </Col>
    <Col span={5}>
    </Col>
  </Row>
)

export default withStyles(Product, crumbStyles, rateStyles, styles)