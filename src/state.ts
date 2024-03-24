import { defineStore } from "pinia";
import {reactive, ref} from "vue";
import {generateNiceRandomKey} from '@/lib/random'
import {doc, setDoc, updateDoc} from 'firebase/firestore'
import {db} from './firebase.js'
import {Series} from '@/types';

export default defineStore('useState', () => {

    const code = ref('')
    const uid = ref('')


    function start(){

        const local = {
            code: window.localStorage.getItem('code'),
            uid: window.localStorage.getItem('uid'),
            gilbert_traning_passed: window.localStorage.getItem('gilbert_traning_passed'),
        }

        if(local.code && local.uid){
            code.value = local.code
            uid.value = local.uid

            if(local.gilbert_traning_passed){
                gilbert_traning_passed.value = local.gilbert_traning_passed
            }

        }else{
            createUser()
        }


    }

    async function createUser(){
        const key = generateNiceRandomKey()

        let data = {
            datetime: new Date(),
            code: key.code
        }
        
        setDoc(doc(db, "users", uid.value), data).then(
            () => {
                window.localStorage.setItem('code', key.code)
                window.localStorage.setItem('uid', key.uid)
                window.localStorage.setItem('gilbert_traning_passed', 'no')

                code.value = key.code
                uid.value = key.uid

                gilbert_traning_passed.value = 'no'

            }
        ).catch(() => {
            alert('Проблемы с интернетом!')
        })
    }

    const gilbert_traning_passed = ref('no')

    function saveGilbertTrainig(gilbert_traning_results: Series[]){

        window.localStorage.setItem('gilbert_traning_passed', 'yes')

        updateDoc(doc(db, 'users', uid.value), {
            gilbert_traning_passed: 'yes',
            gilbert_traning_results: gilbert_traning_results
        })
    }

    return {code, uid, start, createUser, 
        gilbert_traning_passed, saveGilbertTrainig
    }
})
