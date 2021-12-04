<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
          <router-link :to="{ name: 'About' }" class="nav-link">About Us</router-link>
          <router-link :to="{ name: 'Contact' }" class="nav-link">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
  <nav></nav>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  background: red;
  color: #fff !important;
}
</style>
