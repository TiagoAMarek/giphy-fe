<template>
  <div class="columns is-multiline">
    <div class="column is-one-fifth">
      <GifCard />
    </div>
    <div class="column is-one-fifth">
      <GifCard />
    </div>
    <div class="column is-one-fifth">
      <GifCard />
    </div>
    <div class="column is-one-fifth">
      <GifCard />
    </div>
    <div class="column is-one-fifth">
      <GifCard />
    </div>
  </div>
</template>

<script>
import GifCard from './GifCard.vue';

export default {
  name: 'GifsList',
  components: {
    GifCard,
  },
};
</script>

<style>
</style>
