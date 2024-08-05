<template>
  <div class="bg-2">
    <q-page class="flex flex-center column animate__animated animate__fadeIn">
      <h1 class="itau-font-blk text-titulos" v-if="isLoading"> {{$t('gameReady')}} </h1>
      <h1 class="text-titulos itau-font-blk animate__animated animate__bounce animate__repeat-3 " style="font-size: 15rem; ;" v-else> {{count}}</h1>
      <h1 class="itau-font"></h1>

    <!-- <q-page-sticky position="bottom-right" :offset="[885, 108]">
        <img
          alt="Itau logo"
          src="~assets/logo.svg"
          style="width: 150px; height: 150px"
          @click="init"
        >
        </q-page-sticky> -->
    </q-page>
  </div>
  </template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuestionStore } from 'src/stores/question-store';
import 'animate.css';

const router = useRouter();

const { readQuestion } = useQuestionStore();

const isLoading = ref(true);

const count = ref(3);

let intervalo = null;

const iniciar = () => {
  readQuestion();

  setTimeout(function () {
    isLoading.value = false;
    iniciarCount();
  }, 3000);

}

const iniciarCount = () =>{
  intervalo = setInterval(setReloj, 1000);
}

const setReloj = () => {

  count.value--;
  if (count.value <= 0) {
    clearInterval(intervalo);
    router.push('/trivia')
  }

}

onMounted(()=>{
  iniciar();
})

</script>

<style scoped>
 .bg-2{
  background-image: url('../assets/fondo-2.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }

 @media screen and (min-width: 1080px) {
  .bg-2{
    background-image: url('../assets/fondo-4-vert.png');
    /* Full height */
    /* height: 100%; */

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
 }
 @media screen and (min-width: 1920px) {
  .bg-2{
    background-image: url('../assets/fondo-2.png');
    /* Full height */
    /* height: 100%; */

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
 }
</style>
