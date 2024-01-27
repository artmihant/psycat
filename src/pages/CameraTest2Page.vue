<template>
    <div class="h-screen flex w-full justify-center">
        <div  class="h-screen justify-center items-center flex flex-col flex-1  m-auto">

            <video ref="webcam" 
                class="absolute z-10 top-0 left-0" 
                id="webcam" 
                width="400" 
                height="300" autoplay/>

            <canvas ref="overlay" 
                id="overlay" 
                class="absolute z-10 top-0 left-0" 
                width="400" 
                height="300" />

            <!-- <canvas ref="eyes" 
                class="absolute z-10 top-0 left-0" 
                id="eyes" width="50" height="25"></canvas> -->

        </div>
    </div>
</template>


<script setup>

import {ref, reactive, onMounted} from 'vue'

import * as faceapi from 'face-api.js'

const MODEL_URL = '/psycat/models'

const webcam = ref()
const overlay = ref()

onMounted(async () => {

    
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)

    function onStreaming(stream) {
        webcam.value.srcObject = stream;
    }

    navigator.mediaDevices.getUserMedia({ video: true }).then(onStreaming);

    console.log('1')

    let keydown = (e) => {
        console.log('keydown')

        faceapi.detectAllFaces(webcam.value)
            .withFaceLandmarks()
            .withFaceDescriptors()
        .then(fullFaceDescriptions => {

            console.log('успех')
            console.log(fullFaceDescriptions)
            fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions)

            faceapi.draw.drawDetections(overlay.value, fullFaceDescriptions)

        }).catch((err) => {
            console.log('ошибка')
            console.log(err)
        })

        // document.removeEventListener("keydown", keydown);

    }

    document.addEventListener("keydown", keydown);



})


</script>
