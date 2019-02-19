import React, { Component } from 'react'
import withStatic from './withStatic'

const withStyles = (DecoratedComponent, ...styles) => {
  class NewComponent extends Component {
    componentWillMount() {
      if(this.props.staticContext) {
        styles.map((item) => this.props.staticContext.css.push(item._getCss()))
      }
    }

    render() {
      return <DecoratedComponent { ...this.props } />
    }
  }

  NewComponent.loadData = DecoratedComponent.loadData;

  return withStatic(NewComponent)
}

export default withStyles