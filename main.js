import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAy2sdXZBATUG899y7KZpZsnOluIckd_Jc",
    authDomain: "login-signup-999.firebaseapp.com",
    projectId: "login-signup-999",
    storageBucket: "login-signup-999.firebasestorage.app",
    messagingSenderId: "831110980438",
    appId: "1:831110980438:web:0974f24c997274899d2cf7"
  };

  const app = initializeApp(firebaseConfig);
//   const username = document.getElementById("displayUser");
//   const email = document.getElementById("displayEmail");
//  const Phoneno = document.getElementById("displayPhone");
    const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
        
    } else {
        Swal.fire({
            icon: "error",
            title: "Data Failed",
            text: "User Sign Out",
        });
    }
  });