import React from 'react'

import { Layout, Row, Col } from 'antd'
import withLayout from '@hoc/withLayout';
import withStyles from '@hoc/withStyles'
import styles from './ChangeCity.scss'
import Select from './SelectContainer'
import HotCity from './HotCityContainer'
import Category from './CategoryContainer'

import { getAllCity, getHotCity} from './actions'

const { Content } = Layout

const ChangeCity = () => (
  <Content>
    <div className = { styles.changeCity }>
      <Row className = { styles.row }>
        <Col span={24}>
          <Select/>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col span={24}>
          <HotCity />
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col span={24}>
          <Category/>
        </Col>
      </Row>
    </div>
  </Content>
)

ChangeCity.loadData = (store) => {
  return [store.dispatch(getAllCity()), store.dispatch(getHotCity())]
}

export default withLayout(withStyles(ChangeCity, styles))
