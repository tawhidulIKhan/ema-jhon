import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import Review from './components/Pages/Review'
import ManageInventory from './components/Pages/ManageInventory'
import PlaceOrder from "./components/Pages/PlaceOrder";
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/review', component: Review },
  { path: '/shop', component: Shop },
  { path: '/manage', component: ManageInventory },
  { path: '/place-order', component: PlaceOrder }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
