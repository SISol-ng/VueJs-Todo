<template>
    <p class="main-content-page">Signing out user...</p>
</template>

<script>
    export default {
        name: 'Logout',
        created: function() {
            this.$route.meta.user = '';
            setTimeout(() => {
                this.$router.push({name: 'home'})
            }, 1500);
        }
    }
</script>

<style scoped>
    p {
        font-size: x-large;
        font-style: italic;
        color: green;
        font-weight: 800;
    }
</style>