import React from 'react'

import withStyles from '@hoc/withStyles'
import styles from './HotCity.scss'

const HotCity = (props) => {
  const { hotCity } = props
  return (
    <div className={styles.hot}>
      <dl>
        <dt>热门城市:</dt>
        {hotCity.map(item => (<dd key={item.id}>{item.name == '市辖区' ? item.province : item.name}</dd>))}
      </dl>
    </div>
  )
}

export default withStyles(HotCity, styles)