firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{
        //document.getElementById("user").innerHTML = "Hello, "+user.email
        if(user!=null){
            var email = user.email;
            var email_verified = user.emailVerified;
            document.getElementById("user").innerHTML = "Welcome "+email+" Verified: "+email_verified;
        }
    }
})


function logout(){
    firebase.auth().signOut()
}

