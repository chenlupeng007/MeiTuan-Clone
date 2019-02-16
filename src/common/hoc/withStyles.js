import React, { Component } from 'react'

const withStyles = (DecoratedComponent, ...styles) => {
  return class extends Component {
    componentWillMount() {
      if(this.props.staticContext) {
        styles.map((item) => this.props.staticContext.css.push(item._getCss()))
      }
    }

    render() {
      return <DecoratedComponent { ...this.props } />
    }
  }
}

export default withStyles