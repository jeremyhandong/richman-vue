import Vue from 'vue'
import Router from 'vue-router'
import DepartmentCard from "../components/DepartmentCard";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: DepartmentCard
    }
  ]
})
