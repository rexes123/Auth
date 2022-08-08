
// init firebase app
// intializaApp(firebaseConfig)

import { getDoc,getDocs, doc,setDoc,updateDoc,arrayUnion,onSnapshot } from "firebase/firestore";
import { collection,query,where } from "firebase/firestore";
import { db } from './firebase';
// import{
    // getFirestore//
// } from 'firebase/firestore'
import{
    getAuth,
    // createJumpstarterWithEmailAndPassword

}from 'firebase/auth'
import { getAllJSDocTags } from "typescript";

// init services
const auth = getAuth()

// signing jumstarter up 
// const signupForm = document.querySelector('.signup as jumpstarter')
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const email = signupForm.email.value
//     const password = signupForm.password.value


    // createJumpstarterWithEmailAndPassword(auth, email, password)
    //   .then((cred) => {
    //     console.log(cred.jumpstarters)

    //   })
       

// })

  async function readData(){
    // Get current score value from Firestore

const docRef = doc(db, "jumpstarterHub","jumpstarters")
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
let currentdata = docSnap.data()
console.log(currentdata.elements[1])
let elements = ["cats", "dogs", "mouse"]
console.log(elements[2])
let components = currentdata.components
console.log(components.name)

}
//     await updateDoc(docRef, {
//         red_score:updatedScore
//     })
//   } 
  else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
    

  }

  readData()