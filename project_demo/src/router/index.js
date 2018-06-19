import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/pages/layout"
import Detail from "@/pages/detail"
import Car from "@/pages/details/car"
import Earth from "@/pages/details/earth"
import Hill from "@/pages/details/hill"
import Loud from "@/pages/details/loud"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      redirect:"/detail/earth",
      children:[
      		{
      			name:"car",
      			path:"car",
      			component:Car
      		},
      		{
      			name:"earth",
      			path:"earth",
      			component:Earth
      		},
      		{
      			name:"hill",
      			path:"hill",
      			component:Hill
      		},
      		{
      			name:"loud",
      			path:"loud",
      			component:Loud
      		},
      ]
    }
  ]
})
