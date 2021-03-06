import React from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd';
import SearchPanel from './SearchPanelContainer'

import withStyles from '@hoc/withStyles';
import inputStyle from 'antd/lib/input/style/index.css'
import buttonStyle from 'antd/lib/button/style/index.css'
import styles from './SearchBar.scss'

const Nav = () => (
  <ul className={styles.nav}>
    <li>
      <Link to='/'className={styles.takeout}>美团外卖</Link>
    </li>
    <li>
      <Link to='/'className={styles.movie}>猫眼电影</Link>
    </li>
    <li>
      <Link to='/'className={styles.hotel}>美团酒店</Link>
    </li>
    <li>
      <Link to='/'className={styles.apartment}>民宿/公寓</Link>
    </li>
    <li>
      <Link to='/'className={styles.business}>商家入驻</Link>
    </li>
  </ul>
)

const SearchBar = () => (
  <Row className={styles.row}>
    <div className={styles.searchbar}>
      <Col span={3} className={styles.left}>
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        />
      </Col>

      <Col span={15} className={styles.center}>
        <SearchPanel />
        <Nav />
      </Col>

      <Col span={6}></Col>
    </div>
  </Row>
)

SearchBar.loadData = SearchPanel.loadData

export default withStyles(SearchBar, inputStyle, buttonStyle, styles);