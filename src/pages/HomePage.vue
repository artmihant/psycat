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
            <p v-if="mobile"> <b>К сожалению, вы не сможете пройти наш психологический тест с мобильного устройства.
            Пожалуйста, зайдите на эту страницу с компьютера. Спасибо!</b> </p>

        </div>

        <div class="mt-3 text-center font-bold">
            <LinkButton :disabled="mobile" to="gilberttraining">Принять участие</LinkButton>
        </div>

        <div class="w-full text-neutral-400">
            <ul>
                <li><RouterLink to="gilbert">Тест Гилберта</RouterLink></li>
                <li><RouterLink to="calibration">Калибровка</RouterLink></li>           
                <li><RouterLink to="pallete">Палитра</RouterLink></li>           
                <li><RouterLink to="picto">Пиктограммы</RouterLink></li>           
                <li><RouterLink to="ishihara">Тест Ишихары</RouterLink></li>
                <li><RouterLink to="stroop">Тест Струпа</RouterLink></li>

            </ul>
        </div>

        <button @click="clear" class="absolute bottom-5 right-5 cursor-pointer text-neutral-500 text-xl">Ψ</button>

    </div>
</div>
</div>
</template>

<script setup>
import {generateRandomQuality, generateRandomAnimale, generateRandomColor} from '../lib/random_string'

import LinkButton from '../components/LinkButton.vue';

const mobile = window.browserInfo.mobile


const clear = () => {

    let cid = window.localStorage.getItem('cid')
    let uid = cid + '_' + generateRandomColor() + '_' + generateRandomAnimale()
    window.localStorage.setItem('uid',uid)
    window.location.reload()

}

</script>
