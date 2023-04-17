<template>
    <div class="flex justify-center">  

<div class="mx-12 py-12 max-w-[600px]">
    <h2> Тест на левшизм (опросник Аннет) </h2>

    <form class="my-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <div class="grid grid-cols-1 gap-6"> 

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Были ли у вас среди близких родственников лица, лучше владевшие левой рукой или обеими руками одновременно?</p>
                <div>
                    <input class="form-checkbox" type="checkbox"  value="a" name="annet1">
                    <span class="ml-2">Нет</span>
                </div>
                <div>
                    <input class="form-checkbox" type="checkbox"  value="b" name="annet1">
                    <span class="ml-2">Мама</span>
                </div>
                <div>
                    <input class="form-checkbox" type="checkbox"  value="c" name="annet1">
                    <span class="ml-2">Папа</span>
                </div>
                <div>
                    <input class="form-checkbox" type="checkbox"  value="d" name="annet1">
                    <span class="ml-2">Мама</span>
                </div>
                <div>
                    <input class="form-checkbox" type="checkbox"  value="e" name="annet1">
                    <span class="ml-2">Другое</span><input class="border-0 border-b" type="text" name="annet1_other"> 
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой в детстве вы начинали рисовать?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet3">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet3">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet3">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой в детстве вы начинали писать?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet4">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet4">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet4">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой в детстве вы начинали есть?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet5">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet5">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet5">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы пишете?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet6">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet6">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet6">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы набираете номер телефона?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet7">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet7">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet7">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>



            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы открываете замок ключом?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet8">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet8">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet8">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите чашку?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet9">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet9">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet9">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите ложку?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet10">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet10">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet10">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите нож?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet11">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet11">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet11">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите расческу?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet12">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet12">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet12">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите зубную щетку?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet13">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet13">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet13">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите ножницы?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet14">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet14">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet14">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы бросаете мяч?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet15">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet15">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet15">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы бросаете камень?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet16">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet16">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet16">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы бросаете палку?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet17">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet17">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet17">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>



            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы держите щетку, когда подметаете пол?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet18">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet18">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet18">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы забиваете гвозди?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet19">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet19">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet19">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <p class="text-lg">Какой рукой вы зажигаете спичку?</p>

                <div>
                    <input class="form-radio" type="radio" value="left" name="annet20">
                    <span class="ml-2">правой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="right" name="annet20">
                    <span class="ml-2">левой</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="both" name="annet20">
                    <span class="ml-2">попеременно</span>
                </div>
            </fieldset>


        </div>

    </form>


    <div class="mt-3 text-center font-bold">
        <LinkButton to="ishihara">Далее</LinkButton>
    </div>    
</div>
</div>

</template>

<script setup>

import LinkButton from '../components/LinkButton.vue';

</script>
