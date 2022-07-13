// import store from '@/store/index.js'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main',
      requiresAuth: true
    },
    component: HomeView
  },
  {
    path: '/graph',
    name: 'graph',
    meta: {
      layout: 'main',
      requiresAuth: true
    },
    component: () => import('@/views/GraphView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
