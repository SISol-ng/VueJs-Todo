<template>
    <header>
        <div class="site-brand">
            <router-link v-if="!login" to="/" active-class="active" exact>
                <img width="50px" src="../assets/logo.png" alt="My Todo App Logo" />
                <span class="site-name">TODO</span>
            </router-link>
            <router-link v-if="login" to="/profile" active-class="active" exact>
                <img width="50px" src="../assets/logo.png" alt="My Todo App Logo" />
                <span class="site-name">TODO</span>
            </router-link>
        </div>
        <ul class="nav-menu">
            <li v-show="!login"><router-link to="/" active-class="active" exact>Home</router-link></li>
            <li v-show="!login"><router-link to="/about" active-class="active">About Us</router-link></li>
            <li v-show="login"><router-link to="/add-todo" active-class="active">Create Todo</router-link></li>
            <li v-show="!login"><router-link to="/signup" active-class="active">Sign Up</router-link></li>
            <li v-show="!login"><router-link to="/login" active-class="active">Login</router-link></li>
            <li v-show="!login"><router-link to="/contact" active-class="active">Contact Us</router-link></li>
            <li v-show="login" class="drop-down"><router-link to="/profile" active-class="active">
                <span id="profile-icon"><img src="../assets/logo.png" alt="My Todo App Logo" /></span></router-link>
                <ul class="drop-menu">
                    <li><router-link to="/profile" active-class="active">Dashboard</router-link></li>
                    <li><router-link to="/updatepass" active-class="active">Change Password</router-link></li>
                    <li><router-link to="/logout" active-class="active">Logout</router-link></li>
                </ul>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                login: false
            }
        },
        watch: {
            '$route' (to) {
                this.login = to.meta.login || false
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 10px;
        background-color: gray;
    }
    .nav-menu {
        list-style-type: none;
        display: flex;
    }
    li a {
        margin: 10px;
        color: white;
        text-decoration: none;
    }
    li a:hover {
        text-decoration: underline;
        color: blue;
    }
    li a.active {
        text-decoration: underline;
        color: blue;
    }
    #profile-icon img {
        border: 1em auto;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        border: 1px solid white;
        overflow: hidden;
        padding: 2px;
    }
    .drop-menu {
        display: none;
        list-style-type: none;
        position: absolute;
        right: 10px;
        background-color: rgb(156, 150, 150);
        padding: 5px;
        width: 160px;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .drop-menu li {
        margin: 20px 0 20px 0;
        text-align: left;
        display: block;
    }
    .drop-down:hover .drop-menu {
        display: block;
    }
    a .site-name{
        font-size: 35px;
        color:rgb(9, 192, 131);
        font-weight: bold;
        margin-left: -5px;
    }
    .site-brand a.active{
        text-decoration: none;
    }
    .site-brand a{
        text-decoration: none;
    }
</style>