import React from 'react';

import { Layout } from 'antd';
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

import { StaticContext } from '@common/context'
import withStyles from '@hoc/withStyles';

import layoutStyles from 'antd/lib/layout/style/index.css';
import styles from './Layout.scss'

const withLayout = (DecoratedComponent) => {
  const MyComponent = (props) => (
    <StaticContext.Provider value={props.staticContext}>
      <Layout className ={ styles.layout_default}>
        <Header />
        <DecoratedComponent />
        <Footer />
      </Layout>
    </StaticContext.Provider>
  )

  MyComponent.loadData = (store) => {
    const promises = []
    promises.push(Header.loadData(store))
    if (DecoratedComponent.loadData) {
      promises.push(...DecoratedComponent.loadData(store))
    }

    return promises
  }

  const NewComponent = withStyles(MyComponent, layoutStyles, styles);

  return NewComponent
}

export default withLayout;