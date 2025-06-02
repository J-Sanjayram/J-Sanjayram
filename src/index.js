import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCu190WbRUlR_KND7vODQdVy4FOgLLOFEA",
  authDomain: "sample-6fce0.firebaseapp.com",
  databaseURL: "https://sample-6fce0-default-rtdb.firebaseio.com",
  projectId: "sample-6fce0",
  storageBucket: "sample-6fce0.appspot.com",
  messagingSenderId: "625856667950",
  appId: "1:625856667950:web:55b184a368384ad69a1abf",
  measurementId: "G-J7JRB45E1D"
});
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user =>{
    if(user !== null){
        console.log('logged in!');

    }else{
        console.log('no user');
    }
});
