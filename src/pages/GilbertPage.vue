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

import fullScreen from "../lib/fullscreen"

import {inject, ref, reactive, computed, ReactiveFlags, UnwrapNestedRefs} from 'vue'

import { useDocument, useCollection} from 'vuefire'
import {collection, doc, getDoc, addDoc, updateDoc} from 'firebase/firestore'
import {db} from '../firebase.js'
const uid = inject('uid')
const user = (await getDoc(doc(db, 'users', uid))).data()

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


const cr0 = new Color('color(display-p3 0.9111 0.2904 0.3331)')

const cr1 = new Color('color(display-p3 0.8886 0.2848 0.5066)')

const cr2 = new Color('color(display-p3 0.907 0.3246 0.0816)')


const cy0 = new Color('color(display-p3 0.8675 0.7351 0.0446)')

const cy1 = new Color('color(display-p3 0.9686 0.67 0.1156)')

const cy2 = new Color('color(display-p3 0.7347 0.7951 0.2312)') 


const cb0 = new Color('color(display-p3 0.0772 0.7146 0.7601)')

const cb1 = new Color('color(display-p3 0.2086 0.6784 0.8873)')

const cb2 = new Color('color(display-p3 0.2336 0.727 0.5989)')



const experiment_program = [
    {
        ground: cr0.toString(),
        target: cr1.toString(),
        figure: 'square',
        length: 13
    }, 
    {
        ground: cr0.toString(),
        target: cr2.toString(),
        figure: 'square',
        length: 13
    }, 
    {
        ground: cr0.toString(),
        target: cr1.toString(),
        figure: 'heart',
        length: 13
    }, 
    {
        ground: cr0.toString(),
        target: cr2.toString(),
        figure: 'heart',
        length: 13
    }, 

    {
        ground: cy0.toString(),
        target: cy1.toString(),
        figure: 'square',
        length: 13
    }, 
    {
        ground: cy0.toString(),
        target: cy2.toString(),
        figure: 'square',
        length: 13
    }, 

    {
        ground: cy0.toString(),
        target: cy1.toString(),
        figure: 'sun',
        length: 13
    }, 
    {
        ground: cy0.toString(),
        target: cy2.toString(),
        figure: 'sun',
        length: 13
    }, 

    {
        ground: cb0.toString(),
        target: cb1.toString(),
        figure: 'square',
        length: 13
    }, 
    {
        ground: cb0.toString(),
        target: cb2.toString(),
        figure: 'square',
        length: 13
    }, 

    {
        ground: cb0.toString(),
        target: cb1.toString(),
        figure: 'blob',
        length: 13
    }, 
    {
        ground: cb0.toString(),
        target: cb2.toString(),
        figure: 'blob',
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

    fullScreen();

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

        const position = getRandomCard(series_count.value, test_count.value)

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



function downloadResults(ev) {
        // любая кнопка в форме имеет тип "submit" по умолчанию, т.е. служит для отправки формы на сервер
    // отправка формы влечет за собой перезагрузку страницы
    // нам это не нужно, поэтому отключаем стандартное поведение
    ev.preventDefault()

    const data = {
        "1": "foo",
        "2": "bar",
        "3": "baz"
    }
    
    // создаем файл
    const file = new Blob(
        // сериализуем данные
        [JSON.stringify(data)], {
            type: 'application/json'
        }
    )

    URL.createObjectURL(file)

    // создаем элемент "a"
    const link = document.createElement('a')
    // привязываем атрибут "href" тега "a" к созданному файлу
    link.setAttribute('href', URL.createObjectURL(file))
    // атрибут "download" позволяет скачивать файлы, на которые указывает ссылка
    // значение этого атрибута - название скачиваемого файла
    link.setAttribute('download', 'data.json')
    // текстовое содержимое ссылки
    link.textContent = 'DOWNLOAD DATA'
    // помещаем элемент в контейнер с классом "main"
    // document.querySelector('.main').append(link)

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