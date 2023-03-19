// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBOohT5Bp5v9riG-mcsN198T_w8JjzRNZc",
    authDomain: "practice-8f7c8.firebaseapp.com",
    databaseURL: "https://practice-8f7c8-default-rtdb.firebaseio.com",
    projectId: "practice-8f7c8",
    storageBucket: "practice-8f7c8.appspot.com",
    messagingSenderId: "48193162606",
    appId: "1:48193162606:web:e712e8303d62683aa9457f",
    measurementId: "G-040L2H7CS3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



