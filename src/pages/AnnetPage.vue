<template>
    <div class="flex justify-center">  

<div class="mx-12 py-12 max-w-[600px]">
    <h2> Тест на левшизм (опросник Аннет) </h2>

    <form class="my-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <div class="grid grid-cols-1 gap-6"> 

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Были ли у вас среди близких родственников лица, лучше владевшие левой рукой или обеими руками одновременно?</p>
                <div>
                    <input class="form-checkbox" type="checkbox" v-model="annet.annet1_no"  name="annet1_no">
                    <span class="ml-2">Нет</span>
                </div>
                <div>
                    <input class="form-checkbox" type="checkbox" v-model="annet.annet1_mom" name="annet1_mom">
                    <span class="ml-2">Мама</span>
                </div>
                <div>
                    <input class="form-checkbox" type="checkbox" v-model="annet.annet1_dad"  name="annet1_dad">
                    <span class="ml-2">Папа</span>
                </div>
                <div>
                    <input class="form-checkbox" type="checkbox" v-model="annet.annet1_sibling"  name="annet1_sibling">
                    <span class="ml-2">Брат/сестра</span>
                </div>
                <div>
                    <span class="ml-2">Другое</span><input class="border-0 border-b" type="text" v-model="annet.annet1_other" name="annet1_other"> 
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Были ли склонности в начале школьного обучения к зеркальному (отраженному) изображению букв, цифр?</p>

                <div>
                    <input class="form-radio" type="radio" value="yes" v-model="annet.annet2"  name="annet2">
                    <span class="ml-2">Да</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="no" v-model="annet.annet2" name="annet2">
                    <span class="ml-2">Нет</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой в детстве вы начинали рисовать?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet3" name="annet">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet3" name="annet3">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet3" name="annet3">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>



            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой в детстве вы начинали писать?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet4" name="annet4">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet4" name="annet4">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet4" name="annet4">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой в детстве вы начинали есть?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet5" name="annet5">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet5" name="annet5">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet5" name="annet5">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы пишете?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet6" name="annet6">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet6" name="annet6">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet6" name="annet6">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы набираете номер телефона?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet7" name="annet7">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet7" name="annet7">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet7" name="annet7">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>



            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы открываете замок ключом?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet8" name="annet8">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet8" name="annet8">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet8" name="annet8">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите чашку?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet9" name="annet9">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet9" name="annet9">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet9" name="annet9">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите ложку?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet10" name="annet10">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet10" name="annet10">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet10" name="annet10">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите нож?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet11" name="annet11">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet11" name="annet11">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet11" name="annet11">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите расческу?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet12" name="annet12">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet12" name="annet12">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet12" name="annet12">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите зубную щетку?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet13" name="annet13">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet13" name="annet13">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet13" name="annet13">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите ножницы?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet14" name="annet14">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet14" name="annet14">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet14" name="annet14">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы бросаете мяч?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet15" name="annet15">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet15" name="annet15">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet15" name="annet15">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы бросаете камень?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet16" name="annet16">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet16" name="annet16">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet16" name="annet16">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы бросаете палку?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet17" name="annet17">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet17" name="annet17">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet17" name="annet17">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>



            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите щетку, когда подметаете пол?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet18" name="annet18">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet18" name="annet18">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet18" name="annet18">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы забиваете гвозди?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet19" name="annet19">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet19" name="annet19">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet19" name="annet19">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы зажигаете спичку?</p>

                <div>
                    <input class="form-radio" type="radio" value="right" v-model="annet.annet20" name="annet20">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="left" v-model="annet.annet20" name="annet20">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" v-model="annet.annet20" name="annet20">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


        </div>

    </form>

    <div class="mt-3 text-center font-bold" v-if="filled==20">
        <LinkButton to="ishihara" @click="save">Далее</LinkButton>
    </div>
    <div class="mt-3 text-center font-bold" v-else>
        {{ filled*5 }}%
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

let annet = reactive(user.annet ? user.annet : {
    annet1_no: false,
    annet1_mom: false,
    annet1_dad: false,
    annet1_sibling: false,
    annet1_other : '',
    annet2: '',
    annet3: '',
    annet4: '',
    annet5: '',
    annet6: '',
    annet7: '',
    annet8: '',
    annet9: '',
    annet10: '',
    annet11: '',
    annet12: '',
    annet13: '',
    annet14: '',
    annet15: '',
    annet16: '',
    annet17: '',
    annet18: '',
    annet19: '',
    annet20: '',
})



const filled = computed(() => {
    let count = 0

    if(annet.annet1_no || annet.annet1_mom || annet.annet1_dad || annet.annet1_sibling || annet.annet1_other){count++}
    if(annet.annet2){count++}
    if(annet.annet3){count++}
    if(annet.annet4){count++}
    if(annet.annet5){count++}
    if(annet.annet6){count++}
    if(annet.annet7){count++}
    if(annet.annet8){count++}
    if(annet.annet9){count++}
    if(annet.annet10){count++}
    if(annet.annet11){count++}
    if(annet.annet12){count++}
    if(annet.annet13){count++}
    if(annet.annet14){count++}
    if(annet.annet15){count++}
    if(annet.annet16){count++}
    if(annet.annet17){count++}
    if(annet.annet18){count++}
    if(annet.annet19){count++}
    if(annet.annet20){count++}

    return count
})

const save = () => {
    updateDoc(doc(db, 'users', uid), {annet:{...annet}})
}


</script>
