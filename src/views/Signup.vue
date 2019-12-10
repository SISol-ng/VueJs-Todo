<template>
    <div class="main-content-page">
        <h1>Sign Up Page</h1>
        <form class="sign-pane">
            <h2 class="sign-head">User's Registration's Details</h2>
            <p class="errorMessage" v-if="errorMessage.length !== 0">{{errorMessage}}</p>
            <p class="successMessage" v-if="successMessage.length !== 0">{{successMessage}}</p>
            <div class="input-field">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" @focus="errorMessage=''; successMessage=''" placeholder="Enter Your First Name" v-model="firstname"/>
            </div>
            <div class="input-field">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" @focus="errorMessage=''; successMessage=''" placeholder="Enter Your Last Name" v-model="lastname"/>
            </div>
            <div class="input-field">
                <label for="email">Email Address</label>
                <input type="email" id="email" @focus="errorMessage=''; successMessage=''" placeholder="Enter Your Email Address" v-model="email"/>
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input type="password" id="password" @focus="errorMessage=''; successMessage=''" placeholder="Enter Your Password" v-model="password"/>
            </div>
            <div class="input-field">
                <label for="repassword">Password</label>
                <input type="password" id="repassword" @focus="errorMessage=''; successMessage=''" placeholder="Confirm Your Password" v-model="repassword"/>
            </div>
            <button type="submit" @click="createAccount()">Sign Up </button>
        </form>
    </div>
</template>

<script>
    import Users from '../assets/users.js'

    export default {
        name: 'Signup',
        data() {
            return {
                users: Users,
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                repassword: '',
                errorMessage: '',
                successMessage: ''
            }
        },
        methods: {
            createAccount: function() {
                let existingUser = this.users.find(user => user.email === this.email);

                if(this.firstname === " " || this.firstname === "" ||
                    this.lastname === " " || this.lastname === "" ||
                    this.email === " " || this.email === "" ||
                    this.password === " " || this.password === "" ||
                    this.repassword === " " || this.repassword === "") {
                        this.successMessage = "";
                        this.errorMessage = "Some fields are empty";
                } else if(this.password !== this.repassword) {
                    this.successMessage = "";
                    this.errorMessage = "Passwords do not match";
                } else if(existingUser) {
                    this.successMessage = "";
                    this.errorMessage = "Email address has already been used";
                }else {
                     this.users.push({
                         userid: this.users.length + 400230, 
                         firstname: this.firstname,
                         lastname: this.lastname,
                         email: this.email,
                         password: this.password
                    });
                    this.firstname = '';
                    this.lastname = '';
                    this.email = '';
                    this.password = '';
                    this.repassword = '';
                    this.errorMessage = "";
                    this.successMessage = "Registration Successful! Redirecting to login page...";
                    setTimeout(() => {
                        this.$router.push({path: "/login", name: 'login'})
                    }, 2000);
                 }
            }
        }  
    }
</script>

<style scoped>
    .input-field label {
        width: 25%;
    }
</style>