<template>
  <div class="bg-1 col flex flex-center" style="height: 100vh;">
    <div class="text-center">
      <div class="text-h1 itau-font-blk q-pb-xl text-white">{{$t('msg_endless')}}</div>
      <img
        alt="Quasar logo"
        src="~assets/logo.svg"
        style="width: 150px; height: 150px"
        @click="init"
      >
      <div class="text-h3 itau-font-rg q-pt-xl text-white">Resultado: {{showResult}}</div>
    </div>
  </div>
  <q-page-sticky position="bottom-right" :offset="[28, 24]">
          <q-btn size="1.5rem" fab icon="home" color="primary" @click="handleHome()">
            <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-subtitle2 text-center">Siguiente</q-tooltip>
          </q-btn>
        </q-page-sticky>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useQuestionStore } from 'src/stores/question-store';
import { useUserStore } from 'src/stores/user-store';
import {api} from 'boot/axios';

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
  router.push('/lang')
  }

  const showResult = localStorage.getItem('result');

  const saveUser = () => {
    const dato = {
      "nombre": usuario.nombre,
      "email": usuario.email,
      "telefono": usuario.telephone,
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
  background-image: url('../assets/fondo-4.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }
 </style>
