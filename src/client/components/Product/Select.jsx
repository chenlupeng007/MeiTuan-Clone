import React from 'react'
import { Icon } from 'antd'

import styles from './Product.scss'

const Select = ({ name, list }) => (
  <div className={styles.select} >
    <dl className = {styles.tab}>
      <dt>{name}<Icon type="caret-down" /></dt>
      <dd>
        <h3>{ name }</h3>
        {
          list.map((item,index) => (
            <span key = {index}>{ item }</span>
          ))
        }
      </dd>
    </dl>
  </div>
)

export default Select