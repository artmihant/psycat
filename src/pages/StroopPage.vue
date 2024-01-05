<template>

    <div class="h-screen flex w-full justify-center">
        <div v-show="game_status=='play' && left_block.vision && false" 
            class="lg:w-40 md:w-24 sm:w-16 w-12 "

            :style="{
                'background-color':left_block.color,
                }">
        </div> 

        <div v-show="game_status=='init'" class="h-screen justify-center flex flex-col flex-1"> 
            <div class="mt-3 text-center">
                <p>Вы прошли тренировочный тест! А сейчас начнется настоящее испытание.</p>
                <p>Напомним правила.</p>
                <p> В этом тесте вам будут показывать слова, обозначающие цвета.</p>
                <p> Если слово и его цвет совпадают, нажмите стрелку <b>◄влево◄</b></p>
                <p> Если слово и его цвет различаются, нажмите стрелку <b>►вправо►</b></p>
                
                <p> Например:</p>
                <p>
                <span class="text-red-600 font-bold">красный</span> — влево ◄
                </p>
                <p>
                <span class="text-green-600 font-bold">синий</span> — вправо ►
                </p>

                <p> <b>Постарайтесь выполнить тест как можно быстрее и без ошибок.</b></p>


                <button @click="start_game"
                    class="rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"
                >Начать тест</button>
            </div>
        </div>


        <div v-show="game_status=='play' && center_block.vision" class="h-screen justify-center flex flex-col flex-1">
            <div class="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold"
                :style="{
                    'color':center_block.color,
                }"
            >{{center_block.title.toUpperCase()}}</div>
        </div>

        <div  v-show="game_status=='play' && right_block.vision && false"  
            class="lg:w-40 md:w-24 sm:w-16 w-12"
            :style="{
                'background-color':right_block.color,
            }">
        </div>

        <div v-show="game_status=='prepare'" class="h-screen justify-center flex flex-col flex-0">
            <h1> Приготовьтесь... </h1>
            <p>(нажмите любую клавишу)</p>
        </div>

        <div v-show="game_status=='score'" class="h-screen justify-center flex flex-col flex-0"> 
            <h1>Итоговый счет </h1>
            <table class="border border-neutral-700 ">
                <tr>
                    <th class="pr-3 border"></th>
                    <th class="pr-3 border text-center">справа</th>
                    <th class="pr-3 border text-center">центр</th>
                    <th class="pr-3 border text-center">слева</th>
                    <th class="pr-3 border text-center">направление</th>
                    <th class="pr-3 border text-center">реакция</th>
                </tr>
                <template v-for="result, index in results_pool">
                <tr>
                    <td class="pr-3 border">{{index+1}} {{result.correctly ? '✔️' : '❌'}}</td>

                    <td class="pr-3 border"
                        :style="{
                            'background-color': pallete[
                                result.direction ? result.second_color : result.first_color
                            ].color
                        }"
                    
                    ></td>
                    <td class="pr-3 border text-center"
                        :style="{
                            'color': pallete[result.first_color].color
                        }"
                    >{{pallete[result.congruents ? result.first_color : result.second_color].title}}</td>
                    <td class="pr-3 border"
                        :style="{
                            'background-color': pallete[
                                result.direction ? result.first_color : result.second_color
                            ].color
                        }"
                    ></td>
                    <td class="pr-3 border text-center">{{result.direction ? '\>' : '\<'}}</td>
                    <td class="pr-3 border text-center">{{result.reaction_time}}</td>
                </tr>
                </template>
            </table>

            <div class="mt-3 text-center font-bold">
                <template v-if="user.gilbert">
                    <LinkButton to="gilbert" >Далее</LinkButton>
                </template>
                <template v-else>
                    <div class="mt-3 text-center font-bold">
                        <LinkButton to="gilberttraining" >Далее</LinkButton>
                    </div>
                </template>
            </div>
        </div>

    </div>

</template>


<script setup>
import { useDocument, useCollection} from 'vuefire'
import {collection, doc, getDoc, addDoc, updateDoc} from 'firebase/firestore'
import {inject, ref, reactive, computed} from 'vue'
import LinkButton from '../components/LinkButton.vue';
import {db} from '../firebase.js'
const uid = inject('uid')

const user = (await getDoc(doc(db, 'users', uid))).data()


function randomInt(max) {
    return Math.floor(Math.random() * max);
}

const game_status = ref('init')

const pallete = [
    {title: 'красный', color:'#f5222d'}, //0
    {title: 'зеленый', color:'#52c41a'}, //3
    {title: 'синий', color:'#1890ff'}, //4
]

