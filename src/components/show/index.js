import Vue from 'vue'
import Editor from './index.vue'
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#content',
  render: h => h(Editor)
});
