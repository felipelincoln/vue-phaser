import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/]

// import mixins from "./mixins";
// Vue.mixin(mixins)

// https://www.npmjs.com/package/vue-scrollto
const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  easing: "ease",
})


// Lazy Video
// https://adrienhobbs.github.io/vue-lazyload-video/
import VueLazyLoadVideo from 'vue-lazyload-video'
Vue.use(VueLazyLoadVideo)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
