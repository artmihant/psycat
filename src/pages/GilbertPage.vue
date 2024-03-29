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

                <template v-if="!passed">
                    
                    <div class="flex gap-10" v-if="results.length">
                        <table class="border border-neutral-700">
                            <tr>
                                <th class="pr-3 border relative"></th>
                                <th class="pr-3 border text-center">направление</th>
                                <th class="pr-3 border text-center">реакция</th>
                            </tr>
                            <template v-for="test, index in results[results.length-1].tests">
                            <tr v-if="index">
                                <td class="pr-3 border">{{index}}</td>
                                <td class="pr-3 border text-center" :class="{'bg-red-500':!test.correctly }">{{test.direction == 'r' ? '🠖' : '🠔'}}</td>
                                <td class="pr-3 border text-center" :class="{'bg-red-500':test.reaction_time>1000 }">{{test.reaction_time}}</td>
                            </tr>
                            </template>
                        </table>
                    </div>

                    <p>Серия не пройдена!</p>

                    <button @click="restartSeries"
                    class="rounded-lg border p-2 my-4 border-neutral-700 text-neutral-900">
                        Попробовать ещё раз
                    </button>

                </template>
                <template v-else>
                    <p>Когда отдохнете, нажмите любую клавишу для продолжения.</p>
                </template>

        </div>
    </div>


</template>


<script setup lang="ts">

import fullScreen from "@/lib/fullscreen"
import Color from "colorjs.io";

import {getRandomCard, randomInt} from "@/lib/random"

import {Ref, ref, reactive} from 'vue'


import GilbertCross from './gilbert/GilbertCross.vue';

import SquareFigure from '../figures/SquareFigure.vue';
import AppleFigure from '../figures/AppleFigure.vue';
import BananaFigure from '../figures/BananaFigure.vue';
import BlobFigure from '../figures/BlobFigure.vue';
import CirculeFigure from '../figures/CirculeFigure.vue';
import HeartFigure from '../figures/HeartFigure.vue';
import HexFigure from '../figures/HexFigure.vue';
import LeafFigure from '../figures/LeafFigure.vue';
import LemonFigure from '../figures/LemonFigure.vue';
import SunFigure from '../figures/SunFigure.vue';


import {ViewFigure, Test, Series, Program} from '@/types';
import {useRouter} from "vue-router";
import useState from "@/state";

const state = useState()
const router = useRouter()

const figures = {
    apple: AppleFigure,
    banana: BananaFigure, 
    blob: BlobFigure,
    circule: CirculeFigure,
    heart: HeartFigure,
    hex: HexFigure,
    leaf: LeafFigure,
    lemon: LemonFigure,
    square: SquareFigure,
    sun: SunFigure
}

const radius = ref(70) //mm
const crosssize = ref(10) //mm
// const scale = ref(0.853658537)
const scale = ref(1.3)

const sakkada_time = 1000

const pallete = {
    neutral: '#b2b2b2',
    main: '#ffffff',
    cross: '#222222',
}


const cr0 = new Color('color(display-p3 0.9111 0.2904 0.3331)')

const cr1 = new Color('color(display-p3 0.8886 0.2848 0.5066)')

const cr2 = new Color('color(display-p3 0.907 0.3246 0.0816)')


const cy0 = new Color('color(display-p3 0.8675 0.7351 0.0446)')

const cy1 = new Color('color(display-p3 0.9686 0.67 0.1156)')

const cy2 = new Color('color(display-p3 0.7347 0.7951 0.2312)') 


const cb0 = new Color('color(display-p3 0.0772 0.7146 0.7601)')

const cb1 = new Color('color(display-p3 0.2086 0.6784 0.8873)')

const cb2 = new Color('color(display-p3 0.2336 0.727 0.5989)')



const experiment_program: Program[] = [
    {
        ground: '#929292',
        target: '#000000',
        figure: 'square',
        length: 13,
        max_error_count: 0,
    },
    {
        ground: cr0.toString(),
        target: cr1.toString(),
        figure: 'square',
        length: 13,
        max_error_count: 4,
    }, 
    {
        ground: cr0.toString(),
        target: cr2.toString(),
        figure: 'square',
        length: 13,
        max_error_count: 4,
    }, 
    {
        ground: cr0.toString(),
        target: cr1.toString(),
        figure: 'heart',
        length: 13,
        max_error_count: 4,
    }, 
    {
        ground: cr0.toString(),
        target: cr2.toString(),
        figure: 'heart',
        length: 13,
        max_error_count: 4,
    }, 

    {
        ground: cy0.toString(),
        target: cy1.toString(),
        figure: 'square',
        length: 13,
        max_error_count: 4,
    }, 
    {
        ground: cy0.toString(),
        target: cy2.toString(),
        figure: 'square',
        length: 13,
        max_error_count: 4,
    }, 

    {
        ground: cy0.toString(),
        target: cy1.toString(),
        figure: 'sun',
        length: 13,
        max_error_count: 4,
    }, 
    {
        ground: cy0.toString(),
        target: cy2.toString(),
        figure: 'sun',
        length: 13,
        max_error_count: 4,
    }, 

    {
        ground: cb0.toString(),
        target: cb1.toString(),
        figure: 'square',
        length: 13,
        max_error_count: 4,
    }, 
    {
        ground: cb0.toString(),
        target: cb2.toString(),
        figure: 'square',
        length: 13,
        max_error_count: 4,
    }, 

    {
        ground: cb0.toString(),
        target: cb1.toString(),
        figure: 'blob',
        length: 13,
        max_error_count: 4,
    }, 
    {
        ground: cb0.toString(),
        target: cb2.toString(),
        figure: 'blob',
        length: 13,
        max_error_count: 4,
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

    fullScreen();

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
    if(results.value.length < experiment_program.length){

        const program = experiment_program[results.value.length]

        const result:Series = {
            tests:[],
            figure: program.figure,
            ground: program.ground,
            target: program.target,
            length: program.length,
            max_error_count: program.max_error_count,
        }

        results.value.push(result)

        document.addEventListener("keyup", startTest);  
    }else{
        document.addEventListener("keyup", continueExperiment);  
    }
}

function restartSeries(){
    results.value.pop()
    game_status.value = 'prepare'
    startSeries()
}


function startRest(){

    game_status.value = 'rest'

    let fines = 0

    const result = results.value[results.value.length-1]

    result.tests.forEach((test, i) => {
        if(i && (!test.correctly || test.reaction_time > sakkada_time)){
            fines += 1
        }
    })

    passed.value = fines <= result.max_error_count

    if(passed.value){
        startSeries()
    }
}

function continueExperiment(){

    if(passed.value){
        state.saveGilbertTest(results.value)
    }

    router.push({name: "stroop"})

}


function startTest() {

    document.removeEventListener("keyup", startTest);

    for(let i=0;i<12;i++){
        viewstate[i].color = pallete.neutral,
        viewstate[i].figure = 'square'
    } 

    crossview.value = false

    const series = results.value[results.value.length-1]

    if (series.tests.length < series.length){

        game_status.value = 'play'

        const position = getRandomCard(cardLayout.value+results.value.length, series.tests.length)

        const test: Test = {
            position: position,
            direction: calcDirection(position),
            answer: '',
            correctly: false,
            reaction_time: 0,
        }

        series.tests.push(test)

        setTimeout(() => {
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

