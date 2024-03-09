<template>

    <div v-show="game_status=='init'" class="h-screen justify-center flex flex-col flex-1 "> 
        <div class="h-screen justify-center items-center flex flex-col flex-1  m-auto ">
            <div class="w-[550px]">
                <!-- <p>Вы прошли тренировочный тест! А сейчас начнется настоящее испытание.</p>
                <p>Напомним правила.</p> -->
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

    <div v-show="game_status=='play'" class="h-screen flex w-full justify-center" :style="{'background-color':pallete.neutral}">
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
                <p>Закройте на полминуты глаза, дайте им отдохнуть.</p>
                <p>(когда отдохнете, нажмите любую клавишу для продолжения)</p>
        </div>
    </div>


    <div v-show="game_status=='score'"  class="h-screen flex  w-full justify-center">

        <div class="h-screen justify-center flex flex-col"> 
            <div class="flex gap-10">
                <div v-for="series, index in results" >

                    <table class="border border-neutral-700">
                        <tr>
                            <th class="pr-3 border relative">                    
                                <component 
                                    :is="figures[experiment_program[index].figure]" 
                                    :color="experiment_program[index].ground" 
                                    :top="4"
                                    :left="3"
                                    :scale="0.4"
                                />

                                <component 
                                    :is="figures[experiment_program[index].figure]" 
                                    :color="experiment_program[index].target" 
                                    :top="4"
                                    :left="9"
                                    :scale="0.4"
                                />
                     </th>
                            <th class="pr-3 border text-center">направление</th>
                            <th class="pr-3 border text-center">реакция</th>
                        </tr>
                        <template v-for="test, index in series.tests">
                        <tr>
                            <td class="pr-3 border">{{index+1}} {{test.correctly ? '✔️' : '❌'}}</td>
                            <td class="pr-3 border text-center">{{test.direction == 'r' ? '--'+test.position+'-\>' : '\<-'+test.position + '--'}}</td>
                            <td class="pr-3 border text-center">{{test.reaction_time}}</td>
                        </tr>
                        </template>
                    </table>

                    {{ series.stat.count_left }} {{ series.stat.count_right }} {{ series.stat.count_full }}

                </div>

            </div>            
            <div class="mt-48 text-center font-bold">
                    <router-link to="thanks">
                        <button class="rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900">
                            Далее
                        </button>
                    </router-link>
                </div>


        </div>
    </div>



</template>


<script setup lang="ts">

import {inject, ref, reactive, computed, ReactiveFlags, UnwrapNestedRefs} from 'vue'

// import { useDocument, useCollection} from 'vuefire'
// import {collection, doc, getDoc, addDoc, updateDoc} from 'firebase/firestore'
// import {db} from '../firebase.js'
// const uid = inject('uid')
// const user = (await getDoc(doc(db, 'users', uid))).data()

import GilbertCross from './gilbert/GilbertCross.vue';

import AppleFigure from '../figures/AppleFigure.vue';
import BananaFigure from '../figures/BananaFigure.vue';
import BlobFigure from '../figures/BlobFigure.vue';
import CirculeFigure from '../figures/CirculeFigure.vue';
import HeartFigure from '../figures/HeartFigure.vue';
import HexFigure from '../figures/HexFigure.vue';
import LeafFigure from '../figures/LeafFigure.vue';
import LemonFigure from '../figures/LemonFigure.vue';
import SquareFigure from '../figures/SquareFigure.vue';
import SunFigure from '../figures/SunFigure.vue';

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
const scale = ref(0.853658537)


const pallete = {
    neutral: '#b2b2b2',
    cross: '#222222',
}



const experiment_program = [
    {
        ground: '#ff2b6e',
        target: '#ff3b28',
        figure: 'square',
        principle: fullshaffle,
        length: 13
    },
    {
        ground: '#ff2b6e',
        target: '#ff3b28',
        figure: 'square',
        principle: fullshaffle,
        length: 13
    },
    {
        ground: '#ff2b6e',
        target: '#ff3b28',
        figure: 'circule',
        principle: fullshaffle,
        length: 13
    },
    {
        ground: '#ff2b6e',
        target: '#ff3b28',
        figure: 'banana',
        principle: fullshaffle,
        length: 13
    }
]


// const colors = [
//     '#ff3b28','#ff2b6e','#ff00a0',
//     '#FF0065','#FF0000','#FD5b00',
//     '#0051ff','#0081ff','#00bcff'
// ]


const viewstate: ViewFigure[] = reactive([])

for(let i=0;i<12;i++){
    viewstate.push({
        color: pallete.neutral,
        figure: 'square',
    })
} 


