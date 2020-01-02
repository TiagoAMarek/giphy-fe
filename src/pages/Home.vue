<template>
  <div class="homepage">
    <Hero />

    <section class="section">
      <h1 class="title">Gifs mais populares</h1>
      <GifsList />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import GifsList from '@/components/GifsList.vue';

export default {
  name: 'home',
  components: {
    Hero,
    GifsList,
  },
};
</script>
