import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Mains from '../views/main/Mains.vue'
import LayOut from '../views/LayOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayOut,
    children:[
      {
        path: '',
        name: 'Mains',
        component: Mains,
      },
      {
        path: 'firstone',
        name: 'FirstOne',
        component: () =>import("../views/main/FirstOne.vue"),
      },
      {
        path: 'secondtwo',
        name: 'SecondTwo',
        component: () =>import("../views/main/SecondTwo.vue"),
      },
      {
        path: 'thirdthree',
        name: 'ThirdThree',
        component: () =>import("../views/main/ThirdThree.vue"),
      },
      {
        path: 'furthefour',
        name: 'FurtheFour',
        component: () =>import("../views/main/FurtheFour.vue"),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
