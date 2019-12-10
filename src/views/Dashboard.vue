<template>
    <div class="dash-window main-content-page">
        <h2>List of Activities to do</h2>
        <TodoItem class="todo" v-for="todo in todos" :todo="todo" :key="todo.id" @notify-parent="completeTodo($event)"/>
        <hr>
        <h2>List of Completed To-do</h2>
        <DoneTodoItem class="todo" v-for="todo in doneTodos" :todo="todo" :key="todo.id"/>
    </div>
</template>

<script>
    import Todos from '../assets/todos.js'
    import TodoItem from '../components/TodoItem'
    import DoneTodoItem from '../components/DoneTodoItem'

    export default {
        name: 'Dashboard',
        components: {
            TodoItem,
            DoneTodoItem
        },
        data() {
            return {
                todos: Todos,
                doneTodos: []
            }
        },
        methods: {
            completeTodo: function(id) {
                let todoIndex = this.todos.findIndex(todo => todo.todoid == id)
                this.doneTodos.push(this.todos[todoIndex]);
                this.todos.splice(todoIndex, 1);
            }
        }
    }
</script>

<style scoped>
    .dash-window {
        padding: 10px 20%;
    }
    .todo {
        margin-bottom: 50px;
    }
    hr {
        border: 5px dashed;
    }
</style>