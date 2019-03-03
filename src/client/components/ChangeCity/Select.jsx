import React, { Component } from 'react'
import { Select } from 'antd';

import withStyles from '@hoc/withStyles'
import slectStyle from 'antd/lib/select/style/index.css'
import emptyStyle from 'antd/lib/empty/style/index.css'
import styles from './Select.scss'

const Option = Select.Option;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class MySelect extends Component {
  constructor(){
    super()

    this.state = {
      cities: cityData[provinceData[0]],
    }
  }

  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
    });
  }

  render(){
    const { cities } = this.state;
    return (
      <div>
        <span>按省份选择:</span>
        <Select placeholder='省份' className={styles.input} onChange={this.handleProvinceChange}>
          {provinceData.map(province => <Option key={province}>{province}</Option>)}
        </Select>
        <Select placeholder='城市' className={styles.input}>
          {cities.map(city => <Option key={city}>{city}</Option>)}
        </Select>
      </div>
    )
  }
}

export default withStyles(MySelect, slectStyle, emptyStyle, styles)