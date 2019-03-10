import React from 'react'
import { Rate, Carousel } from 'antd';

import styles from './Detail.scss'

const Summary = ({ meta }) => {
  if(meta instanceof Array && meta.length == 0) return null
  const rate = Number(meta.biz_ext.rating) || Math.floor(Math.random() * 5)
  return (
    <dl className={styles.summary}>
      <dt>
        <h1>{meta.name}</h1>
        <Rate value={rate} disabled style={{ fontSize: '12px' }} />
        <span>{rate}分</span>
        <span>人均￥{Number(meta.biz_ext.cost)}</span>
        <div className={styles.my}>
          <ul>
            <li>地址：{meta.address}</li>
            <li>电话：{meta.tel}</li>
          </ul>
        </div>
      </dt>
      <dd>
        <Carousel>
          {
            meta.photos.map((item, key) => (
              <h3 key={key}>
                <img src={item.url} style={{width: '100%', height: '214px'}} />
              </h3>
            ))
          }
        </Carousel>
      </dd>
    </dl>
  )
}

export default Summary