import React from 'react'
import { renderRoutes } from 'react-router-config'

import { withStyles } from '@hoc';
import commonStyle from 'antd/lib/style/index.css';

const Empty = (props) => (
  <React.Fragment>
    { renderRoutes(props.route.routes) }
  </React.Fragment>
)

export default withStyles(Empty, commonStyle)