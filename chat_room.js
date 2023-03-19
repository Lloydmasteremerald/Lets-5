const firebaseConfig = {
    apiKey: "AIzaSyDcBnnxWn6ew_dx6lYc-Y3hdKFWCPONRCk",
    authDomain: "lets-chat-4761f.firebaseapp.com",
    databaseURL: "https://lets-chat-4761f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-4761f",
    storageBucket: "lets-chat-4761f.appspot.com",
    messagingSenderId: "185834209295",
    appId: "1:185834209295:web:b151f3b0e6047bb948237a",
    measurementId: "G-76LLCP4DB9"
  };

firebase.initializeApp(firebaseConfig);
User_name = localStorage.getItem("user_name");
document.getElementById("Username").innerHTML = "Welcome " + User_name + "!";

room_name = localStorage.getItem("room");

user_name = localStorage.getItem("user_name");

function Addroom() {
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose: "addding_room_name"
      });
      localStorage.setItem("room", room_name);
      window.location = "chatting_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + " </div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room", room_name);
      window.location = "chatting_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room");
      window.location = "index.html";
}