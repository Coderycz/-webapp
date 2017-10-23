import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import player from '@/components/player'
import recommend from '@/components/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },{
      path: '/player',
      component: player
    },{
      path: '/recommend',
      component: recommend
    }
  ]
})
