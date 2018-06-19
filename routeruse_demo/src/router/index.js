import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import Master from "@/components/master"
import Java from "@/components/course/java"
import Android from "@/components/course/android"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/course',
      name: 'course',
      redirect:"/course/java",
      children:[
      	{path:"java",name:"java",component:Java},
      	{path:"android",name:"android",component:Android}
      ],
      component: Course
    },
    {
      path: '/master/:count:user',
      name: 'master',
      component: Master
    }
  ]
})
