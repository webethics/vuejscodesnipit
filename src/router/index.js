import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './home.routes'
import blogRoutes from './blog.routes'
import ContactUs from '@views/ContactUs/Index.vue'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [
  ...blogRoutes,
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  ...homeRoutes,
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
