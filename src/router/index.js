import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import a from '@/components/a'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: false }
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin,
      meta: { requiresAuth: false }
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup,
      meta: { requiresAuth: false }
    },
    {
      path: '/a',
      name: 'a',
      component: a,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (auth.loggedIn()) {
      next({
        path: '/Signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router