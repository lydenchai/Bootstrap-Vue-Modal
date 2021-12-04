<template>
<div class="container mt-3">
 
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#home">
      Home Page Modal
  </button>
    <modal id="home">
        <template v-slot:modal-title>
            Home Page Modal
        </template>
        <template v-slot:modal-body>
           <form>
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
            </div>
            <div class="form-check mb-3">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"> Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </template>
    </modal>
</div>
</template>
<script>
import Modal from '../ui/Modal.vue';
export default {
    components: {
        'modal': Modal,
    }
}
</script>

<style>

</style>