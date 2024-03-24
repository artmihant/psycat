<template>


    <div v-show="game_status=='init'" class="h-screen justify-center flex flex-col flex-1" :style="{'background-color':pallete.main}"> 
        <div class="h-screen justify-center items-center flex flex-col flex-1  m-auto ">
            <div class="w-[550px]">
                <p>Сейчас на экране появится 12 фигур.</p>
                <p>Цвет одной отличается от цвета остальных.</p>
                <p>Нужно как можно быстрее определить, в какой части экрана (правой или левой).
                    от центра расположен эта фигура, <br/> нажав клавишу <b>Q</b> (слева) или <b>P</b> (справа)</p>
                <p> При выполнении задания необходимо смотреть на крестик по центру экрана</p>
                <div class="text-center">
                    <button @click="startGame"
                        class="rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"
                    >Начать тест</button>
                </div>
            </div>
        </div>
    </div>

    <div v-show="game_status=='prepare'" class="h-screen flex w-full justify-center" :style="{'background-color':pallete.neutral}">
        <div  class="h-screen justify-center flex flex-col flex-0">
                <h1>Приготовьтесь...</h1>
                <p>(нажмите любую клавишу)</p>
        </div>
    </div>

    <div v-show="game_status=='play'" class="cursor-none h-screen flex w-full justify-center" :style="{'background-color':pallete.neutral}">
        <div class="h-screen justify-center items-center flex flex-col flex-1 m-auto">
            <div class="relative">

                <component 
                    v-for="view, i in viewstate"
                    :key="i"
                    :is="figures[view.figure]" 
                    :color="view.color" 
                    :top="-radius*scale*Math.cos(Math.PI/6*(i+0.5))"
                    :left="radius*scale*Math.sin(Math.PI/6*(i+0.5))"
                    :scale="scale"
                />

                <GilbertCross v-show=crossview :size="crosssize*scale" :color=pallete.cross />
                
            </div>
        </div>
    </div>

    <div v-show="game_status=='rest'" class="h-screen flex w-full justify-center" :style="{'background-color':pallete.neutral}">
        <div  class="h-screen justify-center flex flex-col flex-0">
        
                <h1>Прекрасно!</h1>
                <p>Закройте на несколько секунд глаза, дайте им отдохнуть.</p>
                <p>когда отдохнете, нажмите любую клавишу для продолжения</p>
        </div>
    </div>


    <div v-show="game_status=='score'"  class="h-screen justify-center flex flex-col flex-1" :style="{'background-color':pallete.main}">

        <div class="h-screen justify-center items-center flex flex-col flex-1  m-auto "> 

            <div class="text-center text-xl my-4"> Тренировка {{passed ? 'пройдена' : 'не пройдена' }}! </div>


            <div class="flex gap-10">
                <div v-for="series in results" >

                    <table class="border border-neutral-700">
                        <tr>
                            <th class="pr-3 border relative"></th>
                            <th class="pr-3 border text-center">направление</th>
                            <th class="pr-3 border text-center">реакция</th>
                        </tr>
                        <template v-for="test, index in series.tests">
                        <tr v-if="index">
                            <td class="pr-3 border">{{index}}</td>
                            <td class="pr-3 border text-center" :class="{'bg-red-500':!test.correctly }">{{test.direction == 'r' ? '🠖' : '🠔'}}</td>
                            <td class="pr-3 border text-center" :class="{'bg-red-500':test.reaction_time>1000 }">{{test.reaction_time}}</td>
                        </tr>
                        </template>
                    </table>

                </div>

            </div>            

                <template v-if="passed">
                    <button @click="continueExperiment"
                    class="rounded-lg p-2 my-4 border border-neutral-700 bg-white text-neutral-900">
                        Продолжить
                    </button>
                </template>

                <template v-else>
                    <button @click="startGame"
                    class="rounded-lg border p-2 my-4 border-neutral-700 bg-white text-neutral-900">
                        Попробовать ещё раз
                    </button>
                </template>

        </div>
    </div>



