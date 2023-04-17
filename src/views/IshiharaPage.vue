<template>

    <div class="h-screen flex justify-center 
            bg-white text-black ">    
    <div class="h-screen justify-center">    
        <div class="h-screen w-full justify-center 
            flex flex-col flex-1">
        <h1>Тест Ишихары</h1>
        <div class="w-full  grid grid-col-2">
            <div>
                <img src="public/ishihara/1-dark.png" class="h-[500px] w-[500px]"/>
            </div>
            <div class="grid m-5 w-[300px]">
                <div id="numberbuttons" class="grid grid-cols-3">
                    <button v-for="n in numberbuttons" 
                        class="rounded-lg border  m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
                        {{ n }}
                    </button>
                </div>
                
                <div id="otherbuttons" class="grid grid-cols-2">
                    <button
                        class="rounded-lg border m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
                        Не знаю
                    </button>
                    <button
                        class="rounded-lg border m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
                        Ничего нет
                    </button>
                </div>
                
            </div>
            
        </div>

    </div>
</div>
</div>

</template>

<script setup>

const numberbuttons = [
    1,2,3,4,5,6,7,8,9
]

const images = [
    {src: "8-dark.png", id: 0, value: 8},
    {src: "7-dark.png", id: 1, value: 7},
    {src: "8-light.png", id: 2, value: 8},
    {src: "2-light.png", id: 3, value: 2},
    {src: "1-light.png", id: 4, value: 1},
    {src: "6-dark.png", id: 5, value: 6},
    {src: "6-light2.png", id: 6, value: 6},
    {src: "3-light.png", id: 7, value: 3},
    {src: "3-dark.png", id: 8, value: 3},
    {src: "4-med.png", id: 9, value: 4},
    {src: "9-light.png", id: 10, value: 9},
    {src: "8-light2.png", id: 11, value: 8},
    {src: "5-med.png", id: 12, value: 5},
    {src: "2-dark.png", id: 13, value: 2},
    {src: "9-dark.png", id: 14, value: 9},
    {src: "1-light2.png", id: 15, value: 1},
    {src: "1-dark.png", id: 16, value: 1},
    {src: "7-light.png", id: 17, value: 7},
    {src: "4-med2.png", id: 18, value: 4},
    {src: "3-med.png", id: 19, value: 3},
    {src: "4-light2.png", id: 20, value: 4},
    {src: "5-light.png", id: 21, value: 5},
    {src: "4-light.png", id: 22, value: 4}
]



</script>