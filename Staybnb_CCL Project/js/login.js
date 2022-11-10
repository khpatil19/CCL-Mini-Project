document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})





// firebase.auth().onAuthStateChanged((user)=>{
//      if(user){
//         location.replace("welcome.html")
//      }
    
// })

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password).then(authUser => {

        if(authUser.user.emailVerified){ //This will return true or false
            location.replace("../html/home.html")
        }else{
            document.getElementById("error").innerHTML = "Email is not verified"
            document.getElementById("success").innerHTML = null
            document.getElementById("sendLink").style.display = "block";
            document.getElementById("forgotPass").style.display = "none";
           
       
        }
        })
    .catch((error)=>{
        document.getElementById("forgotPass").style.display = "block";
        document.getElementById("sendLink").style.display = "none";
        
        document.getElementById("error").innerHTML = "Invalid email or password"
        document.getElementById("success").innerHTML = null
    })
}


function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        document.getElementById("error").innerHTML = null
        document.getElementById("success").innerHTML = "Email sent for password reset!"
        document.getElementById("forgotPass").style.display = "none";
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = "This email is not registered with us."
       // document.getElementById("forgotPass").style.display = "none";
        document.getElementById("email").focus();
    });
}

function sendLink(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(authUser => {
        
        if(authUser.user.emailVerified == false){ //This will return true or false
            var user = firebase.auth().currentUser;
           // var uid = user.uid;
            user.sendEmailVerification();
           // alert(uid)

            document.getElementById("error").innerHTML = null
            document.getElementById("success").innerHTML = "An email is sent for verification!"
            document.getElementById("sendLink").style.display = "none";
        }
        })
    // firebase.auth().sendEmailVerification(email)
    // .then(() => {
    //     document.getElementById("error").innerHTML = null
    //     document.getElementById("success").innerHTML = "Email sent for verification!"
    //     document.getElementById("sendLink").style.display = "none";
    // })
    .catch((error) => {
        document.getElementById("error").innerHTML = "This email is not registered with us."
        document.getElementById("email").focus();
    });
}