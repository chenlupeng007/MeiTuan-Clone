import React, { Component } from 'react'

import { Input } from 'antd';
import styles from './SearchBar.scss'

const Search = Input.Search

const HotPlaces = (props) => (
  <dl className={styles.hotPlace}>
    <dt>热门搜索</dt>
    {
      props.hotPlaces.slice(0,5).map((item) => (
        <dd key={item}>
          <a href="#">{item}</a>
        </dd>
      ))
    }
  </dl>
)

const SearchList = (props) => (
  <dl className={styles.searchList}>
    {
      props.searchList.map((item) => (
        <dd key={item}>
          <a href="#">{item}</a>
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
      hotPlaces: ['故宫博物院', '北京世界公园', '故宫珍宝馆', '颐和园', '北京欢乐谷', '天坛公园', '八达岭长城', '圆明园'],
      searchList: ['八达岭长城', '北京博物馆', '北京欢乐谷', '北京动物园', '北海公园']
    }
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleBlur() {
    setTimeout(() => {
      this.setState({
        isFocus: false,
      })
    }, 100);
  }

  handleFocus() {
    this.setState({
      isFocus: true
    })
  }

  render() {
    const {isFocus, inputValue, hotPlaces, searchList } = this.state

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <Search
            placeholder="搜索商家或地点"
            // onSearch={this.handleSearch.bind(this)}
            enterButton
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
          />
          {isFocus && !inputValue ? <HotPlaces hotPlaces={hotPlaces} /> : null}
          {isFocus && inputValue ? <SearchList searchList={searchList} /> : null}
        </div>
        <p className={styles.suggest}>
          {
            hotPlaces.map((item) => (
              <a href="#" key={item}>{item}</a>
            ))
          }
        </p>
      </React.Fragment>
    )
  }
}

export default SearchPanel;