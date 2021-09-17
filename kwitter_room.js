
var firebaseConfig = {
      apiKey: "AIzaSyACF6-P7LasEudX3QDr1tYOcSUHh10vX8s",
      authDomain: "kwitter-page-22134.firebaseapp.com",
      databaseURL: "https://kwitter-page-22134-default-rtdb.firebaseio.com",
      projectId: "kwitter-page-22134",
      storageBucket: "kwitter-page-22134.appspot.com",
      messagingSenderId: "35579949967",
      appId: "1:35579949967:web:c798548c2b3a06f42151fa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome "+ username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log("roomname-"+Room_names);
        row = "<div class='roomname' id = "+Room_names+"onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      });});}
getData();

function addroom() {
      roomname =  document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("room_name",roomname);
      window.location = "kwitter_page.html";
}


function redirect_to_roomname(name) 
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

 getData();

 function logout() {
       localStorage.removeItem("username");
       localStorage.removeItem("room_name");
       window.location = "index.html";
 }


