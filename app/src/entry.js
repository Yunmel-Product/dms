import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import ProImglist from './components/ProImglist.vue';
import MyImglist from './components/MyImglist.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);


const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/proImglist', component: ProImglist },
    { path: '/myImglist', component: MyImglist }
]


const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})