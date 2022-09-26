import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      children:[
        {
          path: '',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('../views/Team.vue')
        },
      ]
    },
    {
      path: '/services',
      children:[
        {
          path: 'audit',
          name: 'audit',
          component: () => import('../views/services/Hraudit.vue')
        },
        {
          path: 'hrmanagement',
          name: 'hrmanagement',
          component: () => import('../views/services/Hrmanagement.vue')
        },
        {
          path: 'recruitment',
          name: 'recruitment',
          component: () => import('../views/services/Recruitment.vue')
        },
        {
          path: 'organization',
          name: 'organization',
          component: () => import('../views/services/Organization.vue')
        },
        {
          path: 'expatriates',
          name: 'expatriates',
          component: () => import('../views/services/Expatriates.vue')
        },
        {
          path: 'secretatial',
          name: 'secretatial',
          component: () => import('../views/services/Secretarial.vue')
        },
        {
          path: 'learning',
          name: 'learning',
          component: () => import('../views/services/Learning.vue')
        },
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
  ]
})

export default router
