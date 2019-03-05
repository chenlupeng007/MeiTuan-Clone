import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Select } from 'antd';
import debounce from 'lodash/debounce';

import withStyles from '@hoc/withStyles'
import slectStyle from 'antd/lib/select/style/index.css'
import emptyStyle from 'antd/lib/empty/style/index.css'
import spinStyle from 'antd/lib/spin/style/index.css'
import styles from './Select.scss'

import { getCities } from './actions'

const Option = Select.Option;

class MySelect extends Component {
  constructor(){
    super()

    this.state = {
      cities: [],
      data: [],
      value: [],
      isRedirect: false
    }

    this.fetchData = debounce(this.fetchData, 500)
  }

  fetchData = (value) => {
    const { allCity } = this.props

    const data = allCity.filter(item => item.value.indexOf(value) > -1)

    this.setState({ data });
  }

  handleChange = (value) => {
    const { changePosition } = this.props
    changePosition({city: value[0].label})
    this.setState({
      isRedirect: true,
      value,
      data: [],
    });
  }

  handleCityChange = (value) => {
    const { changePosition } = this.props
    const {cities} = this.state
    const city = cities.filter(item => item.value == value)[0]
    changePosition({city: city.label})
    this.setState({
      isRedirect: true
    })
  }

  handleProvinceChange = (value) => {
    getCities(value).then((cities)=> {
      this.setState({
        cities,
      });
    })
  }

  render(){
    const { cities, data, value, isRedirect } = this.state;
    const { provinces } = this.props
    return isRedirect ? <Redirect to="/" /> : (
      <div>
        <span>按省份选择:</span>
        <Select
          className={styles.input}
          placeholder='省份'
          onChange={this.handleProvinceChange}>
          {provinces.map(province => <Option key={province.value}>{province.label}</Option>)}
        </Select>
        <Select
          className={styles.input}
          placeholder='城市'
          onChange={this.handleCityChange}>
          {cities.map(city => <Option key={city.value}>{city.label}</Option>)}
        </Select>
        <Select
          className={styles.input}
          mode="multiple"
          labelInValue
          value={value}
          placeholder='请输入城市中文或拼音'
          notFoundContent={null}
          filterOption={false}
          onSearch={this.fetchData}
          onChange={this.handleChange}
        >
          {data.map(d => <Option key={d.value}>{d.value}</Option>)}
        </Select>
      </div>
    )
  }
}

export default withStyles(MySelect, slectStyle, emptyStyle, spinStyle, styles)