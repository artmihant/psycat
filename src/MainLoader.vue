<template>
    <router-view/>
</template>

<script setup>
import './lib/detector'

import {provide} from "vue";

import {collection, doc, getDoc, addDoc} from 'firebase/firestore'

import {db} from './firebase.js'

const users = collection(db,'users')

let userSnap

const create_user = async () => {
    userSnap = await addDoc(users, window.browserInfo);
    window.localStorage.setItem('uid', userSnap.id)
    return userSnap
}

let uid = window.localStorage.getItem('uid')

if(!uid){
    userSnap = create_user()
}else{
    userSnap = await getDoc(doc(db, 'users', uid))
    if (!userSnap.exists()){
        userSnap = create_user()
    }
}

uid = userSnap.id

// let userData = userSnap.data()
// let userRef = doc(db, 'users', uid)

// console.log(userRef,userSnap,userData )

console.log(uid)

provide('uid', uid)

</script>
 
