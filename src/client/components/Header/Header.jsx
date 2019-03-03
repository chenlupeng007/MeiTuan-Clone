import React from 'react'

import { Layout } from 'antd';
import { TopBar } from './TopBar'
import { SearchBar } from './SearchBar'

import withStyles from '@hoc/withStyles';
import gridStyles from 'antd/lib/grid/style/index.css'

const { Header } = Layout;

const MyHeader = () => (
  <Header>
    <TopBar />
    <SearchBar />
  </Header>
)

MyHeader.loadData = (store) => {
  return TopBar.loadData(store)
  .then(()=> SearchBar.loadData(store))
}

export default withStyles(MyHeader, gridStyles);