const firebaseConfig = {
      apiKey: "AIzaSyB8JrX18T9UyRZ3XrEkjXyalakohhUWeHg",
  authDomain: "poloution-webapp.firebaseapp.com",
  databaseURL: "https://poloution-webapp-default-rtdb.firebaseio.com",
  projectId: "poloution-webapp",
  storageBucket: "poloution-webapp.appspot.com",
  messagingSenderId: "144497361266",
  appId: "1:144497361266:web:ada6214dd336fb6a931deb",
  measurementId: "G-R1XGK7J072"
    };
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE
username= localStorage.getItem("user_name")
document.getElementById("username").innerHTML= "Welcome "+ username+ "!"
function addRoom(){
      room_name= document.getElementById("roomName").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingRoomName"
      })
      localStorage.setItem("room_name", room_name)
      window.location= "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      window.location= "Home_screen.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names) 
row= "<div class= 'room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+= row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location= "kwitter_page.html"
}
