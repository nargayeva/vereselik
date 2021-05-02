<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script>
    import Header from "../common/Header";
    import Footer from "../common/Footer";

    export default {
        name: "MainLayout",
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped lang="scss">
</style>
