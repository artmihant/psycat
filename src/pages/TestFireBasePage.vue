<template>
    <div class="h-screen flex justify-center 
        bg-white text-black ">    
        <div class="h-screen justify-center">    
            <div v-if="counter" class="h-screen w-full justify-center flex flex-col flex-1">
                <div class="text-2xl">
                    {{counter.count}} 
                    <button class=" rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100" 
                        @click="increment">+</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { updateDoc } from 'firebase/firestore'

import {counter, counter_document} from '../firebase.js'

const increment = () => {

    updateDoc(counter_document, {count:counter.value.count+1})
}

</script>
