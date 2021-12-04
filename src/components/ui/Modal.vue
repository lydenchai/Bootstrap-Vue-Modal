<template>
<!-- The Modal -->
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">

     <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">
            <slot name="modal-title"></slot>
        </h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <!-- Modal body -->
      <div class="modal-body">
       <slot name="modal-body"></slot>
      </div>

   
    </div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>