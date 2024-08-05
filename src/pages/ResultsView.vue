<template>
  <div class="bg-1 col flex flex-center" style="height: 100vh;">
    <div class="text-center">
      <div class="text-h1 itau-font-blk q-pb-xl q-px-xl text-white">{{$t('msg_endless')}}</div>
      <div class="text-h3 animate__animated animate__rubberBand itau-font-rg q-pt-xl text-portugues">Respuestas correctas: {{showResult}}</div>
    </div>
  </div>
  <q-page-sticky position="bottom-right" :offset="[28, 24]">
          <q-btn size="1.5rem" fab icon="home" color="espanol" @click="handleHome()">
            <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-subtitle2 text-center">Siguiente</q-tooltip>
          </q-btn>
        </q-page-sticky>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useQuestionStore } from 'src/stores/question-store';
import { useUserStore } from 'src/stores/user-store';
import {api} from 'boot/axios';
import 'animate.css';

const { clearRandomQuestions } = useQuestionStore();
const { resetUsuario } = useUserStore()
const router = useRouter();

const { usuario } = useUserStore();

const handleHome = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('result');

  saveUser();

  clearRandomQuestions();
  resetUsuario();
  router.push('/')
  }

  const showResult = localStorage.getItem('result');

  const saveUser = () => {
    const dato = {
      "nombre": usuario.nombre,
      "email": usuario.email,
      "zona": usuario.zona,
      "correctas": showResult
    }


    api.post('/usuario', dato)
    .then(response => {
      console.log(response);
    })
  }

</script>

<style scoped>
.bg-1{
  background-image: url('../assets/fondo-5-vert.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }
 </style>
