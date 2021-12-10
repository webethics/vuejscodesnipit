import Home from '@views/Home/Index.vue'
import NotFound from '@views/Errors/404.vue'

const homeRoutes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // redirect to not found page
    {
      path: '/:cacheAll(.*)',
      name: '404',
      component: NotFound
    }
  ]
  
export default homeRoutes;