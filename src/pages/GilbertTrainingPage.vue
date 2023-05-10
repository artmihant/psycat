<template>
    <div v-show="game_status=='play'" class="h-screen flex w-full justify-center" :style="{'background-color':pallete.N}">
        <div  class="h-screen justify-center items-center flex flex-col flex-1  m-auto">
            <div class="relative">
                <div v-show="crosson" class="text-center absolute" style="color:#222; line-height:1;" :style="{top:'-'+(size/2)+'mm',left:'-'+(size/2)+'mm'}">
                <table>
                    <tr>
                        <td :style="{
                            'border-bottom':'1px solid '+pallete.B, 
                            'border-right': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                        <td :style="{
                            'border-bottom':'1px solid '+pallete.B, 
                            'border-left': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                    </tr>
                    <tr>
                        <td :style="{
                            'border-top':'1px solid '+pallete.B, 
                            'border-right': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                        <td :style="{
                            'border-top':'1px solid '+pallete.B, 
                            'border-left': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                    </tr>
                </table>
                
                </div>
                <div v-for="sq, i in sqartes" class="absolute"
                :style="{
                    'width': size + 'mm',
                    'height': size + 'mm',
                    'top': (-size/2 + -radius*Math.cos(Math.PI/6*(i+0.5))) + 'mm',
                    'left':(-size/2 + radius*Math.sin(Math.PI/6*(i+0.5))) + 'mm',
                    'background-color':sq.color,
                }"
            ></div>
            </div>
        </div>

    </div>


    <div v-show="game_status=='init'" class="h-screen justify-center flex flex-col flex-1 "> 
        <div class="h-screen justify-center items-center flex flex-col flex-1  m-auto ">
            <div class="w-[550px]">
                <p>Сейчас на экране появится 12 квадратов.</p>
                <p>Цвет одного отличается от цвета остальных.</p>
                <p>Нужно как можно быстрее определить, в какой части экрана (правой или левой).
                    от центра расположен этот квадрат, <br/>нажав клавишу <b>Q</b> (слева) или <b>P</b> (справа)</p>

                <div class="text-center">
                    <button @click="start_game"
                        class="rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"
                    >Начать тренировочный тест</button>
                </div>
            </div>
        </div>
    </div>
    <div v-show="game_status=='prepare'" class="h-screen flex w-full justify-center">
        <div  class="h-screen justify-center flex flex-col flex-0">
                <h1> Приготовьтесь... </h1>
                <p>(нажмите любую клавишу)</p>
        </div>
    </div>
    <div v-show="game_status=='score'"  class="h-screen flex w-full justify-center">

        <div class="h-screen justify-center flex flex-col flex-0"> 
        
            <h1> Итоговый счет </h1>
            <table class="border border-neutral-700 ">
                <tr>
                    <th class="pr-3 border"></th>
                    <th class="pr-3 border text-center">направление</th>
                    <th class="pr-3 border text-center">позиция</th>
                    <th class="pr-3 border text-center">реакция</th>
                </tr>
                <template v-for="result, index in results_pool">
                <tr>
                    <td class="pr-3 border">{{index+1}} {{result.correctly ? '✔️' : '❌'}}</td>
                    <td class="pr-3 border text-center">{{result.position}}</td>
                    <td class="pr-3 border text-center">{{result.direction ? '\>' : '\<'}}</td>
                    <td class="pr-3 border text-center">{{result.reaction_time}}</td>
                </tr>
                </template>
            </table>


            <div class="text-center"> Тренировка {{success ? 'пройдена' : 'не пройдена' }}! </div>
            <div class="mt-3 text-center font-bold">
                <template v-if="success">
                <router-link to="gilbert">
                    <button class="rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900">
                        Начать тест
                    </button>
                </router-link>

            </template>
            <template v-else>
                <button @click="start_game"
                class="rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"
                >Попробовать ещё раз</button>
            </template>

            </div>

        </div>
        <!-- <div class="mt-3 text-center font-bold">
            <button @click="start_game(2)"
                class="rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"
            >Тест {{ 2 }} уровня</button>
        </div> -->

        <!-- <div> {{ score.left }} | {{score.right}}</div> -->
    </div>



</template>


<script setup>

import {inject, ref, reactive, computed} from 'vue'

const radius = ref(70) //mm
const size = ref(10) //mm

import { useDocument, useCollection} from 'vuefire'
import {collection, doc, getDoc, addDoc, updateDoc} from 'firebase/firestore'
import {db} from '../firebase.js'

const uid = inject('uid')

const sq_count = 12

const pallete = {
    A:'#00ab81',
    B:'#00aa95',
    C:'#00aaaa',
    D:'#0095aa',
    N:'#b2b2b2',
    B:'#000000',
}

const colors = [
    '#ff0000','#ff8f00','#d7ff00','#6bff00'
]

const game_status = ref('init')

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

const sqartes = reactive([])

for(let i=0;i<sq_count;i++){
    sqartes.push({
        color:  pallete.B
    })
} 

const color_pairs = [
    [0,1],
    [2,1],
    [2,3],
]

const crosson = ref(false)

let tests_count = 2
let tests_passed = 0
let rounds_count = 3

const results_pool = reactive([])


const success = computed(() => {
    let correctly = true

    results_pool.forEach((result) => {
        correctly = correctly && result.correctly
    })

    return correctly
})

let generate_random_stimulus = () => {
    let direction = randomInt(2)

    let position = randomInt(6)

    let correctly = true

    position += 6*direction

    let target_color = color_pairs[Math.floor(tests_passed/tests_count)][0]
    let ground_color = color_pairs[Math.floor(tests_passed/tests_count)][1]

    let stimulus = {
        target_color, 
        ground_color,
        position, 
        direction,
        correctly
    }

    return stimulus
}

let keyup = () => {

    for(let i=0;i<sq_count;i++){
        sqartes[i].color = pallete.N
    } 
    crosson.value = false
    game_status.value = 'play'

    document.removeEventListener("keyup", keyup);
    turn()
}


let start_game = () =>{

    document.removeEventListener("keyup", start_game);

    tests_passed = 0
    while(results_pool.length > 0) {
        results_pool.pop();
    }
    game_status.value = 'prepare'
    document.addEventListener("keyup", keyup);
}

let turn = () => {

    if(tests_passed < tests_count*rounds_count){

        setTimeout(() =>{
            crosson.value = true 
            setTimeout(() =>{

                game_status.value = 'play'

                let timer = Date.now();

                let current_stimulus = generate_random_stimulus()

                results_pool.push(current_stimulus)

                for(let i=0;i<sq_count;i++){
                    sqartes[i].color = colors[i == current_stimulus.position ? current_stimulus.target_color : current_stimulus.ground_color]
                } 

                let keydown = (e) => {

                    let direction 
                    if(e.code == 'KeyP'){
                        direction = 0
                    }
                    else if(e.code == 'KeyQ'){
                        direction = 1
                    }else{
                        return
                    }

                    document.removeEventListener("keydown", keydown);

                    if(current_stimulus){

                        let reaction_time = Date.now() - timer
                        current_stimulus.reaction_time = Date.now() - timer

                        tests_passed += 1
                    
                        current_stimulus.correctly = (direction == current_stimulus.direction)
                    }

                    document.addEventListener("keyup", keyup);
                }

                document.addEventListener("keydown", keydown);
            }, 1000)
        }, 250)


    }
    else{
        // updateDoc(doc(db, 'users', uid), {gilbert:results_pool})
        console.log('ura')
        game_status.value = 'score'
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
