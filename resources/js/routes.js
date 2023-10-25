// import Home from './pages/home/Home.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';


export default [
    {
        path: '/',
        name: 'home.home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about.about',
        component: About,
    },
]
