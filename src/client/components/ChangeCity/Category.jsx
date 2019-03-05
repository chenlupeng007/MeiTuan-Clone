import React, { Component } from 'react'
import { Redirect } from 'react-router'

import pyjs from 'js-pinyin'

import withStyles from '@hoc/withStyles'
import styles from './Category.scss'

const category = (allCity) => {
  const data = []
  const block = {}

  allCity.forEach(item => {
    const first = pyjs.getFullChars(item.value).toLocaleLowerCase().slice(0, 1)
    if (!block[first]) {
      block[first] = []
    }
    block[first].push(item.value)
  })
  for (let [k, v] of Object.entries(block)) {
    data.push({
      title: k.toUpperCase(),
      city: v
    })
  }
  data.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))

  return data
}

class Category extends Component {
  constructor() {
    super()
    this.state = {
      isRedirect: false
    }
  }
  handleClick = (e) => {
    const value = e.target.textContent

    const cities = this.props.allCity.map(item=> item.value)
    if(cities.indexOf(value) > -1) {
      const { changePosition } = this.props
      changePosition({city: value})
      this.setState({
        isRedirect: true
      })
    }
  }

  render() {
    const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const { allCity } = this.props
    const { isRedirect } = this.state
    const data = category(allCity)

    return isRedirect ? <Redirect to="/" /> : (
      <div onClick={this.handleClick}>
        <dl className={styles.category}>
          <dt>按拼音首字母选择：</dt>
          {list.map(item => (
            <dd key={item}>
              <a href={`#city-${item}`}>{item}</a>
            </dd>
          ))}
        </dl>
        {data.map(item => (
          <dl key={item.title} className={styles.section}>
            <dt id={`city-${item.title}`}>{item.title}</dt>
            <dd>
              {item.city.map(city => (
                <span key={city}>{city}</span>
              ))}
            </dd>
          </dl>
        ))}
      </div>
    )
  }
}

export default withStyles(Category, styles)