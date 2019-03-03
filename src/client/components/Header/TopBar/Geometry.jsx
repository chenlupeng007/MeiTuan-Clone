import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import withStyles from '@hoc/withStyles';
import styles from './Geometry.scss'

const Geo = (props) => (
  <div>
    <Icon type="environment" theme="filled" /> {props.city}
    <Link to='/changeCity' className={styles.changeCity}>切换城市</Link>
    [香河 廊坊 天津]
  </div>
)

export default withStyles(Geo, styles)