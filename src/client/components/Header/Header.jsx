import React from 'react'

import { Layout } from 'antd';
import { TopBar } from './TopBar'
import { SearchBar } from './SearchBar'

import { withStyles } from '@hoc'
import gridStyles from 'antd/lib/grid/style/index.css'

const { Header } = Layout;

const MyHeader = () => (
  <Header>
    <TopBar />
    <SearchBar />
  </Header>
)

export default withStyles(MyHeader, gridStyles);