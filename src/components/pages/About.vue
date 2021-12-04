<template>
<div class="container">
    <h1>About</h1>
    <x-card v-for="item of items" :key="item.name" class="mt-3">
      <h1>{{item.name}}</h1>
      <p>{{item.description}}</p>
    </x-card>
</div>
</template>

<script>
import Card from '../ui/Card.vue';
export default {
  components: {
    'x-card': Card
  },
  data() {
    return {
      items: [
        {
          name: 'Title 1',
          description: 'Description 1'
        },
        {
          name: 'Title 2',
          description: 'Description 2'
        },
        {
          name: 'Title 3',
          description: 'Description 3'
        }
      ]
    }
  }
}
</script>

<style>

</style>