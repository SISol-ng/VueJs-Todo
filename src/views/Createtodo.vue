<template>
    <div class="main-content-page">
        <h1>Create Activitity to be done</h1>
        <form class="sign-pane">
            <h2 class="sign-head">Todo's Details</h2>
            <p class="errorMessage" v-if="errorMessage.length !== 0">{{errorMessage}}</p>
            <p class="successMessage" v-if="successMessage.length !== 0">{{successMessage}}</p>
            <div class="input-field">
                <label for="todosubject">Todo Subject</label>
                <input type="text" id="todosubject" @focus="errorMessage=''; successMessage=''" placeholder="Enter Todo Subject" v-model="todosubject"/>
            </div>
            <div class="input-field">
                <label for="tododescription">Todo Description</label>
                <textarea id="tododescription" @focus="errorMessage=''; successMessage=''" placeholder="Enter Todo Description" v-model="tododescription"/>
            </div>
            <button type="submit" @click="addTodo()">Submit</button>
        </form>
    </div>
</template>

<script>
    import Todos from '../assets/todos.js'

    export default {
        name: 'Createtodo',
        data () {
            return {
                todos: Todos,
                todosubject: "",
                tododescription: "",
                errorMessage: "",
                successMessage: ""
            }
        },
        methods: {
            addTodo: function () {
                if (this.todosubject === " " || this.todosubject === "" || this.tododescription === " " || this.tododescription ==="") {
                    this.errorMessage = "Your input(s) is/are incorrect!";
                    this.successMessage = "";
                } else {
                    this.todos.push({
                        todoid: this.todos.length+100, 
                        userid: 400231, 
                        subject: this.todosubject, 
                        description: this.tododescription
                    });
                    this.todosubject = "";
                    this.tododescription = "";
                    this.errorMessage = "";
                    this.successMessage = "Todo has been submitted successfully"
                } 
            }
        }    
    }
</script>

<style scoped>
    .input-field label {
        width: 25%;
    }
    .input-field textarea {
        width: 55%;
        height: 120px;
    }
</style>