let stimulus_seq = [
         {'first_color': 2, 'second_color': 1, 'congruents': 0, 'direction': 1} ,
         {'first_color': 1, 'second_color': 0, 'congruents': 0, 'direction': 1} ,
         {'first_color': 2, 'second_color': 1, 'congruents': 0, 'direction': 1} ,
         {'first_color': 1, 'second_color': 2, 'congruents': 0, 'direction': 1} ,
         {'first_color': 0, 'second_color': 1, 'congruents': 1, 'direction': 0} ,
         {'first_color': 0, 'second_color': 2, 'congruents': 0, 'direction': 1} ,
         {'first_color': 1, 'second_color': 2, 'congruents': 1, 'direction': 0} ,
         {'first_color': 0, 'second_color': 1, 'congruents': 0, 'direction': 1} ,
         {'first_color': 1, 'second_color': 0, 'congruents': 1, 'direction': 0} ,
         {'first_color': 1, 'second_color': 2, 'congruents': 1, 'direction': 0} ,
         {'first_color': 1, 'second_color': 2, 'congruents': 0, 'direction': 1} ,
         {'first_color': 0, 'second_color': 2, 'congruents': 1, 'direction': 0} ,
         {'first_color': 0, 'second_color': 2, 'congruents': 0, 'direction': 1} ,
         {'first_color': 0, 'second_color': 1, 'congruents': 0, 'direction': 1} ,
         {'first_color': 2, 'second_color': 0, 'congruents': 0, 'direction': 1} ,
         {'first_color': 1, 'second_color': 0, 'congruents': 1, 'direction': 0} ,
         {'first_color': 2, 'second_color': 1, 'congruents': 1, 'direction': 0} ,
         {'first_color': 2, 'second_color': 0, 'congruents': 1, 'direction': 0} ,
         {'first_color': 2, 'second_color': 0, 'congruents': 1, 'direction': 0} ,
         {'first_color': 2, 'second_color': 0, 'congruents': 0, 'direction': 1} ,
         {'first_color': 1, 'second_color': 0, 'congruents': 0, 'direction': 1} ,
         {'first_color': 2, 'second_color': 1, 'congruents': 1, 'direction': 0} ,
         {'first_color': 0, 'second_color': 2, 'congruents': 1, 'direction': 0} ,
         {'first_color': 0, 'second_color': 1, 'congruents': 1, 'direction': 0} ,
]

stimulus_seq.sort(() => Math.random() - 0.5)


const success = computed(() => {
    let correctly = true

    results_pool.forEach((result) => {
        correctly = correctly && result.correctly
    })

    return correctly
})

const score = computed(() => {
    let left = 0
    let right = 0

    results_pool.slice(1,-1).forEach((stimulus) => {
        if(stimulus.direction){
            right += stimulus.reaction_time
        }else{
            left += stimulus.reaction_time
        }
    })
    
    return {left, right}
})

let offset = ref(0)

const center_block = reactive({
    title: '',
    color: 0,
    vision: true,
    colorize: true
})

const right_block = reactive({
    color: 0,
    vision: true,
    colorize: true
})

const left_block = reactive({
    color: 0,
    vision: true,
    colorize: true
})


const results_pool = reactive(user.stroop ? user.stroop : [])

if(results_pool.length){
    game_status.value = 'score'
}

let tests_count = 24
let tests_passed = 0

let max_reaction_time = computed(() => {
    return 10000000
})

let keyup = () => {
    document.removeEventListener("keyup", keyup);
    turn()
}

let start_game = () =>{
    document.documentElement.requestFullscreen();
    document.removeEventListener("keyup", start_game);

    tests_passed = 0
    while(results_pool.length > 0) {
        results_pool.pop();
    }
    game_status.value = 'prepare'
    document.addEventListener("keyup", keyup);
}

let generate_random_stimulus = () => {
    let first_color = 0
    let second_color = 0

    while(first_color==second_color){
        first_color = randomInt(pallete.length)
        second_color = randomInt(pallete.length)
    }

    let congruents = randomInt(2)
    let direction =  randomInt(2)
    
    let stimulus = {
        first_color, 
        second_color,
        congruents, 
        direction
    }

    return stimulus
}


let turn = () => {

    if(tests_passed < tests_count){
        game_status.value = 'play'

        let timer = Date.now();

        let current_stimulus = stimulus_seq[tests_passed]

        results_pool.push(current_stimulus)

        let actual_stimulus_index = results_pool.length - 1
        let actual_stimulus = actual_stimulus_index >= 0 ? results_pool[actual_stimulus_index] : null


        if(actual_stimulus){

            if(current_stimulus.congruents){
                center_block.title = pallete[current_stimulus.first_color].title
                center_block.color = pallete[current_stimulus.first_color].color
            }else{
                center_block.title = pallete[current_stimulus.second_color].title
                center_block.color = pallete[current_stimulus.first_color].color
            }

            center_block.vision = true

            right_block.color = pallete[
                actual_stimulus.direction ? actual_stimulus.first_color : actual_stimulus.second_color
            ].color
            right_block.vision = true

            left_block.color = pallete[
                actual_stimulus.direction ? actual_stimulus.second_color : actual_stimulus.first_color
            ].color
            left_block.vision = true

        }else{

            if(current_stimulus.congruents){
                center_block.title = pallete[current_stimulus.first_color].title
                center_block.color = pallete[current_stimulus.first_color].color
            }else{
                center_block.title = pallete[current_stimulus.second_color].title
                center_block.color = pallete[current_stimulus.first_color].color
            }

            center_block.vision = true
            right_block.vision = false
            left_block.vision = false
        }

        let keydown = (e) => {

            let direction 
            if(e.code == 'ArrowLeft' || e.code == 'KeyA'|| e.code == 'KeyQ'){
                direction = 0
            }
            else if(e.code == 'ArrowRight' || e.code == 'KeyD'|| e.code == 'KeyP'){
                direction = 1
            }else{
                return
            }

            document.removeEventListener("keydown", keydown);
            
            center_block.vision = false
            right_block.vision = false
            left_block.vision = false

            if(actual_stimulus){

                let reaction_time = Date.now() - timer
                actual_stimulus.reaction_time = Date.now() - timer

                if(reaction_time < max_reaction_time.value){
                    tests_passed += 1
                }
            
                actual_stimulus.correctly = (direction == actual_stimulus.direction)
            }

            document.addEventListener("keyup", keyup);
        }



        document.addEventListener("keydown", keydown);
    }
    else{

        updateDoc(doc(db, 'users', uid), {stroop:results_pool})

        game_status.value = 'score'
    }
}


</script>
