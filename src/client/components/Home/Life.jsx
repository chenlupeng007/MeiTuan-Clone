import React from 'react'
import {Link} from 'react-router-dom'

import { Row, Col, Button, Carousel} from 'antd'

import withStyles from '@hoc/withStyles';

import styles from './Life.scss'
import sliderStyle from 'antd/lib/carousel/style/index.css'

import imgs from './imgs'

const Slider = () => (
  <div className={styles.slide}>
    <Carousel autoplay>
      {
        imgs.map((item) => (
          <div key={item.url}>
            <img src={item.img} />
          </div>
        ))
      }
    </Carousel>
  </div>
)

const Life = () => (
  <div className={styles.life} >
    <Row>
      <Col span={14}>
        <Slider/>
      </Col>
      <Col span={4}>
        <div className={styles.pic}></div>
      </Col>
      <Col span={6}>
        <div className={styles.login}>
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt=""/>
          </h4>
          <p className={styles.login_name}>Hi！你好</p>
          <p>
            <Link to='/register'>
              <Button>注册</Button>
            </Link>
          </p>
          <p>
            <Link to='/login'>
              <Button>立即登录</Button>
            </Link>
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span={7}>
        <div className={styles.hotel}></div>
      </Col>
      <Col span={7}>
        <div className={styles.music} ></div>
      </Col>
      <Col span={4}>
        <div className={styles.coop} ></div>
      </Col>
      <Col span={6}>
        <div className={styles.downapp}>
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP"/>
          <p>美团APP手机版</p>
          <h4>
            <span>1元起</span><em>吃喝玩乐</em>
          </h4>
        </div>
      </Col>
    </Row>
  </div>
)

export default withStyles(Life, sliderStyle, styles);