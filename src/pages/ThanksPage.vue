<template>
  <div class="h-screen flex justify-center bg-white text-black">
    <div class="h-screen justify-center">
      <div class="h-screen w-full justify-center flex flex-col flex-1">
        <div class="max-w-[550px]">
            
          <button  class=" cursor-pointer text-neutral-500 text-xl">
          Ваш код:  {{ state.code }}
          </button>

          <p><b>Спасибо за участие!</b></p>

          <router-link to="/">На главную</router-link>

      </div>
    </div>
    </div>
  </div>
</template>

<script setup>

import TextButton from "../components/TextButton.vue";
import { collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";

import { ref, inject, reactive, computed } from "vue";
import { db } from "../firebase.js";
import useState from "@/state";
/** Функции плагинов */
import { useRouter } from "vue-router";

const state = useState()

const router = useRouter();

const save = () => {
    router.push({name: "home"})
};

</script>
