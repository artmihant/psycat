<template>
    <div class="h-screen flex w-full justify-center" :style="{
            'background-color':pallete.neutral
        }">
        <div class="h-screen justify-center items-center flex flex-col flex-1 m-auto">
            <div class="relative">

                <GilbertCross :size="size" :color=pallete.cross />

                <AppleFigure 
                    :color="pallete.apple" 
                    :top="70"
                    :left="0"
                />

                <BananaFigure 
                    :color="pallete.banana" 
                    :top="-70"
                    :left="0"
                />

                <BlobFigure 
                    :color="pallete.blob" 
                    :top="0"
                    :left="70"
                />


                <CirculeFigure 
                    :color="pallete.circule" 
                    :top="0"
                    :left="-70"
                />

                <HeartFigure 
                    :color="pallete.heart" 
                    :top="-50"
                    :left="50"
                />

                <HexFigure 
                    :color="pallete.hex" 
                    :top="50"
                    :left="50"
                />

                <LeafFigure 
                    :color="pallete.leaf" 
                    :top="50"
                    :left="-50"
                />

                <LemonFigure 
                    :color="pallete.lemon" 
                    :top="-50"
                    :left="-50"
                />

                <SquareFigure 
                    :color="pallete.square" 
                    :top="30"
                    :left="30"
                />

                <SunFigure 
                    :color="pallete.sun" 
                    :top="-30"
                    :left="30"
                />


<!-- 
                <div v-for="sq, i in sqartes" class="absolute heart"
                :style="{
                    'width': size + 'mm',
                    'height': size + 'mm',
                    'top': (-size/2 + -radius*Math.cos(Math.PI/6*(i+0.5))) + 'mm',
                    'left':(-size/2 + radius*Math.sin(Math.PI/6*(i+0.5))) + 'mm',
                }">


                    <div class="before"
                        :style="{
                            'background-color':sq.color,
                            'width': size + 'mm',
                            'height': 1.5*size + 'mm',
                            'left': size/2 + 'mm',
                            'border-radius': size + 'mm ' + size + 'mm 0 0'
                        }"                              
                    ></div>
                    <div class="after"
                        :style="{
                            'background-color':sq.color,
                            'width': size + 'mm',
                            'height': 1.5*size + 'mm',
                            'left':  -size/2 + 'mm',
                            'border-radius': size + 'mm ' + size + 'mm 0 0'
                        }"      
                    ></div>
                </div> -->
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



const radius = ref(70) //mm
const size = ref(7.28) //mm

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


const sq_count = 12


const sqartes = reactive([])

for(let i=0;i<sq_count;i++){
    sqartes.push({
        color:  pallete.cross
    })
} 

</script>

