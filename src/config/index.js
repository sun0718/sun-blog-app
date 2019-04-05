
module.exports = {
    host:{ 
        baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/apis' : '/api'
    },
    categorie: [{
        value: 'work',
        label: '工作相关',
        children: [{
          value: 'pingAn',
          label: '平安集团',
          children: [{
            value: 'yizhangtong',
            label: '平安壹账通'
          }, {
            value: 'keji',
            label: '平安科技'
          }]
        }, {
          value: 'xinruitai',
          label: '信瑞泰',
        }]
      }, {
        value: 'life',
        label: '生活旅游',
        children: [{
          value: 'richang',
          label: '日常',
          children: [{
            value: 'meishi',
            label: '美食'
          }, {
            value: 'run',
            label: '运动'
          }]
        }, {
          value: 'lvyou',
          label: '旅游',
          children: [{
            value: 'sanya',
            label: '三亚'
          }, {
            value: 'wuxi',
            label: '无锡'
          }, {
            value: 'haerbin',
            label: '哈尔滨'
          }, {
            value: 'huangshan',
            label: '黄山'
          }]

        }]
      }, {
        value: 'study',
        label: '前端学习',
        children: [{
          value: 'HTML&CSS',
          label: 'HTML&CSS'
        }, {
          value: 'Javascript',
          label: 'Javascript'
        }, {
          value: 'VUE',
          label: 'VUE'
        },{
            value: 'REACT',
            label: 'REACT'
        },{
            value: 'Flutter',
            label: 'Flutter'
        }]
      }]
}