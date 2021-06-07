//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAzSwmygk2h2bctstlVa6NTBfj7kDeJKpU",
      authDomain: "kwitter-cbee7.firebaseapp.com",
      databaseURL: "https://kwitter-cbee7-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbee7",
      storageBucket: "kwitter-cbee7.appspot.com",
      messagingSenderId: "603087453507",
      appId: "1:603087453507:web:48a12c3a552d739f2483f6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
message_with_tag="<h4 class='message_h4'>"+message +"</h4>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
