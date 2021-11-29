import Vue from 'vue';
import Router from 'vue-router';

Vue.prototype.trans = (key) => {
    return _.get(window.trans, key, key);
};
import { userService } from '../_services';
import { Role } from '../_helpers';
/*Front Page*/
/*Static Pages*/
import HomePage from '../pages/home'
import AboutUsPage from '../pages/about-us'

/*Product Pages*/

import VillaListing from '../products/villa'
import VillaDetails from '../products/villa/details'
/*Login and Register*/

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { name: 'home',path: '/', component: HomePage,meta: { title: siteTitle } },
    { name: 'about',path: '/about-us', component: AboutUsPage, meta: { title: siteTitle + '| '+trans.global.front_page.about_us } },
    { name: 'villa-listing',path: '/products/villa/', component: VillaListing, meta: { title: siteTitle +'| '+trans.global.product_pages.villa_listing } },
    { name: 'villa-detail',path: '/products/villa/details/:villaId', props: true,component: VillaDetails, meta: { title: siteTitle +'| '+trans.global.product_pages.villa_detail } },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // redirect to login page if not logged in and trying to access a restricted page
  /*const publicPages = ['/login', '/register','/about-us','/','/why-us','/travellers','/refund-cancellation-policy','/privacy-policy','/property-owners','/terms-conditions','/testimonials','/contact-us','/hotel'];*/

  /*const authRequired = !publicPages.includes(to.path);*/
  /*Check ig meta akey authorize key exist then required login else public pages*/
  const authRequired = !(!to.meta.authorize);
  const loggedIn = userService.currentUserValue;

  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;

  if (authRequired && loggedIn === null) {
    return next('/');
  }
  if (loggedIn && authorize) {
     // check if route is restricted by role
      if (authorize.length && !authorize.includes(loggedIn.role)) {
          // role not authorised so redirect to home page
          return next({ path: '/' });
      }
  }
  next();
})