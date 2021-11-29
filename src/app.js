import Vue from 'vue';
//import VeeValidate from 'vee-validate';
import  BootstrapVue  from 'bootstrap-vue'

import Notifications from 'vue-notification'
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

//import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

Vue.prototype.trans = (key) => {
    return _.get(window.trans, key, key);
};

//Vue.prototype.$appName = 'My App'

//Vue.use(VeeValidate);
Vue.use(BootstrapVue);
//Vue.use(Vuelidate);
Vue.use(PerfectScrollbar);
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places',
  },

  installComponents: true
});

Vue.use(Notifications)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});