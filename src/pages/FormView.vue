<template>
  <div class="bg-2">
  <q-page class="flex flex-center column animate__animated animate__fadeIn">
    <q-page-sticky position="bottom-right" :offset="[28, 780]">
      <img
        alt="Itau logo"
        src="~assets/logo.svg"
        style="width: 150px; height: 150px"
        @click="init"
      >
      </q-page-sticky>
      <q-page-sticky position="bottom-left" :offset="[28, 24]">
        <q-btn size="1.5rem" fab icon="navigate_before" color="portugues" @click="handleBack()">
          <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-subtitle2 text-center">{{$t('next')}}</q-tooltip>
        </q-btn>
      </q-page-sticky>
    <div class="text-h3 q-pb-md itau-font-blk">{{$t('formTitle')}}</div>
  <div class="q-pa-xs " style="width: 50rem;">
    <q-form
    @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-mb-md"
    >
      <q-input
      class="flex-inline"
        filled
        bg-color="white"
        color="portugues"
        v-model="name"
        :label="$t('name')"
        lazy-rules
        @input="onNameChange"
        @focus="showNameKeyboard=true; showEmailKeyboard=false; showTelephoneKeyboard=false"
        :rules="[ val => val && val.length > 0 || $t('error')]"
      />

      <q-input
        filled
        bg-color="white"
        color="portugues"
        v-model="email"
        :label="$t('email')"
        lazy-rules
        @input="onEmailChange"
        @focus="showNameKeyboard=false; showEmailKeyboard=true; showTelephoneKeyboard=false"
        :rules="[
          val => val && val.length > 0 || $t('error'),
        ]"
      />

      <q-input
        filled
        bg-color="white"
        color="portugues"
        v-model="telephone"
        :label="$t('telephone')"
        lazy-rules
        @input="onTelephoneChange"
        @focus="showNameKeyboard=false; showEmailKeyboard=false; showTelephoneKeyboard=true"
        :rules="[
          val => val && val.length > 0 || $t('error'),
        ]"
      />

      <q-toggle bg-color="white" color="portugues" v-model="accept" :label="$t('disclaim')" />

      <div>
        <q-btn :label="$t('acept')" type="submit" color="portugues"/>
        <q-btn :label="$t('reset')" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    <!-- <SimpleKeyboard style="width: 100%;" :lang="locale" @onChange="onNameChange" @onKeyPress="onNameKeyPress" :input="name" v-if="showNameKeyboard"></SimpleKeyboard> -->


  </div>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onNameChange" @onKeyPress="onNameKeyPress" :input="name" v-if="showNameKeyboard"></SimpleKeyboard>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onEmailChange" @onKeyPress="onEmailKeyPress" :input="email" v-if="showEmailKeyboard"></SimpleKeyboard>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onTelephoneChange" @onKeyPress="onTelephoneKeyPress" :input="telephone" v-if="showTelephoneKeyboard"></SimpleKeyboard>
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
  const telephone = ref(null)
  const email = ref(null)
  const accept = ref(false)

  const showNameKeyboard = ref(false);
  const showEmailKeyboard = ref(false);
  const showTelephoneKeyboard = ref(false);

  const { setUsuario } = useUserStore();

  const onSubmit = () => {

    if(name.value != null && telephone.value !=null && email.value!=null && accept.value){
      // if(checkUser()){
      //   setUsuario({
      //     nombre:name.value,
      //     telephone: telephone.value,
      //     email:email.value,
      //     aceptar:accept.value
      //   });
      //   localStorage.setItem('user', JSON.stringify({
      //     nombre:name.value,
      //     telephone: telephone.value,
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
    api.get(`/usuario?email=${email.value}&telefono=${telephone.value}`)
    .then(response => {
      console.log(response);
      if(response.status == 204){
        setUsuario({
          nombre:name.value,
          telephone: telephone.value,
          email:email.value,
          aceptar:accept.value
        });
        localStorage.setItem('user', JSON.stringify({
          nombre:name.value,
          telephone: telephone.value,
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
        telephone.value = null
        email.value = null
        accept.value = false
      }

  onBeforeMount(() =>{

    const usuario =JSON.parse(localStorage.getItem('user'));
    if(usuario){
      name.value = usuario.nombre;
      telephone.value = usuario.telephone;
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
  const onTelephoneChange = (input) => {
      telephone.value = input;
  }
  const onTelephoneKeyPress = (button) => {

    if(button == '{enter}')
    showTelephoneKeyboard.value = false;
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
</style>
