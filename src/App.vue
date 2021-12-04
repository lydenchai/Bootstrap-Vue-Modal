<template>
    <navbar></navbar>
    <router-view/>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue';
export default {
  components: {
    'navbar': Navbar,
  }
}
</script>

<style scoped>

</style>