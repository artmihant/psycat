<template>

    <div v-show="game_status=='init'" class="h-screen justify-center flex flex-col flex-1 "> 
        <div class="h-screen justify-center items-center flex flex-col flex-1  m-auto ">
            <div class="w-[550px]">
                <!-- <p>Вы прошли тренировочный тест! А сейчас начнется настоящее испытание.</p>
                <p>Напомним правила.</p> -->
                <p>Сейчас на экране появится 12 квадратов.</p>
                <p>Цвет одного отличается от цвета остальных.</p>
                <p>Нужно как можно быстрее определить, в какой части экрана (правой или левой).
                    от центра расположен этот квадрат, <br/> нажав клавишу <b>Q</b> (слева) или <b>P</b> (справа)</p>
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


    <div v-show="game_status=='score'"  class="h-screen flex  w-full ">

        <div class="h-screen flex flex-col"> 
            <div class="flex gap-10">
                <div v-for="series in results" >

                    <table class="border border-neutral-700">
                        <tr>
                            <th class="pr-3 border relative">                    
                                <component 
                                    :is="figures[series.figure]" 
                                    :color="series.ground" 
                                    :top="4"
                                    :left="3"
                                    :scale="0.4"
                                />

                                <component 
                                    :is="figures[series.figure]" 
                                    :color="series.target" 
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

                    {{ series.stat.average_left }} {{ series.stat.average_right }}  {{ series.stat.average_full }}
                    {{ Math.floor(100*(series.stat.average_right-series.stat.average_left)/(series.stat.average_full - reaction_time)) }}%

                </div>
                <div>
                <div v-for="series in results" >
                    {{ series.figure }}
                    {{ series.stat.average_left }} {{ series.stat.average_right }}  {{ series.stat.average_full }}
                    {{ Math.floor(100*(series.stat.average_right-series.stat.average_left)/(series.stat.average_full - reaction_time)) }}%
                </div>
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
import Color from "colorjs.io";
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
// const scale = ref(0.853658537)
const scale = ref(1.3)

const sakkada_time = 1000
const reaction_time = 333


const pallete = {
    neutral: '#b2b2b2',
    cross: '#222222',
}


// color(display-p3 0.1532 0.725 0.6698)

const cr0 = new Color('color(display-p3 0.9244 0.2464 0.4044)')

const cr1 = new Color('color(display-p3 0.9336 0.268 0.2039)')
const cr2 = new Color('color(display-p3 0.9329 0.2736 0.166)')
const cr3 = new Color('color(display-p3 0.9316 0.2799 0.1176)')
const cr4 = new Color('color(display-p3 0.9298 0.2869 0.0417)')


const cy0 = new Color('color(display-p3 0.9362 0.7218 0.0842)')

const cy1 = new Color('color(display-p3 0.8169 0.7855 0.1726)')
const cy2 = new Color('color(display-p3 0.7975 0.7939 0.1963)')
const cy3 = new Color('color(display-p3 0.7769 0.8024 0.2213)')
const cy4 = new Color('color(display-p3 0.7553 0.8107 0.2471)')



const cb0 = new Color('color(display-p3 0.0772 0.7146 0.7601)')

const cb1 = new Color('color(display-p3 0.2086 0.6784 0.8873)')
const cb2 = new Color('color(display-p3 0.235 0.6717 0.9013)')
const cb3 = new Color('color(display-p3 0.2622 0.6645 0.9147)')
const cb4 = new Color('color(display-p3 0.2891 0.657 0.9268)')




