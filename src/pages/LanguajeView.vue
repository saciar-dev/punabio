<template>
  <div class="bg-2 ">
    <q-page class="flex flex-center column animate__animated animate__fadeIn">
      <q-page-sticky position="bottom-right" :offset="[28, 780]">
        <img
          alt="Itau logo"
          src="~assets/logo.svg"
          style="width: 150px; height: 150px"
          @click="init"
        >
      </q-page-sticky>
        <div class="row q-pb-lg">
          <div class="col-12">
            <div class="text-h2 itau-font-blk">{{$t('init')}}</div>
            <!-- <div class="text-h2 itau-font-blk">{{sendInit}}</div> -->
          </div>
        </div>
        <div class="row q-gutter-xl">
          <q-btn size="1.5rem" color="espanol" glossy rounded icon-right="play_circle" @click="$i18n.locale = 'es'">{{$t('esp')}}</q-btn>
          <q-btn size="1.5rem" color="portugues" glossy rounded icon-right="play_circle" @click="$i18n.locale = 'pt'">{{$t('port')}}</q-btn>
          <!-- <q-btn size="1.5rem" color="espanol" glossy rounded icon-right="play_circle" >{{sendEsp}}</q-btn>
          <q-btn size="1.5rem" color="portugues" glossy rounded icon-right="play_circle">{{sendPort}}</q-btn> -->
        </div>
      <q-page-sticky position="bottom-right" :offset="[28, 24]">
        <q-btn size="1.5rem" fab icon="navigate_next" color="portugues" @click="handleNext()">
          <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-subtitle2 text-center">{{$t('next')}}</q-tooltip>
        </q-btn>
      </q-page-sticky>
    </q-page>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { onMounted, computed } from 'vue';
  import 'animate.css';

  const router = useRouter();
  const { locale, t } = useI18n({ useScope: 'global' });

  const handleNext = () =>{
    localStorage.setItem('language', locale.value)
    router.push('/form')
  }

  onMounted(()=>{
    locale.value = localStorage.getItem('language');
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
</style>
