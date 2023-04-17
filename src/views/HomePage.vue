<template>
    <div class="h-screen flex justify-center 
        bg-white text-black ">    
<div class="h-screen justify-center">    
    <div class="h-screen w-full justify-center 
        flex flex-col flex-1">

        <div class="w-96"> 
            <p>Уважаемые респонденты!</p>

            <p>Я студентка 4 курса направления «Клиническая психология» Первого МГМУ им. И.М. Сеченова, 
                провожу исследование на тему «…». </p>
            <p> Выполнение займет у вас 20-30 минут.  </p>
            <p>   
                Все сведения, полученные от Вас, конфиденциальны и будут использованы исключительно 
                в научных целях в обобщенном виде, что не позволит идентифицировать 
                Вас как участников данного исследования. 
            </p>
            
            <p>
                При желании Вы можете получить результаты как тестов так и самого исследования. 
            </p>
        </div>

        <div class="mt-3 text-center font-bold">
            <LinkButton to="anketa">Принять участие</LinkButton>
        </div>

        <div class="w-full">
            <ul>
                <li><RouterLink to="anketa">Анкета </RouterLink></li>
                <li><RouterLink to="annet">Тест Аннет</RouterLink></li>
                <li><RouterLink to="ishihara">Тест Ишихары</RouterLink></li>
                <li><RouterLink to="stroop">Тест Струпа</RouterLink></li>
                <li><RouterLink to="delaystroop">Отложенный тест Струпа</RouterLink></li>                
                <li><RouterLink to="cat">Наш эксперимент</RouterLink></li>
            </ul>
        </div>
    </div>
</div>
</div>
</template>

<script setup>

import LinkButton from '../components/LinkButton.vue';

</script>
