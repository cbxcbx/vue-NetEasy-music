import Vue from 'vue'
import { Button, Message } from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import 'assets/font-icon/iconfont.css'
import 'common/style/index.scss'

Vue.config.productionTip = false

Vue.use(Button);
Vue.component(Message.name, Message);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
