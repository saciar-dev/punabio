<template>
  <div class="bg-3 row animate__animated animate__fadeIn" style="height: 100vh;" v-if="!showAnwserResult">
    <div class="col-3 self-center" >
      <div class="row justify-center ">
        <q-circular-progress
          :value="countDown"
          :show-value="true"
          :max="15"
          :thickness="1"
          color="primary"
          class="text-white itau-font-bd "
          font-size="5rem"
          size="150px"
          track-color="grey-7"
        />
      </div>
      <div class="row q-my-md justify-center">
        <div class="text-h3 itau-font-bd text-white">{{$t('correct')}}</div>
      </div>
      <div class="row q-my-md justify-center">
        <div class="q-pa-md">
          <div class="q-gutter-y-md column">
            <q-rating
              v-model="score"
              size="4em"
              color="primary"
              icon="star_border"
              icon-selected="star"
              disable
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-9 self-center q-pr-xl " style="padding-right: 10em;" >
      <div class="row ">
        <div class="text-h2 text-left q-mb-md q-px-xl itau-font-blk">{{randomQuestion[currentQuestion].pregunta}}</div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-12 itau-font-rg" :key="index" v-for="(option, index) in randomQuestion[currentQuestion].answerOptions">
          <q-btn
            @click="handleAnswerClick(option.isCorrect)"
            rounded
            size="30px"
            class="q-px-xl q-py-xs"
            color="white"
            text-color="dark"
            :label="option.answerText">
          </q-btn>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-2 col flex flex-center" style="height: 100vh;" v-else>
    <div class="text-center" v-if="showCorrect">
      <div class="text-h1 itau-font-blk q-pb-xl">{{$t('msg_correct')}}</div>
        <img
          alt="Quasar logo"
          src="~assets/contento.svg"
          style="width: 150px; height: 150px"
          @click="init"
          class="animate__animated animate__bounce animate__infinite"
        >
    </div>
    <div class="text-center" v-else>
      <div class="text-h1 itau-font-blk q-pb-xl">{{$t('msg_incorrect')}}</div>
        <img
          alt="Quasar logo"
          src="~assets/triste.svg"
          style="width: 150px; height: 150px"
          @click="init"
          class="animate__animated animate__hinge animate__slower"
        >
    </div>
  </div>
  <q-page-sticky position="top-right" :offset="[50, 50]" v-if="!showCorrect">
    <img
          alt="Itau logo"
          src="~assets/logo.svg"
          style="width: 150px; height: 150px"
          @click="init"
        >
  </q-page-sticky>
  <q-page-sticky position="top-right" :offset="[50, 50]" v-if="showCorrect">
    <img
          alt="Itau logo"
          src="~assets/logo.svg"
          style="width: 150px; height: 150px"
          @click="init"
        >
  </q-page-sticky>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useQuestionStore } from '../stores/question-store'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import 'animate.css';

const { randomQuestion } = storeToRefs(useQuestionStore())

const router = useRouter();

const currentQuestion = ref(0);
const showAnwserResult = ref(false);
const showCorrect = ref(false);
const score = ref(0);
const countDown = ref(15);
const timer = ref(null);
const startQuiz = ref(false);

  const startQuizFunc = () =>{
      startQuiz.value = true
      countDownTimer()
  }

  onMounted(()=>{
    startQuizFunc();
  })

  const handleAnswerClick = (isCorrect) =>{
    clearTimeout(timer.value);
    showAnwserResult.value = true;
    if(isCorrect){
      score.value = score.value + 1;
      showCorrect.value = true;
    }
    setTimeout(function () {
      let nextQuestion = currentQuestion.value + 1;
      if(nextQuestion < randomQuestion.value.length){
        currentQuestion.value = nextQuestion;
        countDown.value = 15;
        countDownTimer();
      }
      else{
          showAnwserResult.value = false;
          localStorage.setItem('result', score.value)
          router.push('/results')
      }
      showCorrect.value = false;
      showAnwserResult.value = false;
    }, 3000);
  }

  const countDownTimer =() => {
      if(countDown.value > 0) {
          timer.value = setTimeout(() => {
              countDown.value -= 1
              countDownTimer()
          }, 1000)
      }
      else{
          handleAnswerClick(false)
      }
  }

</script>

<style scoped>
.back-rect{
  background-image: url('../assets/rectagulo.svg');
  /* Full height */
  /* height: 100%; */

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.bg-3{
  background-image: url('../assets/fondo-bln.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }

 .bg-2{
  background-image: url('../assets/fondo-3.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }

</style>
