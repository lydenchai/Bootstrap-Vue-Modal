import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue';
import Conctact from '../components/pages/Contact.vue';
const routes = [
    { 
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'About',
        component: About
    },
    {
        path: '/conctact',
        name: 'Contact',
        component: Conctact
    }
];

const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;