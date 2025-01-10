      import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
      import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  
      const firebaseConfig = {
          apiKey: "AIzaSyAy2sdXZBATUG899y7KZpZsnOluIckd_Jc",
          authDomain: "login-signup-999.firebaseapp.com",
          projectId: "login-signup-999",
          storageBucket: "login-signup-999.firebasestorage.app",
          messagingSenderId: "831110980438",
          appId: "1:831110980438:web:0974f24c997274899d2cf7"
      };
  
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
  
      function signup() {
          const email = document.getElementById("Email").value;
          const password = document.getElementById("Password").value;
          const displayName = document.getElementById("Username").value;
     
  
          if (!email || !password ) {
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Please fill out all fields.",
              });
              return;
          }
  
          createUserWithEmailAndPassword(auth, email, password, displayName)
              .then((res) => {
                  console.log("User Data:", res.user);
  
                  Swal.fire({
                      title: "Congratulations!!",
                      text: "You have successfully signed up.",
                      icon: "success",
                  }).then(() => {
                      window.open("login.html", "_self");
                  });
              })
              .catch((error) => {
                  console.error("Error:", error.code, error.message);
  
                  Swal.fire({
                      icon: "error",
                      title: "Sign Up Failed",
                      text: "Password must contain at least 6 characters.",
                  });
              });
      }
  
      document.getElementById('btn2').addEventListener("click", signup);
