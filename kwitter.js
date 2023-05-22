function addUser(){
    username= document.getElementById("username").value
    localStorage.setItem("user_name", username)
    window.location= "kwitter_room.html"
}
function logout(){
    localStorage.removeItem("user_name")
    window.location= "Home_screen.html"
}