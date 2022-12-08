// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeohTu2srVuF1BnvzrU-b6XeUvf1Z7Fkk",
  authDomain: "twitter-project-df3d7.firebaseapp.com",
  databaseURL: "https://twitter-project-df3d7-default-rtdb.firebaseio.com",
  projectId: "twitter-project-df3d7",
  storageBucket: "twitter-project-df3d7.appspot.com",
  messagingSenderId: "417082184293",
  appId: "1:417082184293:web:f3e8071bb8b2e667e42c8c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

     localStorage.setItem("room_name", room_name);
     
     window.location = "chat_room.html";
}