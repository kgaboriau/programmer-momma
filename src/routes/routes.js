import Home from '@/routes/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './AboutView.vue')
  }
]

export default routes
