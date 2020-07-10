import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //base:'',
  //mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: () => import('../pages/Mainpage')
    },
    {
      path: '/programming',
      name: 'Programming',
      component: () => import('../pages/Programming')
    },
    {
      path: '/themes',
      name: 'Themes',
      component: () => import('../pages/Themes')
    },
    {
      path: '/musicandsound',
      name: 'MusicAndSound',
      component: () => import('../pages/MusicAndSound')
    },
    {
      path: '/games',
      name: 'Games',
      component: () => import('../pages/Games')
    },
    {
      path: '/photos',
      name: 'Photos',
      component: () => import('../pages/Photos')
    },
    {
      path: '/relations',
      name: 'Relations',
      component: () => import('../pages/Relations')
    },
    {
      path: '/tools',
      name: 'Tools',
      component: () => import('../pages/Tools')
    },
    {
      path: '/network',
      name: 'Network',
      component: () => import('../pages/Network')
    },
    {
      path: '/office',
      name: 'Office',
      component: () => import('../pages/Office')
    },
    {
      path: '/others',
      name: 'Others',
      component: () => import('../pages/Others')
    },
    {
      path: '/reading',
      name: 'Reading',
      component: () => import('../pages/Reading')
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../pages/Videos')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../pages/Search')
    }
  ]
})
