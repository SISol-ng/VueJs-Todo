<template>
    <div class="main-content-page">
        <h2>My Activity to do</h2>
        <section class="view-window">
            <div class="successMessage" v-show="successMessage">
                <span id="check">&check;</span> {{todoSubject}} todo has been deleted successfully
                <p><button @click="closeComponent()">OK</button></p>
            </div>
            <h3>Todo Subject: <span class="subject">{{todoSubject}}</span></h3>
            <div><h3>Todo Description:</h3>{{todoDescription}}</div>
            <div class="button-area">
                <button @click="openEditWindow()">Edit Todo</button>
                <button @click="deleteTodo()">Delete Todo</button>
                <button @click="closeComponent()">Close</button>
            </div>
        </section>
        <section v-show="edit" class="edit-window">
            <h1>Update Activitity to be done</h1>
            <form class="sign-pane">
                <h2 class="sign-head">Todo's Details</h2>
                <p class="errorMessage" v-if="errorMessage.length !== 0">{{errorMessage}}</p>
                <p class="editSuccessMessage" v-if="editSuccessMessage.length !== 0">{{editSuccessMessage}}</p>
                <div class="input-field">
                    <label for="todosubject">Todo Subject</label>
                    <input type="text" id="todosubject" @focus="errorMessage=''; successMessage=''" placeholder="Enter Todo Subject" v-model="todoSubject"/>
                </div>
                <div class="input-field">
                    <label for="tododescription">Todo Description</label>
                    <textarea id="tododescription" @focus="errorMessage=''; successMessage=''" placeholder="Enter Todo Description" v-model="todoDescription"/>
                </div>
                <button type="submit" @click="updateTodo()">Submit</button>
                <button type="submit" @click="closeEditWindow()">Cancel</button>
            </form>
        </section>
    </div>
</template>

<script>
    import Todos from '../assets/todos.js'

    export default {
        name: 'Viewtodo',
        data() {
            return {
                todoId: this.$route.params.todoId,
                todos: Todos,
                todo: '',
                todoSubject: '',
                todoDescription: '',
                todoIndex: '',
                successMessage: false,
                editSuccessMessage: '',
                errorMessage: '',
                edit: false
            }
        },
        created() {
            this.todo = this.todos.find(todo => todo.todoid == this.todoId)
            this.todoIndex = this.todos.findIndex(todo => todo.todoid == this.todoId)
            this.todoSubject = this.todo.subject
            this.todoDescription = this.todo.description
        },
        methods: {
            deleteTodo: function() {
                let confirmDelete = confirm(`Are you sure you want to delete "${this.todoSubject}" from To-Do list?`)
                if(confirmDelete) {
                    this.todos.splice(this.todoIndex, 1);
                    this.successMessage = true;
                }
            },
            closeComponent: function() {
                this.todoSubject = '';
                this.todoDescription = '';
                this.successMessage = false;
                setTimeout(() => {
                    this.$router.push({path: "/profile", name: 'dashboard'})
                }, 500);
            },
            openEditWindow: function() {
                this.edit = true;
            },
            closeEditWindow: function() {
                this.edit = false;
            },
            updateTodo: function() {
                if (this.todoSubject === " " || this.todoSubject === "" || this.todoDescription === " " || this.toDodescription ==="") {
                    this.errorMessage = "Your input(s) is/are incorrect!";
                    this.editSuccessMessage = "";
                } else {
                    this.todos[this.todoIndex].subject = this.todoSubject;
                    this.todos[this.todoIndex].description = this.todoDescription;
                    this.errorMessage = "";
                    this.editSuccessMessage = "Todo has been updated successfully"
                    setTimeout(() => {
                        this.successMessage = "";
                        this.edit = false;
                    }, 1500)
                }
            }
        }
    }
</script>

<style scoped>
    .view-window {
        width: 60%;
        border: 2px solid gray;
        margin: auto;
        text-align: left;
        padding: 15px;
    }
    .view-window .button-area {
        text-align: right;
    }
    button {
        padding: 5px 10px;
        border-radius: 10px;
        background-color: green;
        color: white;
        font-size: 15px;
        margin: 20px 10px;
        width: 120px;
    }
    .subject {
        color: blue;
    }
    .successMessage {
        position: absolute;
        top: 30%;
        left: 30%;
        height: 100px;
        padding: 50px;
    }
   #check {
        font-size: xx-large;
    }
    .successMessage button {
        float: right;
        padding: 5px 15px;
    }
    .successMessage button:hover {
        background-color: gray;
    }
    .input-field label {
        width: 25%;
    }
    .input-field textarea {
        width: 55%;
        height: 120px;
    }
    .edit-window {
        margin-top: 50px;
    }
</style>