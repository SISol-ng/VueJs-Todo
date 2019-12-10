<template>
    <div class="main-content-page">
        <h1>Login Page</h1>
        <form class="sign-pane">
            <h2 class="sign-head">User's Login Details</h2>
            <p class="errorMessage" v-if="errorMessage.length !== 0">{{errorMessage}}</p>
            <p class="successMessage" v-if="successMessage.length !== 0">{{successMessage}}</p>
            <div class="input-field">
                <label for="username">Email Address</label>
                <input type="text" id="username" @focus="errorMessage=''; successMessage=''" placeholder="Enter Your Email Address" v-model="username"/>
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input type="password" id="password" @focus="errorMessage=''; successMessage=''" placeholder="Enter Your Password" v-model="password"/>
            </div>
            <button type="submit" @click="loginUser()">Login</button>
        </form>
    </div>
</template>

<script>
    import Users from '../assets/users.js'

    export default {
        name: 'Login',
        data() {
            return {
                users: Users,
                username: '',
                password: '',
                errorMessage: '',
                successMessage: ''
            }
        },
        methods: {
            loginUser: function() {
                let existingUser = this.users.find(user => user.email === this.username);
                
                if(this.username === " " || this.username === "" ||
                    this.password === " " || this.password === "") {
                    this.successMessage = '';
                    this.errorMessage = "Some fields need to be filled!";
                } else if(!existingUser) {
                    this.successMessage = '';
                    this.errorMessage = "User does not exist!";
                } else if(existingUser.password !== this.password) {
                    this.successMessage = "";
                    this.errorMessage = "Incorrect login details!";
                } else {
                    this.errorMessage = "";
                    this.successMessage = "User Login Successful!";
                    this.$route.meta.user = existingUser.userid;
                    setTimeout(() => {
                        this.$router.push({name: 'dashboard'})
                    }, 1500);
                }
            }
        }
    }
</script>