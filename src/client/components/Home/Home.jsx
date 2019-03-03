import React from 'react'

import { Layout, Row, Col } from 'antd'
import withLayout from '@hoc/withLayout';

import Menu from './MenuContainer'
import Life from './Life'
import Artistic from './ArtisticContainer'
import { getPosition } from '@components/Header/actions'

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
      <Row>
        <Col span={24}>
          <Artistic />
        </Col>
      </Row>
    </div>
  </Content>
)

Home.loadData = (store) => {
  const promises = []
  promises.push(Menu.loadData(store))

  const newPromise = store.dispatch(getPosition())
    .then(() => Artistic.loadData(store))
  promises.push(newPromise)

  return promises
}

export default withLayout(Home)