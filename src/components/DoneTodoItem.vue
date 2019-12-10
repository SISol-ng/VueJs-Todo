<template>
    <div >
        <section>
            <div class="heading">
                <h3>{{todo.subject}}</h3>
            </div>
            <article>
                {{todo.description}}
            </article>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'DoneTodoItem',
        props: ['todo'],
        methods: {
            openTodo: function(id) {
                this.$router.push({name: 'todo', params: {todoId: id}})
            }
        }
    }
</script>

<style scoped>
    .heading h3 {
        color: indigo;
    }
    #complete-todo {
        width: 18px;
        height: 18px;
    }
    .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 5px;
    }
    article {
        height: auto;
        border-top: 2px dashed gray;
        border-bottom: 3px solid red;
        padding: 10px;
        text-align: justify
    }
    .button-area {
        display: block;
        text-align: right;
    }
    button {
        padding: 5px 10px;
        border-radius: 10px;
        background-color: green;
        color: white;
        font-size: 14px;
        margin: 10px;
    }
</style>