import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";


const firebaseConfig = {
   apiKey: "AIzaSyAzkY6QneE4ipawLKGPm8xMSBc3MRjz1Ew",
   authDomain: "authentication-eb5d0.firebaseapp.com",
   projectId: "authentication-eb5d0",
   storageBucket: "authentication-eb5d0.appspot.com",
   messagingSenderId: "739211806581",
   appId: "1:739211806581:web:9c2a3ef7167a3812e4753c",
   measurementId: "G-RWPJ75JFP3"
 };




 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 
 
document.querySelector(".truth").onclick = async () =>{
    //Add a new info into database
    await setDoc(doc(db, "truthOrDare", "savedAnswer"), {
        answerIs: "truth"
    })
}
document.querySelector(".truth--dare").onclick = async () =>{
    //Add a new info into database
    await setDoc(doc(db, "truthOrDare", "savedAnswer"), {
        answerIs: "dare"
    })
}