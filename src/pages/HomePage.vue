<template>
    <div class="h-screen flex justify-center 
        bg-white text-black ">    
<div class="h-screen justify-center">    
    <div class="h-screen w-full justify-center 
        flex flex-col flex-1">

        <div class="max-w-[550px]"> 
            <p><b>Уважаемые респонденты!</b></p>

            <p>Меня зовут Екатерина Чаунина. Я студентка 5 курса направления «Клиническая психология» Первого МГМУ им. И.М. Сеченова, 
                провожу исследование, посвященное полушарным различиям восприятия цвета.  </p>

            <p>Мы вас попросим выполнить несколько методик. Это займет у вас не более 15 минут.  </p>
            <p>   
                Все сведения, полученные от вас, конфиденциальны и будут использованы исключительно 
                в научных целях в анонимном виде, что не позволит идентифицировать 
                вас как участников данного исследования. 
            </p>
            
            <p>
                При желании вы можете получить обратную связь по результатам исследования . 
            </p>

        </div>

        <div class="mt-3 text-center font-bold">
            <TextButton @click="start">Принять участие</TextButton>
        </div>

        <div class="w-full text-neutral-400">
            <ul>
                <!-- <li><RouterLink to="gilberttraining">Тренировочный тест Гилберта</RouterLink></li> -->
                <!-- <li><RouterLink to="gilbert">Тест Гилберта</RouterLink></li> -->

                <!-- <li><RouterLink to="stroop">Тренировочный тест Струпа</RouterLink></li>
                <li><RouterLink to="stroop">Тест Струпа</RouterLink></li>

                <li><RouterLink to="ishihara">Тест Ишихары</RouterLink></li>

                <li><RouterLink to="ishihara">Страница статистики</RouterLink></li>

                <li><RouterLink to="pallete">Палитра</RouterLink></li>           
                <li><RouterLink to="picto">Пиктограммы</RouterLink></li>           
 -->
            </ul>
        </div>

        <button @click="state.createUser()" class="absolute bottom-5 right-5 cursor-pointer text-neutral-500 text-xl">{{ state.code }}</button>

    </div>
</div>
</div>
</template>

<script setup>

import TextButton from '../components/TextButton.vue';

import useState from "@/state";
import {useRouter} from "vue-router";

const state = useState()
const router = useRouter()

function start(){
    if(state.gilbert_traning_passed == 'no'){
        router.push({name: "gilberttraining"})
    }else{
        router.push({name: "gilbert"})
    }
}

</script>
