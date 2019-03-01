const menu = [{
  type: 'food',
  name: '美食',
  child: [{
    title: '美食',
    child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
  }]
}, {
  type: 'takeout',
  name: '外卖',
  child: [{
    title: '外卖',
    child: ['美团外卖']
  }]
}, {
  type: 'hotel',
  name: '酒店',
  child: [{
    title: '酒店星级',
    child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
  }]
}, {
  type: 'homestay',
  name: '榛果民宿',
  child: [{
    title: '热门城市',
    child: ['上海', '成都', '北京', '重庆', '南京']
  }]
}, {
  type: 'movie',
  name: '猫眼电影',
  child: [{
    title: '热映电影',
    child: ['流浪地球', '驯龙高手', '黑客帝国', '人工智能', '看不见的客人']
  }, {
    title: '热门影院',
    child: ['万达影城', '中影国际', '大地影院', '金逸影城']
  }]
}]

export default menu;