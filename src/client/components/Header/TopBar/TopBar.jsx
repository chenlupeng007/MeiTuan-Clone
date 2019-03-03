import React from 'react'

import { Row, Col } from 'antd';
import Geometry from './GeoContainer'
import User from './User'
import Navbar from './Nav'

import withStyles from '@hoc/withStyles';
import gridStyles from 'antd/lib/grid/style/index.css'
import styles from './TopBar.scss'

const TopBar = () => (
  <Row className={styles.topbar}>
    <Col span={5}><Geometry /></Col>
    <Col span={5}><User /></Col>
    <Col span={14}><Navbar /></Col>
  </Row>
)

TopBar.loadData = Geometry.loadData

export default withStyles(TopBar, gridStyles, styles);