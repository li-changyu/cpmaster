import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/border.css'
import 'styles/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

const whitePage = ['/api/user', '/home', '/', '/login', '/questionaire', '/news']
router.beforeEach(function (to, from, next) {
  if (!store.state.isLogin) {
    if (whitePage.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted: function () {
    axios.get('/api/user').then((res) => {
      console.log(res.data)
    })
  }
})
