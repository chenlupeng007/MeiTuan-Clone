import React from 'react'

import styles from './Product.scss'
import Select from './Select'

const Category = ({ types, areas }) => (
  <div className = { styles.category} >
    <dl className = {styles.classic}>
      <dt>分类</dt>
      <dt>全部</dt>
      {
        types.map((item, index) => (
          <Select key={index} name = { item.type } list = { item.module}/>
        ))
      }
    </dl>
    <dl className={styles.classic}>
      <dt>分类</dt>
      <dt>全部</dt>
      {
        areas.map((item, index) => (
          <Select key={index} name={item.type} list={item.module} />
        ))
      }
    </dl>
  </div>
)

export default Category