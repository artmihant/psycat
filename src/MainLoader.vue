<template>
    <router-view/>
</template>

<script setup>
import './lib/detector'

import {generateRandomQuality, generateRandomAnimale, generateRandomColor} from './lib/random_string'

import {provide} from "vue";

import {doc, getDoc, setDoc} from 'firebase/firestore'

import {db} from './firebase.js'

let cid = window.localStorage.getItem('cid')

if(!cid){
    cid = generateRandomQuality()
    window.localStorage.setItem('cid', cid)
}


const create_user = async () => {
    let data = window.browserInfo
    data.datetime = new Date();

    let uid = cid + '_' + generateRandomColor() + '_' + generateRandomAnimale()

    await setDoc(doc(db, "users", uid), data);

    window.localStorage.setItem('uid', uid)
    return uid
}


let uid = window.localStorage.getItem('uid')

if(!uid){
    uid = await create_user()
}else{
    let userSnap = await getDoc(doc(db, 'users', uid))
    if (!userSnap.exists()){
        uid = await create_user()
    }
}


provide('uid', uid)

</script>
 