const shaffles = [
    [0, 8, 4, 11, 5, 6, 7, 2, 3, 1, 9, 10],
    [0, 10, 8, 3, 9, 5, 7, 1, 6, 11, 4, 2],
    [6, 10, 7, 5, 3, 4, 8, 11, 0, 1, 2, 9],
    [8, 3, 11, 1, 0, 8, 9, 6, 10, 2, 5, 4, 7],
    [5, 10, 1, 6, 9, 11, 0, 7, 3, 4, 2, 8],
    [5, 8, 1, 0, 11, 3, 6, 4, 9, 2, 7, 10],
    [4, 8, 9, 2, 11, 0, 7, 5, 1, 10, 3, 6],
    [4, 11, 10, 2, 1, 6, 0, 3, 9, 8, 7, 5],
    [5, 9, 7, 1, 11, 8, 4, 3, 6, 10, 2, 0],
    [10, 6, 4, 9, 5, 8, 1, 3, 2, 7, 0, 11],
    [5, 7, 9, 6, 10, 11, 4, 2, 0, 1, 3, 8],
    [6, 7, 0, 3, 5, 10, 1, 4, 11, 2, 9, 8],
]

function randomInt(max:number) {
    return Math.floor(Math.random() * max);
}

shaffles.forEach(shaffle => shaffle.unshift(randomInt(12)))


function calcDirection(position:number){
    return position < 6 ? 'r' : 'l'
}

function fullshaffle(s:number, t:number){
    return shaffles[s][t]
} 

type ViewFigure = {
    color: string
    figure: string
}


type Test = {
    series: number
    test: number
    position: number
    direction: 'r' | 'l'
    answer: 'r' | 'l' | ''
    correctly: boolean
    reaction_time: number
    figure: string
    target: string
    ground: string
}

type Series = {
    tests: Test[],
    stat: {
        count_full: number
        count_left: number
        count_right: number
    }
}


const crossview = ref(false)

const game_status = ref('init')

const results: Series[] = reactive([])

const series_count = ref(0)
const test_count = ref(0)


function startGame() {

    // document.documentElement.requestFullscreen();

    game_status.value = 'prepare'

    if (series_count.value < experiment_program.length){

        startSeries()
        
    }
}

function startSeries(){
    results.push({
        tests:[],
        stat: {
            count_full: 0,
            count_left: 0,
            count_right: 0                
        }
    })

    test_count.value = 0

    document.addEventListener("keyup", startTest);  
}

function startRest(){

    series_count.value += 1

    game_status.value = 'rest'

    if (series_count.value < experiment_program.length){

        startSeries()

    }else{
        results.forEach(series => {
            let count_full = 0
            let count_left = 0 
            let count_right = 0 

            series.tests.forEach((test, i) => {
                if(i){
                    count_full += test.reaction_time
                    if(test.direction == 'r') count_right += test.reaction_time
                    if(test.direction == 'l') count_left += test.reaction_time
                }
            })

            series.stat.count_full = count_full/12
            series.stat.count_left = count_left/6
            series.stat.count_right = count_right/6

        })

        game_status.value = 'score'        
    }
}



function startTest() {

    document.removeEventListener("keyup", startTest);

    const series = experiment_program[series_count.value]

    for(let i=0;i<12;i++){
        viewstate[i].color = pallete.neutral,
        viewstate[i].figure = 'square'
    } 

    crossview.value = false

    if (test_count.value < series.length){

        game_status.value = 'play'

        const position = series.principle(series_count.value, test_count.value)

        const test: Test = {
            series: series_count.value,
            test: test_count.value,
            position: position,
            direction: calcDirection(position),
            answer: '',
            correctly: false,
            reaction_time: 0,
            figure: series.figure, 
            target: series.target,
            ground: series.ground,
        }

        results[series_count.value].tests.push(test)

        setTimeout(() =>{
            crossview.value = true 
            setTimeout(() =>{

                let timer = Date.now();

                for(let i=0;i<12;i++){
                    viewstate[i].color = test.position == i ? test.target : test.ground
                    viewstate[i].figure = test.figure
                }

                function checkTest(event:KeyboardEvent){

                    const direction = event.code == 'KeyP' ? 'r' : event.code == 'KeyQ' ? 'l' : null

                    if(!direction) return

                    document.removeEventListener("keydown", checkTest);

                    test.answer = direction
                    test.correctly = (direction == test.direction)
                    test.reaction_time = Date.now() - timer

                    test_count.value += 1

                    document.addEventListener("keyup", startTest);

                }

                document.addEventListener("keydown", checkTest);

            }, 1000)
        }, 250)
    }else{
        startRest()
    }

}




/* 
    1) Обьясняются правила

    2) Дается нажать на P и Q левой и правой рукой

    3) Цикл игры:
       - проходит 250 мс
       - появляется крест. 
       - проходит 1000 мс
       - появляется круг
       - пользователь жмет на кнопку
       - всё исчезает
*/


</script>

<style>

.before, .after {
  position: absolute;
  top: 0;
  width: 52px;
  height: 80px;
  border-radius: 50px 50px 0 0;
}

.before {
  left: 50px;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

</style>