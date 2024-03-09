<template>
    <div class="h-screen flex w-full justify-center" :style="{
            'background-color':pallete.neutral
        }">
        <div class="h-screen justify-center items-center flex flex-col flex-1 m-auto">
            <div class="relative">

                <component 
                    v-for="view, i in viewstate"
                    :key="i"
                    :is="figures[view.figure]" 
                    :color="view.color" 
                    :top="-radius*Math.cos(2*Math.PI/viewcount*(i+0.5))"
                    :left="radius*Math.sin(2*Math.PI/viewcount*(i+0.5))"
                    :scale="scale"
                />

                <GilbertCross :size="crosssize*scale" :color=pallete.cross />

            </div>
        </div>

    </div>

</template>


<script setup>

import {inject, ref, reactive, computed} from 'vue'
import GilbertCross from './gilbert/GilbertCross.vue';

import AppleFigure from '../figures/AppleFigure.vue';
import BananaFigure from '../figures/BananaFigure.vue';
import BlobFigure from '../figures/BlobFigure.vue';
import CirculeFigure from '../figures/CirculeFigure.vue';
import HeartFigure from '../figures/HeartFigure.vue';
import HexFigure from '../figures/HexFigure.vue';
import LeafFigure from '../figures/LeafFigure.vue';
import LemonFigure from '../figures/LemonFigure.vue';
import SquareFigure from '../figures/SquareFigure.vue';
import SunFigure from '../figures/SunFigure.vue';

const figures = {
    apple: AppleFigure,
    banana: BananaFigure, 
    blob: BlobFigure,
    circule: CirculeFigure,
    heart: HeartFigure,
    hex: HexFigure,
    leaf: LeafFigure,
    lemon: LemonFigure,
    square: SquareFigure,
    sun: SunFigure
}

const radius = ref(70) //mm
const crosssize = ref(10) //mm

const scale = ref(1)

const pallete = {
    neutral: '#b2b2b2',
    cross: '#222222',
    apple: '#ff0000',
    banana: '#ffff00',
    blob: '#0090ff',
    circule: '#000000',
    heart: '#ff0030',
    hex: '#000000',
    leaf: '#00ff00',
    lemon: '#ffff00',
    square: '#000000',
    sun: '#ffff00',

}

const viewcount = ref(12)

const viewstate = reactive([
    {
        figure: 'apple',
        color: pallete.apple
    },
    {
        figure: 'banana',
        color: pallete.banana
    },
    {
        figure: 'blob',
        color: pallete.blob
    },
    {
        figure: 'circule',
        color: pallete.circule
    },
    {
        figure: 'heart',
        color: pallete.heart
    },
    {
        figure: 'hex',
        color: pallete.hex
    },
    {
        figure: 'leaf',
        color: pallete.leaf
    },
    {
        figure: 'lemon',
        color: pallete.lemon
    },
    {
        figure: 'square',
        color: pallete.square
    },
    {
        figure: 'sun',
        color: pallete.sun
    },
])

viewcount.value = viewstate.length

// for(let i=0;i<sq_count;i++){
//     sqartes.push({
//         color:  pallete.cross
//     })
// } 




</script>

