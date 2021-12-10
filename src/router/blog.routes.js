import Blog from '@views/Blog/Index.vue'
import BlogDeatils from '@views/Blog/Details.vue'

const blogRoutes = [
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'BlogDetails',
      component: BlogDeatils
    }
  ]
  
export default blogRoutes;