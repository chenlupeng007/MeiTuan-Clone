import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';

import styles from './Detail.scss'

const Crumbs = ({ city, keyword, type}) => (
  <div className={styles.crumbs} >
    <Breadcrumb separator=">">
      <Breadcrumb.Item>
        <Link to='/'>
          {city.replace('市', '')}美团
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to='/'>
          {city.replace('市', '')}{type}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to='/'>
          {city.replace('市', '')}{keyword}
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

export default Crumbs