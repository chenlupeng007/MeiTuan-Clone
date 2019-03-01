import React, { Component } from 'react'

import withStyles from '@hoc/withStyles';

import styles from './Menu.scss'

const List = (props) => (
  <dl
    className={styles.nav}
    onMouseLeave={props.mouseLeave}
  >
    <dt>全部分类</dt>
    {
      props.menu.map((item) => (
        <dd key={`${item.type}`} onMouseEnter={props.mouseEnter}>
          <i className={`${styles[item.type]}`} />
          {item.name} <span className={styles.arrow}></span>
        </dd>
      ))
    }
  </dl>
)

const Detail = (props) => (
  <div
    className={styles.detail}
    onMouseEnter={props.mouseEnterDetail}
    onMouseLeave={props.mouseLeaveDetail}
  >
    {
      props.current.child.map((item) => (
        <div key={item.title}>
          <h4>{item.title}</h4>
          {
            item.child.map((item) => (
              <span key={item}>{item}</span>
            ))
          }
        </div>
      ))
    }
  </div>
)

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      kind: '',
      menu: props.menu,
      current: null
    }

    this.timer = null

    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.mouseEnterDetail = this.mouseEnterDetail.bind(this)
    this.mouseLeaveDetail = this.mouseLeaveDetail.bind(this)
  }

  mouseEnter(e) {
    let value = e.target.querySelector('i').className.split('_')[1];
    this.setState({
      kind: value,
      current: this.state.menu.find((item) => item.type == value)
    })
  }

  mouseLeave(e) {
    this.timer = setTimeout(() => {
      this.setState({
        kind: ''
      })
    }, 100);
  }

  mouseEnterDetail() {
    clearTimeout(this.timer)
  }

  mouseLeaveDetail() {
    this.setState({
      kind: ''
    })
  }

  render() {
    const { menu, kind, current } = this.state
    return(
      <div className={styles.menu}>
        <List menu={menu} mouseEnter={this.mouseEnter} mouseLeave={this.mouseLeave}/>
        {
          kind ? <Detail
                    current={current}
                    mouseEnterDetail={this.mouseEnterDetail}
                    mouseLeaveDetail={this.mouseLeaveDetail}
                  /> : null
        }
      </div>
    )
  }
}

export default withStyles(Menu, styles)