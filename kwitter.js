

function login()  
{
    username =  document.getElementById("username").value; 
   window.localStorage.setItem("username",username);
   window.location = "kwitter_room.html";
}
