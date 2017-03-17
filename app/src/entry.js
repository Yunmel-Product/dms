import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Home from './components/Home.vue';
import ProImglist from './components/ProImglist.vue';
import MyImglist from './components/MyImglist.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);


const router = new VueRouter({
    routes: [
        { name: 'home', path: '/home', component: Home },
        { name: 'project-list', path: '/proImglist', component: ProImglist },
        { name: 'me', path: '/myImglist', component: MyImglist }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})