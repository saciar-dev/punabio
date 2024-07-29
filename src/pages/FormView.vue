<template>
  <div class="bg-2">
  <q-page class="flex flex-center column animate__animated animate__fadeIn">
    <q-page-sticky position="bottom-left" :offset="[28, 24]">
      <q-btn size="1.5rem" fab icon="navigate_before" color="portugues" @click="handleBack()">
        <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-subtitle2 text-center">{{$t('next')}}</q-tooltip>
      </q-btn>
    </q-page-sticky>
    <div class="text-h2 q-pb-md text-center itau-font-blk">{{$t('formTitle')}}</div>
  <div class="q-pa-xs " style="width: 50rem;">
    <q-form
    @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-mb-md"
    >
      <q-input
      style="font-size: 1.5rem;"
      class="flex-inline"
        filled
        bg-color="white"
        color="portugues"
        v-model="name"
        :label="$t('name')"
        lazy-rules
        @input="onNameChange"
        @focus="showNameKeyboard=true; showEmailKeyboard=false; showZoneKeyboard=false"
        :rules="[ val => val && val.length > 0 || $t('error')]"
      />

      <q-input
        filled
        style="font-size: 1.5rem;"
        bg-color="white"
        color="portugues"
        v-model="email"
        :label="$t('email')"
        lazy-rules
        @input="onEmailChange"
        @focus="showNameKeyboard=false; showEmailKeyboard=true; showZoneKeyboard=false"
        :rules="[
          val => val && val.length > 0 || $t('error'),
        ]"
      />

      <q-input
        filled
        bg-color="white"
        style="font-size: 1.5rem;"
        color="portugues"
        v-model="zone"
        :label="$t('zone')"
        lazy-rules
        @input="onZoneChange"
        @focus="showNameKeyboard=false; showEmailKeyboard=false; showZoneKeyboard=true"
        :rules="[
          val => val && val.length > 0 || $t('error'),
        ]"
      />

      <q-toggle bg-color="white" color="portugues" v-model="accept" :label="$t('disclaim')" />

      <div>
        <q-btn :label="$t('acept')" type="submit" color="portugues"/>
        <q-btn :label="$t('reset')" type="reset" color="espanol" flat class="q-ml-sm" />
      </div>
    </q-form>

    <!-- <SimpleKeyboard style="width: 100%;" :lang="locale" @onChange="onNameChange" @onKeyPress="onNameKeyPress" :input="name" v-if="showNameKeyboard"></SimpleKeyboard> -->


  </div>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onNameChange" @onKeyPress="onNameKeyPress" :input="name" v-if="showNameKeyboard"></SimpleKeyboard>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onEmailChange" @onKeyPress="onEmailKeyPress" :input="email" v-if="showEmailKeyboard"></SimpleKeyboard>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onZoneChange" @onKeyPress="onZoneKeyPress" :input="zone" v-if="showZoneKeyboard"></SimpleKeyboard>
</q-page>
</div>
</template>

<script setup>
  import SimpleKeyboard from 'src/components/SimpleKeyboard.vue';
  import { onBeforeMount, ref} from 'vue'
  import { useUserStore } from 'src/stores/user-store';
  import { useI18n } from 'vue-i18n';
  import {api} from 'boot/axios';
  import { Notify } from 'quasar'
  import 'animate.css';

  import { useRouter } from 'vue-router';

  const router = useRouter();

  const { locale, t } = useI18n({ useScope: 'global' });

  const name = ref(null)
  const zone = ref(null)
  const email = ref(null)
  const accept = ref(false)

  const showNameKeyboard = ref(false);
  const showEmailKeyboard = ref(false);
  const showZoneKeyboard = ref(false);

  const { setUsuario } = useUserStore();

  const onSubmit = () => {

    if(name.value != null && zone.value !=null && email.value!=null && accept.value){
      // if(checkUser()){
      //   setUsuario({
      //     nombre:name.value,
      //     Zone: Zone.value,
      //     email:email.value,
      //     aceptar:accept.value
      //   });
      //   localStorage.setItem('user', JSON.stringify({
      //     nombre:name.value,
      //     Zone: Zone.value,
      //     email:email.value,
      //     aceptar:accept.value
      //   }));

      //   router.push('/initGame')
      // }
      // else{
      //   Notify.create('Usuario con email y telefono ya utilizados!')
      // }
      checkUser();

    }
    else if(!accept.value){
      Notify.create(t('errorDisclaimer'))
    }
    else{
      Notify.create(t('errorData'))
    }

  }

  const checkUser = () =>{
    api.get(`/usuario?email=${email.value}&zona=${zone.value}`)
    .then(response => {
      console.log(response);
      if(response.status == 204){
        setUsuario({
          nombre:name.value,
          zona: zone.value,
          email:email.value,
          aceptar:accept.value
        });
        localStorage.setItem('user', JSON.stringify({
          nombre:name.value,
          zona: zone.value,
          email:email.value,
          aceptar:accept.value
        }));

        router.push('/initGame')
      }
      else{
        Notify.create(t('errorDuplicate'))
      }
    })

  }

  const handleBack = () =>{
    onReset();
    router.push('/lang')
  }

  const onReset = () => {
        name.value = null
        zone.value = null
        email.value = null
        accept.value = false
      }

  onBeforeMount(() =>{

    const usuario =JSON.parse(localStorage.getItem('user'));
    if(usuario){
      name.value = usuario.nombre;
      zone.value = usuario.zona;
      email.value = usuario.email;
      accept.value = usuario.aceptar;
    }
  })

  //const input = ref("")
  const onNameChange = (input) => {
      name.value = input;
  }
  const onNameKeyPress = (button) => {

    if(button == '{enter}')
    showNameKeyboard.value = false;
  }
  const onEmailChange = (input) => {
      email.value = input;
  }
  const onEmailKeyPress = (button) => {

    if(button == '{enter}')
    showEmailKeyboard.value = false;
  }
  const onZoneChange = (input) => {
    zone.value = input;
  }
  const onZoneKeyPress = (button) => {

    if(button == '{enter}')
    showZoneKeyboard.value = false;
  }
  // const onInputChange = (input) => {
  //   console.log(input.target);
  //   name.value = input.target.value;
  // }

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
    background-image: url('../assets/fondo-2-vert.png');
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
