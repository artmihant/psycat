<template>

    <div class="p-4 w-screen md:min-h-screen flex items-center justify-center">
        <div class="w-fit h-fit" v-show="!showTable">
            <div>
                <h1>Тест Ишихары</h1>
                Какую цифру вы видите? {{answers.length + 1 + ' / ' + numberOfQuestions}}
            </div>

            <div class="border border-neutral-900 rounded p-3 flex items-center flex-col md:flex-row">
                <div>
                    <img :src="'/psycat/ishihara/' + actualPicture.src + '.png'"
                         class="
                     h-[350px] w-[350px]
                     md:h-[400px] md:w-[400px]
                     lg:h-[450px] lg:w-[450px]
                     xl:h-[500px] xl:w-[500px]
                    "
                    />
                </div>
                <div class="grid m-5 w-[300px]">
                    <div id="numberbuttons" class="grid grid-cols-3">
                        <button v-for="n in numberbuttons"
                                @click="takeAnswer"
                                class="rounded-lg border  m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
                            {{ n }}
                        </button>
                    </div>

                    <div id="otherbuttons" class="grid grid-cols-2">
                        <button
                            @click="takeAnswer"
                            class="rounded-lg border m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
                            Не знаю
                        </button>
                        <button
                            @click="takeAnswer"
                            class="rounded-lg border m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
                            Здесь нет цифры
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showTable">
            <h1>Тест Ишихары - результаты</h1>
            <table class="border border-neutral-700">
                <tr class="bg-neutral-200 border-neutral-700">
                    <th class="pr-3 border border-neutral-700">id</th>
                    <th class="pr-3 border border-neutral-700 text-center">Значение</th>
                    <th class="pr-3 border border-neutral-700 text-center">Ответ</th>
                    <th class="pr-3 border border-neutral-700 text-center">Результат</th>
                </tr>
                <tr class=" pr-3 border border-neutral-700" v-for="answer, index in answers">
                   <td class="pr-3 border border-neutral-700 text-center">{{index+1}}</td>
                   <td class="pr-3 border border-neutral-700 text-center">{{answer.value}}</td>
                   <td class="pr-3 border border-neutral-700 text-center">{{answer.userAnswer}}</td>
                   <td class="pr-3 border border-neutral-700 text-center">{{answer.userAnswer == answer.value ? '✔' : '❌'}}</td>
                </tr>
            </table>
            <template v-if="user.stroop">
                <div class="mt-3 text-center font-bold">
                    <LinkButton to="stroop" >Далее</LinkButton>
                </div>
            </template>
            <template v-else>
                <div class="mt-3 text-center font-bold">
                    <LinkButton to="strooptraining" >Далее</LinkButton>
                </div>
            </template>

        </div>

    </div>


</template>

<script setup>

import {doc, getDoc, updateDoc} from 'firebase/firestore'

import {inject, computed, ref,reactive} from "vue";
import {db} from '../firebase.js'

import LinkButton from '../components/LinkButton.vue';
const numberbuttons = [
    1,2,3,4,5,6,7,8,9
]

const uid = inject('uid')

const user = (await getDoc(doc(db, 'users', uid))).data()


const images = ref([
    {src: "8-dark", value: 8},
    {src: "7-dark", value: 7},
    {src: "8-light", value: 8},
    {src: "2-light", value: 2},
    {src: "1-light", value: 1},
    {src: "6-dark", value: 6},
    {src: "6-light", value: 6},
    {src: "3-light", value: 3},
    {src: "3-dark", value: 3},
    {src: "4-med", value: 4},
    {src: "9-light", value: 9},
    {src: "8-light2", value: 8},
    {src: "5-med", value: 5},
    {src: "2-dark", value: 2},
    {src: "9-dark", value: 9},
    {src: "1-light2", value: 1},
    {src: "1-dark", value: 1},
    {src: "7-light", value: 7},
    {src: "4-med2", value: 4},
    {src: "3-med", value: 3},
    {src: "4-light2", value: 4},
    {src: "5-light", value: 5},
    {src: "4-light", value: 4}
])

images.value.sort(() => Math.random() - 0.5)

const showTable = ref(false)

const answers = reactive(user.ishihara ? user.ishihara : [])

if(answers.length){
    showTable.value = true
}

const numberOfQuestions = images.value.length


const actualPicture = computed(() => {
    return images.value[0] ? images.value[0] : ''
})


function takeAnswer(e) {
    answers.push({...actualPicture.value, userAnswer: e.target.innerText})
    images.value.splice(0, 1)
    if (images.value.length === 0) {

        updateDoc(doc(db, 'users', uid), {ishihara:answers})

        showTable.value = true
    }
}

</script>