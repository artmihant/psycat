<template>
    <router-view/>
</template>

<script setup>
import './lib/detector'

import {generateRandomQuality, generateRandomAnimale, generateRandomColor} from './lib/random_string'

import {provide} from "vue";

import {doc, getDoc, setDoc} from 'firebase/firestore'

import {db} from './firebase.js'

let userSnap

let cid = window.localStorage.getItem('cid')

if(!cid){
    cid = generateRandomQuality()
    window.localStorage.setItem('cid', cid)
}


const create_user = async () => {
    let data = window.browserInfo
    data.datetime = new Date();

    let uid = cid + '_' + generateRandomColor() + '_' + generateRandomAnimale()

    userSnap = await setDoc(doc(db, "users", uid), data);

    window.localStorage.setItem('uid', uid)
    return userSnap
}


let uid = window.localStorage.getItem('uid')

if(!uid){
    userSnap = await create_user()
    uid = userSnap.id
}else{
    userSnap = await getDoc(doc(db, 'users', uid))
    if (!userSnap.exists()){
        userSnap = await create_user()
    }
}


provide('uid', uid)

</script>
 
