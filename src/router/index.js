import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Home from '../views/main/Home.vue'
import LayOut from '../views/LayOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayOut,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'basedata',
        name: 'BaseData',
        component: () =>import("../views/main/BaseData.vue"),
      },
      {
        path: 'practiceitem',
        name: 'PracticeItem',
        component: () =>import("../views/main/PracticeItem.vue"),
      },
      {
        path: 'workhistory',
        name: 'WorkHistor',
        component: () =>import("../views/main/WorkHistory.vue"),
      },
      {
        path: 'selfevalu',
        name: 'SelfEvalu',
        component: () =>import("../views/main/SelfEvalu.vue"),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
