import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';

import styles from './Product.scss'

const Crumbs = ({city, keyword}) => (
  <div className={ styles.crumbs } >
    <Breadcrumb separator=">">
      <Breadcrumb.Item>
        <Link to={'/'}>
          {city.replace('市', '') + '美团'}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={'/'}>
          {city.replace('市', '') + keyword}
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

export default Crumbs