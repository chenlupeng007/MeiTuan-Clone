import React from 'react'
import { Button } from 'antd';

import styles from './Detail.scss'

const Item = ({meta}) => {
  return !meta.photos.length ? null :
  <li className = {styles.item}>
    <dl className={styles.section}>
      <dd>
          <img src={meta.photos[0].url}/>
      </dd>
      <dd>
        <h4>{ meta.name }</h4>
        <p>
          { meta.biz_ext && meta.biz_ext.ticket_ordering ?
            <span>
                剩余：{ Number(meta.biz_ext.ticket_ordering) }
            </span> : null
          }
          {
              meta.deadline ? <span>{meta.deadline}</span> : null
          }
        </p>
        <p>
          <span className={styles.price}>{ Number(meta.biz_ext.cost) }</span>
          <sub>门店价{ Number(meta.biz_ext.cost) }</sub>
        </p>
      </dd>
      <dd>
        <Button type='danger' shape='round'>立即抢购</Button>
      </dd>
    </dl>
  </li>
}

const List = ({ list }) => (
  <div className={styles.list}>
    <ul>
      <li>
        { list.filter(item => item.photos.length).length }款套餐
      </li>
      {
        list.map((item, index) => (
          <Item key={index} meta={item}/>
        ))
      }
    </ul>
  </div>
)

export default List