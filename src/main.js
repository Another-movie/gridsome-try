// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = {
    lang: 'ru'
  }
  head.bodyAttrs = {
    class: 'body'
  }
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('disq', VueDisqus)
  Vue.use(VueDisqus)
}
