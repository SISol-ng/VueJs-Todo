import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home'
import About from './views/About'
import Createtodo from './views/Createtodo'
import Signup from './views/Signup'
import Login from './views/Login'
import Contact from './views/Contact'
import Viewtodo from './views/Viewtodo'
import Dashboard from './views/Dashboard'
import Logout from './components/Logout'

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/add-todo',
            name: 'createtodo',
            meta: {login: true, user: ''},
            component: Createtodo
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/todos/:todoId',
            name: 'todo',
            meta: {login: true, user: ''},
            component: Viewtodo
        },
        {
            path: '/profile',
            name: 'dashboard',
            meta: {login: true, user: ''},
            component: Dashboard
        },
        {
            path: '/',
            name: 'logo',
            component: Home
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        }
    ]
})