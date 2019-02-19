import React from 'react'

import { Row, Col } from 'antd';
import Geometry from './Geometry'
import User from './User'
import Navbar from './Nav'

import { withStyles } from '@hoc'
import gridStyles from 'antd/lib/grid/style/index.css'
import styles from './TopBar.scss'

const TopBar = () => (
  <Row className={styles.topbar}>
    <Col span={4}><Geometry /></Col>
    <Col span={6}><User /></Col>
    <Col span={14}><Navbar /></Col>
  </Row>
)

export default withStyles(TopBar, gridStyles, styles);