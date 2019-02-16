import React from 'react';
import { Layout } from 'antd';

import layoutStyles from 'antd/lib/layout/style/index.css';
import myStyles from './Layout.scss';
import { withStyles } from '@hoc'

const {
  Header, Footer, Content,
} = Layout;

const MyLayout = () => (
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
)

export default withStyles(MyLayout, layoutStyles, myStyles)