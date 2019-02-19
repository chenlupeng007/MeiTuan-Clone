import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import { withStyles } from '@hoc'
import styles from './Geometry.scss'

const Geo = () => (
  <div>
    <Icon type="environment" theme="filled" /> 北京
    <Link to='/changeCity' className={styles.changeCity}>切换城市</Link>
    [香河 廊坊 天津]
  </div>
)

export default withStyles(Geo, styles)