import React from 'react'

import { Row, Col } from 'antd';
import Crumbs from './Crumbs'
import Summary from './Summary'
import List from './List'

import withStyles from '@hoc/withStyles';
import crumbStyles from 'antd/lib/breadcrumb/style/index.css'
import rateStyles from 'antd/lib/rate/style/index.css'
import sliderStyle from 'antd/lib/carousel/style/index.css'
import styles from './Detail.scss'

const Detail = ({city, keyword, type, product, list}) => {
  return (
    <div style={{ width: '1190px', margin: '0 auto' }}>
      <Row>
        <Col span={24}>
          <Crumbs keyword={keyword} type={type} city={city} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Summary meta = {product}/>
        </Col>
      </Row>
      <Row className = {styles.title}>
        <Col span={24}>
          <h3>商家团购及优惠</h3>
        </Col>
      </Row>
      {
        !list.filter(item => item.photos.length).length ? null :
        <Row>
          <Col span={24}>
            <List list={list}/>
          </Col>
        </Row>
      }
    </div>
  )
}

export default withStyles(Detail, crumbStyles, rateStyles, sliderStyle, styles)