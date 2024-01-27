<template>
    <div class="h-screen flex w-full justify-center" :style="{'background-color':pallete.N}">
        <div  class="h-screen justify-center items-center flex flex-col flex-1  m-auto">
            <video ref="webcam" class="absolute z-10 top-0 left-0" id="webcam" width="400" height="300" autoplay></video>
            <canvas ref="overlay" id="overlay" class="absolute z-10 top-0 left-0" width="400" height="300"></canvas>
            <canvas ref="eyes" class="absolute z-10 top-0 left-0" id="eyes" width="50" height="25"></canvas>
            <div class="relative">
                
                <div class="text-center absolute" style="color:#222; line-height:1;" :style="{top:'-'+(size/2)+'mm',left:'-'+(size/2)+'mm'}">
                <table>
                    <tr>
                        <td :style="{
                            'border-bottom':'1px solid '+pallete.B, 
                            'border-right': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                        <td :style="{
                            'border-bottom':'1px solid '+pallete.B, 
                            'border-left': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                    </tr>
                    <tr>
                        <td :style="{
                            'border-top':'1px solid '+pallete.B, 
                            'border-right': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                        <td :style="{
                            'border-top':'1px solid '+pallete.B, 
                            'border-left': '1px solid '+pallete.B, 
                        }"><div :style="{
                            'width':(size/2)+'mm', 
                            'height':(size/2)+'mm'
                        }"></div></td>
                    </tr>
                </table>
                
                </div>
                <div v-for="sq, i in sqartes" class="absolute"  v-show="circuleon" 
                :style="{
                    'width': size + 'mm',
                    'height': size + 'mm',
                    'top': (-size/2 + -radius*Math.cos(Math.PI/6*(i+0.5))) + 'mm',
                    'left':(-size/2 + radius*Math.sin(Math.PI/6*(i+0.5))) + 'mm',
                    'background-color':sq.color,
                    'border-radius': size/2 + 'mm',
                }"
            ></div>
            </div>
        </div>

    </div>


</template>


<script setup>

import {ref, reactive, onMounted} from 'vue'

import clm from 'clmtrackr'

import * as tf from '@tensorflow/tfjs';

const radius = ref(70) //mm
const size = ref(11.28) //mm

const webcam = ref()
const overlay = ref()
const eyes = ref()

const pallete = {
    P:'#a1ff00',
    S:'#6bff00',
    F:'#ff4400',
    B:'#000000',
    N:'#b2b2b2',
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

const sqartes = reactive([
    {color: pallete.P},
    {color: pallete.P},
    {color: pallete.P},
    {color: pallete.P},

    {color: pallete.P},
    {color: pallete.P},
    {color: pallete.P},
    {color: pallete.P},

    {color: pallete.P},
    {color: pallete.P},
    {color: pallete.P},
    {color: pallete.P},
])

sqartes[randomInt(12)].color = pallete.S

const circuleon = ref(false)


let turn = () => {

    circuleon.value = false 

    setTimeout(() =>{

        sqartes.forEach(sqarte => {
            sqarte.color = pallete.P
        })
        
        sqartes[randomInt(12)].color = pallete.S

        circuleon.value = true

        let keydown = (e) => {

            document.removeEventListener("keydown", keydown);

            turn()
        }

        document.addEventListener("keydown", keydown);

    }, 1000)

}


function getEyesRectangle(positions) {
    const minX = positions[30][0] - 1;
    const maxX = positions[28][0] + 1;
    const minY = positions[29][1] - 1;
    const maxY = positions[31][1] + 1;

    const width = maxX - minX;
    const height = maxY - minY;

    return [minX, minY, width, height];
}

onMounted(() => {
    const ctrack = new clm.tracker();
    
    const overlayCC = overlay.value.getContext('2d', { 
        willReadFrequently: true 
    });

    const eyesCC = eyes.value.getContext('2d', { 
        willReadFrequently: true 
    });


    ctrack.init();
    
    function onStreaming(stream) {
        webcam.value.srcObject = stream;
    }

    navigator.mediaDevices.getUserMedia({ video: true }).then(onStreaming);

    turn()
    
    ctrack.start(webcam.value);

    let image

    function trackingLoop() {
        // Проверим, обнаружено ли в видеопотоке лицо, 
        // и если это так - начнём его отслеживать.
        requestAnimationFrame(trackingLoop);

        let currentPosition = ctrack.getCurrentPosition();
        overlayCC.clearRect(0, 0, 400, 300);

        if (currentPosition) {
            ctrack.draw(overlay.value);

            let eyesRect = getEyesRectangle(currentPosition);

            eyesRect = [276, 141, 37, 18]

            overlayCC.strokeStyle = 'red';
            overlayCC.strokeRect(eyesRect[0], eyesRect[1], eyesRect[2], eyesRect[3]);

            const resizeFactorX = webcam.value.videoWidth / webcam.value.width;
            const resizeFactorY = webcam.value.videoHeight / webcam.value.height;

            let retangle = [eyesRect[0] * resizeFactorX, eyesRect[1] * resizeFactorY,
                eyesRect[2] * resizeFactorX, eyesRect[3] * resizeFactorY]

            let ey = [eyes.value.width, eyes.value.height]
            // console.log(ey)

            // retangle = [552, 224, 64, 32]
            // ey = [50, 25]

            eyesCC.drawImage(
                webcam.value,
                retangle[0], retangle[1],
                retangle[2], retangle[3],
                0, 0, ey[0], ey[1]
            );

            const new_image = tf.browser.fromPixels(eyes.value).div(tf.scalar(127)).sub(tf.scalar(1));

            if(image && new_image){

                tf.norm(new_image.sub(image)).data().then((data) => {
                    
                    if(data[0] > 5 && data[0] < 10){
                        console.log(data[0])
                        sqartes.forEach(sqarte => {
                            sqarte.color = pallete.F
                        })
                    }
                })
            }

            image = new_image

        }else{
            sqartes.forEach(sqarte => {
                sqarte.color = pallete.F
            })
            
            // circuleon.value = false 
        }
    }

    trackingLoop()
})

</script>
