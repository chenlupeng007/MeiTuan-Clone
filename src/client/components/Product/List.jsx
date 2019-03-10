import React from 'react'
import {Link} from 'react-router-dom'
import { Rate } from 'antd';

import styles from './Product.scss'

const nav = [
  {
    name: 's-default',
    txt: '智能排序',
    acitve: true
  }, {
    name: 's-price',
    txt: '价格最低',
    active: false
  }, {
    name: 's-visit',
    txt: '人气最高',
    active: false
  }, {
    name: 's-comment',
    txt: '评价最高',
    active: false
  }
]

const Item = ({meta}) => (
  <dl className={styles.item}>
    <dt>
      <img src={meta.img} alt="商品图片" />
    </dt>
    <dd>
      <h3>
        <Link to={{ pathname: '/detail', search: `?keyword=${meta.name}&type=${meta.module}` }}>{meta.name}</Link>
      </h3>
      <Rate value={meta.rate} disabled style={{fontSize: '12px'}} />
      {
        ((meta)=> {
          if(meta.rate > 4) return <span>很好</span>
          else if(meta.rate > 3) return <span>一般</span>
          else return <span>很差</span>
        })(meta)
      }
      <span>{ meta.rate }分</span>
      <span className={styles.total}>{ meta.comment }人评论</span>
      <p>
        <span>{ meta.type }</span>
        <span>{ meta.addr }</span>
      </p>
      <p>
        <em className ={styles.price}>￥{ meta.price }起</em>
        <b>{ meta.status }</b>
      </p>
      <div className={styles.my}>
        <ul>
          {
            meta.scene && meta.scene.length ?
              <li>
                <span className={styles.detail}>景酒</span>{ meta.scene }
              </li> :
              <li>
                <span className={styles.detail}>景酒</span>暂无描述
              </li>
          }
        </ul>
      </div>
    </dd>
  </dl>
)

const List = ({ list }) => (
  <div className = {styles.list}>
    <dl>
      {
        nav.map((item)=>(
          <dd key={item.name}
          className={`${item.name}${item.acitve ? ' s-nav-active' : ''}`}
          > { item.txt }
          </dd>
        ))
      }
    </dl>
    <ul>
      {
        list.map((item, index) => (
          <Item key = {index} meta = {item}/>
        ))
      }
    </ul>
  </div>
)

export default List