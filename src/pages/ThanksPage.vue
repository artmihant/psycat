<template>
  <div class="h-screen flex justify-center bg-white text-black">
    <div class="h-screen justify-center">
      <div class="h-screen w-full justify-center flex flex-col flex-1">
        <div class="max-w-[550px]">
          <p><b>Спасибо за участие!</b></p>

          <p>
            Если вас интересуют результаты нашего исследования, <br />можете указать email
            для обратной связи:
          </p>
          <input
            class="border-0 border-b"
            type="text"
            v-model="email"
            name="email"
            placeholder="Email для обратной связи"
          />
        </div>
        <div class="mt-6 text-center font-bold">
          <div
            @click="save"
            class="cursor-pointer rounded-lg border px-2 py-3 inline border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100"
          >
            Сохранить
          </div>
        </div>
        <div class="w-full text-neutral-400">
          <ul>
            <!-- <li><RouterLink to="anketa">Анкета </RouterLink></li>
                <li><RouterLink to="annet">Тест Аннет</RouterLink></li>
                <li><RouterLink to="ishihara">Тест Ишихары</RouterLink></li>
                <li><RouterLink to="stroop">Тест Струпа</RouterLink></li>
                <li><RouterLink to="gilbert">Тест Гилберта</RouterLink></li> -->
            <!-- <li><RouterLink to="delaystroop">Отложенный тест Струпа</RouterLink></li>            -->
            <!-- <li><RouterLink to="testfirebase">Тест FireBase</RouterLink></li>         -->
          </ul>
        </div>

        <button
          @click="clear"
          class="absolute bottom-5 right-5 cursor-pointer text-neutral-500 text-xl"
        >
          Ψ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  generateRandomQuality,
  generateRandomAnimale,
  generateRandomColor,
} from "../lib/random_string";

import LinkButton from "../components/LinkButton.vue";
import { collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";

import { ref, inject, reactive, computed } from "vue";
import { db } from "../firebase.js";

/** Функции плагинов */
import { useRouter } from "vue-router";

const router = useRouter();

const uid = inject("uid");

const user = (await getDoc(doc(db, "users", uid))).data();
const email = ref(user.email ? user.email : "");

const save = () => {

    if (document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement) {
            document.exitFullscreen();
    }
  updateDoc(doc(db, "users", uid), { email: email.value });
};

const clear = async () => {
  let cid = window.localStorage.getItem("cid");
  let uid = cid + "_" + generateRandomColor() + "_" + generateRandomAnimale();
  window.localStorage.setItem("uid", uid);
  await router.push({ name: "home" });

  window.location.reload();
};
</script>
