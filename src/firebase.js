import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc } from 'firebase/firestore'
import { useDocument ,useCollection} from 'vuefire'


export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBc2RPaqv4pFK7BnkU9ipHiDHPVU_armEE",
  authDomain: "psycat-35173.firebaseapp.com",
  projectId: "psycat-35173",
  storageBucket: "psycat-35173.appspot.com",
  messagingSenderId: "109673373606",
  appId: "1:109673373606:web:596fd11a48706cd9563967",
  measurementId: "G-VSVXVBRR7H"
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)

// here we can export reusable database references

export const counter_document = doc(db, 'counter', 'counter')


export const counter = useDocument(counter_document)


