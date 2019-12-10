<template>
  <div id="app">
    <Header />
    <keep-alive include="Dashboard"><router-view></router-view></keep-alive>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: { 
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sign-pane {
        width: 50%;
        min-height: 300px;
        border: 2px solid brown;
        margin: auto;
        padding: 10px;
    }
    .input-field {
        margin: auto;
        margin-bottom: 7px;
        width: 80%;
    }
    .input-field label {
        width: 5%;
        text-align: right;
        float: left;
        font-size: 1em;
        font-weight: bolder;
    }
    .input-field input {
        width: 55%;
        height: 25px;
        padding-left: 5px;
    }
    .sign-head {
        color: rgb(28, 95, 28);
        margin-bottom: 40px;
    }
    button {
        background-color: aqua;
        border-radius: 30px;
        font-size: 18px;
        font-weight: bold;
        margin: 20px auto;
        padding: 10px 20px;
    }
    button:hover {
        cursor: pointer;
        background-color: rgb(76, 150, 150);
        color: blue;
    }

    .errorMessage {
        color: red;
        margin-top: -20px;
    }
    .successMessage {
        color: white;
        margin-top: -20px;
        background-color: green;
        padding: 5px;
    }
    .editSuccessMessage {
        color: white;
        margin-top: -20px;
        background-color: green;
        padding: 5px;
    }
    .main-content-page {
      min-height: 72vh;
    }
</style>
