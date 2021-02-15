import Vue from 'vue'
import VueRouter from 'vue-router'
import exo5 from "@/pages/exo5";

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'TheLoginPage',
        component: exo5
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
