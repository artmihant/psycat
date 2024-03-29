import { defineStore } from "pinia";
import {reactive, ref} from "vue";
import {generateNiceRandomKey} from '@/lib/random'
import {doc, setDoc, updateDoc} from 'firebase/firestore'
import {db} from './firebase.js'
import {Series} from '@/types';

export default defineStore('useState', () => {

    const code = ref('')
    const uid = ref('')


    function init(){

        const local = {
            code: window.localStorage.getItem('code'),
            uid: window.localStorage.getItem('uid'),
            gilbert_test_passed: window.localStorage.getItem('gilbert_test_passed'),
            stroop_test_passed: window.localStorage.getItem('stroop_test_passed'),
            ishihara_test_passed: window.localStorage.getItem('ishihara_test_passed'),
        }

        if(local.code && local.uid){
            code.value = local.code
            uid.value = local.uid

            if(local.gilbert_test_passed){
                gilbert_test_passed.value = local.gilbert_test_passed
            }
            if(local.stroop_test_passed){
                stroop_test_passed.value = local.stroop_test_passed
            }
            if(local.ishihara_test_passed){
                ishihara_test_passed.value = local.ishihara_test_passed
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
        
        code.value = key.code
        uid.value = key.uid

        setDoc(doc(db, "users", uid.value), data).then(
            () => {
                window.localStorage.setItem('code', key.code)
                window.localStorage.setItem('uid', key.uid)
                window.localStorage.setItem('gilbert_test_passed', 'no')
                window.localStorage.setItem('stroop_test_passed', 'no')
                window.localStorage.setItem('ishihara_test_passed', 'no')

                gilbert_test_passed.value = 'no'
                stroop_test_passed.value = 'no'
                ishihara_test_passed.value = 'no'

            }
        )
    }

    const gilbert_test_passed = ref('no')
    const stroop_test_passed = ref('no')
    const ishihara_test_passed = ref('no')


    function saveGilbertTest(gilbert_test_results: Series[]){


        updateDoc(doc(db, 'users', uid.value), {
            gilbert_test_passed: 'yes',
            gilbert_test_results: gilbert_test_results
        }).then(() => {

            window.localStorage.setItem('gilbert_test_passed', 'yes')

            gilbert_test_passed.value = 'yes'
        })
    }


    function saveStroopTest(stroop_test_results: Series[]){



        updateDoc(doc(db, 'users', uid.value), {
            stroop_test_passed: 'yes',
            stroop_test_results: stroop_test_results
        }).then(() => {       
            window.localStorage.setItem('stroop_test_passed', 'yes')
            stroop_test_passed.value = 'yes'
        })
    }

    function saveIshiharaTest(ishihara_test_results: Series[]){

        updateDoc(doc(db, 'users', uid.value), {
            ishihara_test_passed: 'yes',
            ishihara_test_results: ishihara_test_results
        }).then(() => {       
            window.localStorage.setItem('ishihara_test_passed', 'yes')
            ishihara_test_passed.value = 'yes'
        })
    }

    return {code, uid, init, createUser, 
        gilbert_test_passed, saveGilbertTest,
        stroop_test_passed, saveStroopTest,
        ishihara_test_passed, saveIshiharaTest,
    }
})