const experiment_program = [

    {
        ground: cr0.toString(),
        target: cr4.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 

    {
        ground: cr0.toString(),
        target: cr3.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 

    {
        ground: cr0.toString(),
        target: cr2.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 

    {
        ground: cr0.toString(),
        target: cr1.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 

    {
        ground: cy0.toString(),
        target: cy4.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 
    {
        ground: cy0.toString(),
        target: cy3.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 
    {
        ground: cy0.toString(),
        target: cy2.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 
    {
        ground: cy0.toString(),
        target: cy1.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 


    {
        ground: cb0.toString(),
        target: cb4.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 
    {
        ground: cb0.toString(),
        target: cb3.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 
    {
        ground: cb0.toString(),
        target: cb2.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 
    {
        ground: cb0.toString(),
        target: cb1.toString(),
        figure: 'square',
        principle: fullshaffle,
        length: 13
    }, 

    
    // {
    //     ground: cb0.toString(),
    //     target: cb6.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // }, 

    // {
    //     ground: cb0.toString(),
    //     target: cb5.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // }, 

    // {
    //     ground: cb0.toString(),
    //     target: cb4.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // }, 

    // {
    //     ground: cb0.toString(),
    //     target: cb3.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // }, 

    // {
    //     ground: cb0.toString(),
    //     target: cb2.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // }, 

    // {
    //     ground: cb0.toString(),
    //     target: cb1.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // }, 

    // {
    //     ground: cr0.toString(),
    //     target: cr3.toString(),
    //     figure: 'heart',
    //     principle: fullshaffle,
    //     length: 4
    // }, 
    // {
    //     ground: cr0.toString(),
    //     target: cr6.toString(),
    //     figure: 'heart',
    //     principle: fullshaffle,
    //     length: 4
    // }, 

    // {
    //     ground: cb0.toString(),
    //     target: cb5.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 4
    // }, 
    // {
    //     ground: cb0.toString(),
    //     target: cb4.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 4
    // }, 
    // {
    //     ground: cb0.toString(),
    //     target: cb3.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 4
    // }, 
    // {
    //     ground: cb0.toString(),
    //     target: cb2.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 4
    // }, 
    // {
    //     ground: cb0.toString(),
    //     target: cb1.toString(),
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 4
    // }, 



    // {
    //     ground: '#ff4400',
    //     target: '#ff5f00',
    //     figure: 'heart',
    //     principle: fullshaffle,
    //     length: 4
    // },
    // {
    //     ground: '#a1ff00',
    //     target: '#6bff00',
    //     figure: 'sun',
    //     principle: fullshaffle,
    //     length: 4
    // },

    // {
    //     ground: '#a1ff00',
    //     target: '#d7ff00',
    //     figure: 'sun',
    //     principle: fullshaffle,
    //     length: 4
    // }, 
    // {
    //     ground: '#0081ff',
    //     target: '#0051ff',
    //     figure: 'heart',
    //     principle: fullshaffle,
    //     length: 4
    // },
    // {
    //     ground: '#0081ff',
    //     target: '#00bcff',
    //     figure: 'leaf',
    //     principle: fullshaffle,
    //     length: 4
    // },

    // {
    //     ground: '#f7f350',
    //     target: '#cefe5b',
    //     figure: 'lemon',
    //     principle: fullshaffle,
    //     length: 2
    // },
    // {
    //     ground: '#f7f350',
    //     target: '#cefe5b',
    //     figure: 'square',
    //     principle: fullshaffle,
    //     length: 2
    // },
    // {
    //     ground: '#f7f350',
    //     target: '#cefe5b',
    //     figure: 'sun',
    //     principle: fullshaffle,
    //     length: 2
    // },    
    

    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // },

    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'apple',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'banana',
    //     principle: fullshaffle,
    //     length: 13
    // },    
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'blob',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'circule',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'heart',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'hex',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'leaf',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'lemon',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'square',
    //     principle: fullshaffle,
    //     length: 13
    // },
    // {
    //     ground: '#dc4918',
    //     target: '#e83536',
    //     figure: 'sun',
    //     principle: fullshaffle,
    //     length: 13
    // },

]

// ground: '#fcd86f',
// target: '#e6e06a',

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
    [5, 9, 7, 1, 11, 8, 4, 3, 6, 10, 2, 0],
    [8, 3, 11, 1, 0, 8, 9, 6, 10, 2, 5, 4, 7],
    [5, 8, 1, 0, 11, 3, 6, 4, 9, 2, 7, 10],
    [5, 7, 9, 6, 10, 11, 4, 2, 0, 1, 3, 8],
    [6, 7, 0, 3, 5, 10, 1, 4, 11, 2, 9, 8],
    [10, 6, 4, 9, 5, 8, 1, 3, 2, 7, 0, 11],
    [0, 10, 8, 3, 9, 5, 7, 1, 6, 11, 4, 2],
    [6, 10, 7, 5, 3, 4, 8, 11, 0, 1, 2, 9],
    [5, 10, 1, 6, 9, 11, 0, 7, 3, 4, 2, 8],
    [5, 9, 7, 1, 11, 8, 4, 3, 6, 10, 2, 0],
    [8, 3, 11, 1, 0, 8, 9, 6, 10, 2, 5, 4, 7],
    [5, 8, 1, 0, 11, 3, 6, 4, 9, 2, 7, 10],
    [5, 7, 9, 6, 10, 11, 4, 2, 0, 1, 3, 8],    
    [0, 8, 4, 11, 5, 6, 7, 2, 3, 1, 9, 10],
    [4, 8, 9, 2, 11, 0, 7, 5, 1, 10, 3, 6],
    [4, 11, 10, 2, 1, 6, 0, 3, 9, 8, 7, 5],
    [10, 6, 4, 9, 5, 8, 1, 3, 2, 7, 0, 11],
    [0, 10, 8, 3, 9, 5, 7, 1, 6, 11, 4, 2],
    [6, 10, 7, 5, 3, 4, 8, 11, 0, 1, 2, 9],
    [5, 10, 1, 6, 9, 11, 0, 7, 3, 4, 2, 8],    
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
    position: number
    direction: 'r' | 'l'
    answer: 'r' | 'l' | ''
    correctly: boolean
    reaction_time: number
}

type Series = {
    tests: Test[],
    figure: string,
    ground: string,
    target: string,
    stat: {
        average_full: number
        average_left: number
        average_right: number
    }
}


const crossview = ref(false)

const game_status = ref('init')

const results: Series[] = reactive([])

const series_count = ref(0)
const test_count = ref(0)


function startGame() {

    // document.documentElement.requestFullscreen();

    function requestFullScreen(element) {
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

        if (requestMethod) { // Native full screen.
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    var elem = document.body; // Make the body go full screen.
    requestFullScreen(elem);

    game_status.value = 'prepare'

    if (series_count.value < experiment_program.length){

        startSeries()
        
    }
}

function startSeries(){
    results.push({
        tests:[],
        figure: '',
        ground: '',
        target: '',
        stat: {
            average_full: 0,
            average_left: 0,
            average_right: 0                
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
            let score_left = 0 
            let score_right = 0 

            let count_left = 0 
            let count_right = 0 

            series.tests.forEach((test, i) => {
                if(i && test.correctly && test.reaction_time < sakkada_time){
                    if(test.direction == 'r'){
                        count_right += 1
                        score_right += test.reaction_time
                    } 
                    if(test.direction == 'l'){
                        count_left += 1
                        score_left += test.reaction_time
                    } 
                }
            })

            series.stat.average_full  = Math.floor((score_left+score_right)/(count_left+count_right))
            series.stat.average_left  = Math.floor(score_left/count_left)
            series.stat.average_right = Math.floor(score_right/count_right)

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
            position: position,
            direction: calcDirection(position),
            answer: '',
            correctly: false,
            reaction_time: 0,
        }

        results[series_count.value].tests.push(test)

        results[series_count.value].figure = series.figure
        results[series_count.value].target = series.target
        results[series_count.value].ground = series.ground


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