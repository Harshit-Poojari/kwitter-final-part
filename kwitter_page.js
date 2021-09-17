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
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         likes = message_data['like'];
         name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_button = "<button class='btn btn-warning' id= "+firebase_message_id+"value = "+likes+"onclick='updatelike(this.id)'";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+likes+"</span> </button> <hr>";
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML +=  row;
      } });  }); }
getData();

function updatelike(message_id) {
 console.log("clicked_on_thebutton"+message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like: updated_likes
    });
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push ({
            name: username,
            message:msg,
            like:0
});
   document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}