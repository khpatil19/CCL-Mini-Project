firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../html/login.html")
    }else{
        
        //document.getElementById("user").innerHTML = "Hello, "+user.email
        if(user!=null){
            // getUserData(user.uid)
            // const uid = user.uid
            // var email_verified = user.emailVerified;
            //document.getElementById("user").innerHTML = "Hey "+ uid;
        }
    }
})


function logout(){
    firebase.auth().signOut()
}
