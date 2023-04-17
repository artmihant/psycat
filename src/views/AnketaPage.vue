<template>
    <div class="flex justify-center">  

<div class="mx-12 py-12 max-w-[600px]">
    <h2> Пожалуйста, заполните анкету </h2>

    <form class="my-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <div class="grid grid-cols-1 gap-6"> 

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Пол</legend>
                <div>
                    <input class="form-radio" type="radio"  value="male" name="sex">
                    <span class="ml-2">Мужской</span>
                </div>
                <div>
                    <input class="form-radio" type="radio"  value="female" name="sex">
                    <span class="ml-2">Женский</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Возраст</legend>
                <input class="form-input mt-1 block" type="number" placeholder="Число полных лет" >
            </fieldset>
        
            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Образование</legend>
                <div>
                    <input class="form-radio" type="radio" value="1" name="education">
                    <span class="ml-2">Основное общее (9 классов)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="2" name="education">
                    <span class="ml-2">Среднее общее (11 классов)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="3" name="education">
                    <span class="ml-2">Среднее специальное (Колледж)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="4" name="education">
                    <span class="ml-2">Неоконченное высшее (3 курса включительно и выше)</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="5" name="education">
                    <span class="ml-2">Высшее</span>
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Есть ли у вас художественное образование?</legend>
                <div>
                    <input class="form-radio" type="radio" value="1" name="artist">
                    <span class="ml-2">Художественное направление</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="2" name="artist">
                    <span class="ml-2">Направление дизайна</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="3" name="artist">
                    <span class="ml-2">Нет</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="4" name="artist">
                    <span class="ml-2">Другое:</span> <input class="border-0 border-b" type="text" name="artist_other">
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
                    <input class="form-radio" type="radio" value="0" name="synesthesia">
                    <span class="ml-2">Нет</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="1" name="synesthesia">
                    <span class="ml-2">Да</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="2" name="synesthesia">
                    <span class="ml-2">Другое:</span><input class="border-0 border-b"  type="text" name="synesthesia_other">
                </div>
            </fieldset>


            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Есть ли у Вас какие-то зрительные заболевания?</legend>
                <div>
                    <input class="form-radio" type="radio" value="0" name="visual_diseases">
                    <span class="ml-2">Нет</span>
                </div>
                <div>
                    <input class="form-radio" type="radio" value="1" name="visual_diseases">
                    <span class="ml-2">Да:</span><input class="border-0 border-b"  type="text" name="visual_diseases_other">
                </div>
            </fieldset>

            <fieldset class="block border border-neutral-400 border-dashed p-2">
                <legend class="text-lg">Email</legend>
                <p> Заполняется по желанию. Мы вышлем вам на него результаты тестирования.</p>
                <input class="form-input mt-1 block" type="email">
            </fieldset>

        </div>

    </form>

    <div class="mt-3 text-center font-bold">
        <LinkButton to="annet">Далее</LinkButton>
    </div>

</div>
</div>

</template>


<script setup>

import LinkButton from '../components/LinkButton.vue';

</script>

