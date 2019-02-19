import React from 'react';
import { Layout } from 'antd';

import { StaticContext } from '@common/context'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

import { withStyles } from '@hoc'
import layoutStyles from 'antd/lib/layout/style/index.css';
import styles from './Layout.scss'


const MyLayout = (props) => (
  <StaticContext.Provider value = {props.staticContext}>
    <Layout>
      <Header/>
      {/* <Content>Content</Content> */}
      <Footer/>
    </Layout>
  </StaticContext.Provider>
)

export default withStyles(MyLayout, layoutStyles, styles);