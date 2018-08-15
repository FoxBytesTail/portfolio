import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import GithubRepoCards from './components/GithubRepoCards.vue'
import ReadMore from 'vue-read-more'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(ReadMore)
Vue.use(ElementUI)

Vue.component('Element', ElementUI)

Vue.config.productionTip = false

const routes = [{
  path: '/',
  component: GithubRepoCards
}, {
  path: '/experience',
  component: Experience
},
{
  path: '/contact',
  component: Contact
}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

document.title = 'Youngmin Lee'
