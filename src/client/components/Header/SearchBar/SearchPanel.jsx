import React, { Component } from 'react'
import debounce from 'lodash.debounce'

import { Input } from 'antd';
import styles from './SearchBar.scss'

const Search = Input.Search

const HotPlaces = (props) => (
  <dl className={styles.hotPlace}>
    <dt>热门搜索</dt>
    {
      props.hotPlaces.map((item, index) => (
        <dd key={index}>
          <a href="#">{item.name}</a>
        </dd>
      ))
    }
  </dl>
)

const SearchList = (props) => (
  <dl className={styles.searchList}>
    {
      props.searchList.map((item, index) => (
        <dd key={index}>
          <a href="#">{item.name}</a>
        </dd>
      ))
    }
  </dl>
)

class SearchPanel extends Component {
  constructor() {
    super()

    this.state = {
      isFocus: false,
      inputValue: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.dealWithInput(e.target.value)
  }

  dealWithInput = debounce((value)=>{
    if(!value) {
      this.setState({
        inputValue: value,
      })

      return
    }

    const { getSearchList, city } = this.props
    getSearchList({input: value, city: city.replace('市', '')})
    .then(()=> {
      this.setState({
        inputValue: value,
      })
    })
  }, 300)

  handleBlur = () => {
    setTimeout(() => {
      this.setState({
        isFocus: false,
      })
    }, 100);
  }

  handleFocus = () => {
    this.setState({
      isFocus: true
    })
  }

  render() {
    const { isFocus, inputValue } = this.state
    const { searchList, hotPlace} = this.props

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <Search
            placeholder="搜索商家或地点"
            enterButton
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
          {isFocus && !inputValue ? <HotPlaces hotPlaces={hotPlace.slice(0, 7)} /> : null}
          {isFocus && inputValue ? <SearchList searchList={searchList.slice(0,7)} /> : null}
        </div>
        <p className={styles.suggest}>
          {
            hotPlace.slice(0, 7).map((item, index) => (
              <a href="#" key={index}>{item.name}</a>
            ))
          }
        </p>
      </React.Fragment>
    )
  }
}

export default SearchPanel;