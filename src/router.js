import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const home = () => import( /* webpackChunkName: "home" */ './views/home.vue')
const vue2 = () => import( /* webpackChunkName: "vue2" */ './views/vue2.vue')
const css3 = () => import( /* webpackChunkName: "css3" */ './views/css3.vue')
const webpack4 = () => import( /* webpackChunkName: "webpack4" */ './views/webpack4.vue')
const htm5 = () => import( /* webpackChunkName: "htm5" */ './views/htm5.vue')
const es6 = () => import( /* webpackChunkName: "es6" */ './views/es6.vue')
export default new VueRouter({
    mode: "history",
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },

        {
            path: '/vue2',
            name: 'vue2',
            component: vue2
        },
        {
            path: '/css3',
            name: 'css3',
            component: css3
        },
        {
            path: '/webpack4',
            name: 'webpack4',
            component: webpack4
        },
        {
            path: '/htm5',
            name: 'htm5',
            component: htm5
        },
        {
            path: '/es6',
            name: 'es6',
            component: es6
        },
    ]
})