</template>


<script setup lang="ts">

import fullScreen from "@/lib/fullscreen"

import {getRandomCard, randomInt} from "@/lib/random"

import {Ref, ref, reactive} from 'vue'


import GilbertCross from './gilbert/GilbertCross.vue';

import SquareFigure from '../figures/SquareFigure.vue';

import {ViewFigure, Test, Series} from '@/types';
import {useRouter} from "vue-router";
import useState from "@/state";

const state = useState()
const router = useRouter()

const figures = {
    square: SquareFigure,
}

const radius = ref(70) //mm
const crosssize = ref(10) //mm
const scale = ref(0.853658537)
// const scale = ref(1.3)

const sakkada_time = 1000

const pallete = {
    neutral: '#b2b2b2',
    main: '#ffffff',
    cross: '#222222',
}

const experiment_program = [
    {
        ground: '#929292',
        target: '#000000',
        figure: 'square',
        length: 13
    },
]


const viewstate: ViewFigure[] = reactive([])

for(let i=0;i<12;i++){
    viewstate.push({
        color: pallete.neutral,
        figure: 'square',
    })
} 


function calcDirection(position:number){
    return position < 6 ? 'r' : 'l'
}


const crossview = ref(false)

const game_status = ref('init')

const results: Ref<Series[]> = ref([])

const passed = ref(false)

const cardLayout = ref(0)

function startGame() {

    // fullScreen();

    while(results.value.length) {
        results.value.pop();
    }
    
    cardLayout.value = randomInt(15)

    game_status.value = 'prepare'

    if (results.value.length < experiment_program.length){

        startSeries()
        
    }
}

function startSeries(){
    results.value.push({
        tests:[],
        figure: '',
        ground: '',
        target: '',
    })

    document.addEventListener("keyup", startTest);  
}


function startRest(){

    game_status.value = 'rest'

    if (results.value.length < experiment_program.length){

        startSeries()

    }else{

        passed.value = true

        results.value.forEach(series => {

            series.tests.forEach((test, i) => {
                if(i){
                    if(!test.correctly || test.reaction_time > sakkada_time){
                        passed.value = false
                    }
                }
            })
        })

        game_status.value = 'score'        
    }
}

function continueExperiment(){

    if(passed.value){
        state.saveGilbertTrainig(results.value)
    }

    router.push({name: "home"})

}


function startTest() {

    document.removeEventListener("keyup", startTest);

    const series = experiment_program[results.value.length-1]

    for(let i=0;i<12;i++){
        viewstate[i].color = pallete.neutral,
        viewstate[i].figure = 'square'
    } 

    crossview.value = false

    const result = results.value[results.value.length-1]

    if (result.tests.length < series.length){

        game_status.value = 'play'

        const position = getRandomCard(cardLayout.value, result.tests.length)

        const test: Test = {
            position: position,
            direction: calcDirection(position),
            answer: '',
            correctly: false,
            reaction_time: 0,
        }

        result.tests.push(test)

        result.figure = series.figure
        result.target = series.target
        result.ground = series.ground

        setTimeout(() =>{
            crossview.value = true 
            setTimeout(() =>{

                let timer = Date.now();

                for(let i=0;i<12;i++){
                    viewstate[i].color = test.position == i ? series.target : series.ground
                    viewstate[i].figure = series.figure
                }

                function checkTest(event:KeyboardEvent){

                    const direction = event.code == 'KeyP' ? 'r' : event.code == 'KeyQ' ? 'l' : null

                    if(!direction) return

                    document.removeEventListener("keydown", checkTest);

                    test.answer = direction
                    test.correctly = (direction == test.direction)
                    test.reaction_time = Date.now() - timer

                    document.addEventListener("keyup", startTest);

                }

                document.addEventListener("keydown", checkTest);

            }, 1000)
        }, 250)
    }else{
        startRest()
    }

}


</script>

