<template>
<div class="container mt-3">
    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#contact">
      Contact Page Modal
    </button>
    <modal id="contact">
        <template v-slot:modal-title>
            Conact page modal
        </template>
        <template v-slot:modal-body>
           <form>
            <div class="mb-3 mt-3">
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
            <div class="mb-3">
                <textarea name="" id="" rows="5" class="form-control"></textarea>
            </div>
            <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </div>
            </form>
        </template>
    </modal>
</div>
</template>
<script>
import Modal from '../ui/Modal.vue';
export default {
    components: {
        'modal': Modal
    }
}
</script>

<style>

</style>