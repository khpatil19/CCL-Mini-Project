//  window.onload=function(){


//  }

// var typed = new Typed(".auto-type",{
//     strings: ["Is Earning Now!"],
//     typeSpeed: 100,
    
//     loop: false
    
// })


document.getElementById("rent").addEventListener("submit",(event)=>{
    event.preventDefault()
  })

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../html/login.html")
    }else{
        
        //document.getElementById("user").innerHTML = "Hello, "+user.email
        if(user!=null){
            getUserData(user.uid)
            // const uid = user.uid
            // var email_verified = user.emailVerified;
            //document.getElementById("user").innerHTML = "Hey "+ uid;
        }
    }
})

function getUserData(uid) {
    firebase.database().ref('users/' + uid).once("value", snap => {
       
        let email = (snap.val().email);
        let name = (snap.val().name);
        let mobile = (snap.val().mobile);
         let uid = (snap.val().uid);
        document.getElementById("email").value = email;
        // document.getElementById("fullname").value = name;
        document.getElementById("mobile").value = mobile;
        document.getElementById("uid").value = uid;
    })
}

async function registerHouse(){
   let popup = document.getElementById("popup");
   var aptName =  document.getElementById("aptName").value;
   var bldgName =  document.getElementById("bldgName").value;
   var societyName =  document.getElementById("societyName").value;
   var location =  document.getElementById("location").value;
   var fulladd =  document.getElementById("fulladd").value;
   var mobile =  document.getElementById("mobile").value;
   var email =  document.getElementById("email").value;
   var fees =  document.getElementById("fees").value;
   var uid = document.getElementById("uid").value;

   try {
    // const userAuth = await firebase.auth().createUserWithEmailAndPassword(email, password);
    var user = {
        aptName: aptName,
        bldgName: bldgName,
        societyName: societyName,
        location: location,
        fulladd: fulladd,
        mobile: mobile,
        fees: fees,
        uid: uid,
        email: email,
    }
    writeUserData(user)
 
    
 

} 

catch (error) {
    console.log(error.message)
}

popup.classList.add("open-popup");
//    document.getElementById("main-div").style.opacity= 0.2;



}


function writeUserData(user) {
    firebase.database().ref('houses/' + user.uid).set(user).catch(error => {
        console.log(error.message)
    });

}







function redirect(){
    location.replace("../html/browse.html")
}

function logout(){
    firebase.auth().signOut()
}



    
