import React from 'react'

import { Card } from 'antd';

import withStyles from '@hoc/withStyles';
import cardStyles from 'antd/lib/card/style/index.css'
import tabStyles from 'antd/lib/tabs/style/index.css'
import styles from './Artistic.scss'

class Artistic extends React.Component {
  constructor() {
    super()

    this.state = {
      kind: 'all'
    }

    this.mouseOver = this.mouseOver.bind(this)
  }

  mouseOver(e) {
    let dom = e.target
    let tag = dom.tagName.toLowerCase()
    if(tag == 'dd') {
      let kind = dom.getAttribute('kind')
      let keyword = dom.getAttribute('keyword')
      const { list, getList } = this.props

      if(!list[kind]) {
        getList(keyword, kind).then(() => {
          this.setState({
            kind: kind
          })
        })
      } else {
        this.setState({
          kind: kind
        })
      }
    }
  }

  render() {
    const { kind } = this.state
    const { list } = this.props
    const current = list[kind].slice(0, 6)

    return (
      <section className={styles.istyle}>
        <dl onMouseOver = { this.mouseOver }>
          <dt>有格调</dt>
          <dd kind="all" keyword="景点"
            className = { kind == 'all' ? styles.active : null}>
            全部
          </dd>
          <dd kind="part" keyword="美食"
            className={kind == 'part' ? styles.active : null}>
            约会聚餐
          </dd>
          <dd kind="spa" keyword="丽人"
            className={kind == 'spa' ? styles.active : null}>
            丽人SPA
          </dd>
          <dd kind="movie" keyword="电影"
            className={kind == 'movie' ? styles.active : null}>
            电影演出
          </dd>
          <dd kind="travel" keyword="旅游"
            className={kind == 'travel' ? styles.active : null}>
            品质出游
          </dd>
        </dl>
        <ul className = { styles.ibody }>
          {
            current.map((item, index) => (
              <li key = { index }>
                <Card className = {styles.card}>
                  <img src={ item.img }/>
                  <ul className = { styles.cbody }>
                    <li className = { styles.title }>
                      { item.title }
                    </li>
                    <li className={ styles.pos }>
                      <span>{ item.pos }</span>
                    </li>
                    <li className = { styles.price }>
                      ￥<em>{ item.price }</em><span>/起</span>
                    </li>
                  </ul>
                </Card>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}

export default withStyles(Artistic, cardStyles, tabStyles, styles)