var typed = new Typed(".auto-type",{
    strings: ["Simple Step, Big Move","Find your desired home in seconds","Easily rent your house to tenants"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
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
        let name = (snap.val().name);
        document.getElementById("user").innerHTML = "Hey, "+ name;
    })

//     firebase.database().ref()
//   .orderByChild("uid")
//   .equalTo(uid)
//   .once('value').then((results) => {
//     results.forEach((snapshot) => {
//       let name = snapshot.val().name;
   
//       document.getElementById("user").innerHTML=name;
//     });
//   });
}

// var firebaseRef = firebase.database().ref("house-rental");
// firebaseRef.on("value") , function(snapshot){
//     snapshot.forEach(function(element){
//         document.querySelector("#user").innerHTML = 
//         <div>${element.val()}</div>
//     })
// }

function logout(){
    firebase.auth().signOut()
}

function gotoBrowse(){
    location.replace("../html/browse.html")
}


