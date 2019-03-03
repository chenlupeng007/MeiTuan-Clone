import React from 'react'

import { Layout, Row, Col } from 'antd'
import withLayout from '@hoc/withLayout';
import withStyles from '@hoc/withStyles'
import styles from './ChangeCity.scss'
import Select from './Select'

const { Content } = Layout

const ChangeCity = () => (
  <Content>
    <div className = { styles.changeCity }>
      <Row className = { styles.row }>
        <Col span={24}>
          <Select/>
        </Col>
      </Row>
    </div>
  </Content>
)

export default withLayout(withStyles(ChangeCity, styles))
