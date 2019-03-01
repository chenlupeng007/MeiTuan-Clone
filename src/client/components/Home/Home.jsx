import React from 'react'

import { Layout, Row, Col } from 'antd'
import withLayout from '@hoc/withLayout';

import Menu from './MenuContainer'
import Life from './Life'

const { Content } = Layout

const Home = () => (
  <Content>
    <div style={{margin: '0 auto'}}>
      <Row>
        <Col span={5}>
          <Menu/>
        </Col>
        <Col span={19}>
          <Life/>
        </Col>
      </Row>
    </div>
  </Content>
)

Home.loadData = Menu.loadData

export default withLayout(Home)