<template>
  <div class="bg-1">
    <q-page class="flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/logo.svg"
        style="width: 500px; height: 500px"
        @click="init"
        class="animate__animated animate__pulse animate__infinite"
      >
    </q-page>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import 'animate.css';

  const router = useRouter()

  const init = () => {
    router.push('/lang');
  }
</script>

<style scoped>
 .bg-1{
  background-image: url('../assets/fondo-1.png');
  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }
</style>
