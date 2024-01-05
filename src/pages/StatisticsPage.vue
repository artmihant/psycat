<template>
    <div>
        <div v-for="(user, name) in users"> "{{user.id}}" : {{ user }}, </div>
    </div>
</template>
  
<script setup>
import {useCollection} from 'vuefire'
import {collection} from 'firebase/firestore'
import {db} from '../firebase.js'

const users = useCollection(collection(db, 'users'))

</script>
  