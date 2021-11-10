import Vue from 'vue'
import VueRouter from 'vue-router'

// Index
import Index from "@/views/Index";

// Dapp

import Map from "@/components/pve/Map";




Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },

  
    {
        name: 'PVE',
        path: '/dapp/pve',
        component: Map
    },


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router