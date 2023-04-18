<template>
    <div class="flex justify-center">  

<div class="mx-12 py-12 max-w-[600px]">
    <h2> Пожалуйста, заполните анкету </h2>

    <form class="my-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <div class="grid grid-cols-1 gap-6"> 

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Пол</legend>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.sex" value="male" name="sex">
                    <span class="ml-2">Мужской</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.sex" value="female" name="sex">
                    <span class="ml-2">Женский</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Возраст</legend>
                <input class="form-input mt-1 block" type="number" v-model="anketa.age" name="age" min="1" max="200" placeholder="Число полных лет" >
            </fieldset>
        
            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Образование</legend>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.education" value="lower" name="education">
                    <span class="ml-2">Основное общее (9 классов)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.education" value="middle" name="education">
                    <span class="ml-2">Среднее общее (11 классов)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.education" value="college" name="education">
                    <span class="ml-2">Среднее специальное (Колледж)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.education" value="half" name="education">
                    <span class="ml-2">Неоконченное высшее (3 курса включительно и выше)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.education" value="higher" name="education">
                    <span class="ml-2">Высшее</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Есть ли у вас художественное образование?</legend>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.artist" value="art" name="artist">
                    <span class="ml-2">Художественное направление</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.artist" value="design" name="artist">
                    <span class="ml-2">Направление дизайна</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.artist" value="not" name="artist">
                    <span class="ml-2">Нет</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.artist" value="other" name="artist">
                    <span class="ml-2">Другое:</span> <input class="border-0 border-b" v-model="anketa.artist_other" type="text" name="artist_other">
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Есть ли у Вас синестезия?</legend>
                <p>
                    Cинестезия- это способ восприятия, когда некоторые состояния, явления, 
                    понятия и символы непроизвольно наделяются дополнительными качествами: 
                    цветом, запахом, текстурой, вкусом, геометрической формой, звуковой тональностью или положением в пространстве.
                </p>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.synesthesia" value="yes" name="synesthesia">
                    <span class="ml-2">Да</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" v-model="anketa.synesthesia" value="no" name="synesthesia">
                    <span class="ml-2">Нет</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Есть ли у Вас какие-то зрительные заболевания?</legend>
                <div>
                    <input class="border-0 border-b"  type="text" v-model="anketa.visual_diseases" name="visual_diseases" placeholder="Близорукость, астигматизм и.т.п." >
                </div>

            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Email</legend>
                <p>Мы вышлем вам на него результаты тестирования.</p>
                <input class="border-0 border-b" type="email" placeholder="Заполняйте по желанию" v-model="anketa.email">
            </fieldset>

        </div>

    </form>

    <div class="mt-3 text-center font-bold" v-if="!filled">
        <LinkButton to="annet" @click="save">Далее</LinkButton>
    </div>
    <div class="mt-3 text-center font-bold" v-else>
        Не забудьте заполнить пункт про {{ filled }}!
    </div>
</div>
</div>

</template>


<script setup>
import { useDocument, useCollection} from 'vuefire'
import {collection, doc, getDoc, addDoc, updateDoc} from 'firebase/firestore'
import {inject, reactive, computed} from "vue";
import {db} from '../firebase.js'

import LinkButton from '../components/LinkButton.vue';

const uid = inject('uid')

const user = (await getDoc(doc(db, 'users', uid))).data()

let anketa = reactive(user.anketa ? user.anketa : {
    sex: '',
    age: '',
    education: '',
    artist: '',
    artist_other: '',
    visual_diseases: '',
    synesthesia: '',
    email: '',
})

const filled = computed(() => {

    if(!anketa.sex){
        return 'пол'
    }

    if(!(0 < anketa.age && anketa.age < 200)){
        return 'возраст'
    }

    if(!anketa.education){
        return 'образование'
    }

    if(!anketa.artist){
        return 'художественное образование'
    }
    
    if(!anketa.visual_diseases){
        return 'зрительные заболевания'
    }

    if(!anketa.synesthesia){
        return 'синестезию'
    } 

    return ''
})

const save = () => {
    updateDoc(doc(db, 'users', uid), {anketa:{...anketa}})
}


</script>

