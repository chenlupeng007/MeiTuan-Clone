import React from 'react'
import { Link } from 'react-router-dom'

import withStyles from '@hoc/withStyles';
import styles from './Nav.scss'

const Nav = () => (
  <ul className={styles.nav}>
    <li className={styles.list}>
      <Link to='/'>我的美团</Link>
      <dl>
        <dd><Link to='/'>我的订单</Link></dd>
        <dd><Link to='/'>我的收藏</Link></dd>
        <dd><Link to='/'>抵用券</Link></dd>
        <dd><Link to='/'>账户设置</Link></dd>
      </dl>
    </li>
    <li>
      <Link to='/'>手机APP</Link>
    </li>
    <li className={styles.list + ' ' + styles.bd}>
      <Link to='/'>商家中心</Link>
      <dl>
        <dd><Link to="/userCenter">登录商家中心</Link></dd>
        <dd><Link to="/coop">我想合作</Link></dd>
        <dd><Link to="/wap">免费手机开店</Link></dd>
        <dd><Link to="/kaipiao">商家申请开票</Link></dd>
      </dl>
    </li>
    <li className={styles.list}>
      <Link to='/'>网站导航</Link>
      <div className={styles.subContainer}>
        <dl className={styles.hotel}>
          <dt>酒店旅游</dt>
          <dd>国际机票</dd>
          <dd>经济型酒店</dd>
          <dd>公寓</dd>
          <dd>青年旅社</dd>
          <dd>农家院</dd>
          <dd>国际机票</dd>
          <dd>经济型酒店</dd>
          <dd>公寓</dd>
          <dd>青年旅社</dd>
          <dd>农家院</dd>
        </dl>
        <dl className={styles.food}>
          <dt>吃美食</dt>
          <dd>烤鱼</dd>
          <dd>特色小吃</dd>
          <dd>烧烤</dd>
          <dd>自助餐</dd>
          <dd>火锅</dd>
          <dd>代金券</dd>
        </dl>
        <dl className={styles.movie}>
          <dt>看电影</dt>
          <dd>热映电影</dd>
          <dd>热映电影</dd>
          <dd>热映电影口碑榜</dd>
          <dd>最受期待电影</dd>
          <dd>国内票房榜</dd>
          <dd>北美票房榜</dd>
          <dd>电影排行榜</dd>
        </dl>
        <dl className={styles.app}>
          <dt>手机应用</dt>
          <dd>
            <a href="#">
              <img
                src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"/>
            </a>
          </dd>
          <dd>
            <a href="#">
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"/>
            </a>
          </dd>
          <dd>
            <a href="#">
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                title="糖果app"
                alt="糖果app"/>
            </a>
          </dd>
          <dd>
            <a href="#">
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="榛果app"
                alt="榛果app"/>
            </a>
          </dd>
          <dd>
            <a href="#">
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app" />
            </a>
          </dd>
        </dl>
      </div>
    </li>
  </ul>
)

export default withStyles(Nav, styles);