document.getElementById("registerFormTwo").addEventListener("submit",(event)=>{
  event.preventDefault()
})

window.onload=function(){
  document.getElementById("proceed-to-login").style.display='none';
    
    firebase.auth().onAuthStateChanged((user)=>{
     if(!user){
        location.replace("../html/login.html")
    }
    else{
//document.getElementById("user").innerHTML = "Hello, "+user.email
        if(user!=null){
          var email = user.email;
          var email_verified = user.emailVerified;
          document.getElementById("email").value = email;
          var user = firebase.auth().currentUser;
          var uid = user.uid;
          document.getElementById("uid").value = uid;
          
        }
    }
    })
}

async function update(){



  var email = document.getElementById("email").value
  var mobile = document.getElementById("mobile").value
  var fullname = document.getElementById("fullname").value
  var uid = document.getElementById("uid").value
  
  if(validate_name(fullname) == false) {
      document.getElementById("error").innerHTML = "Please enter a valid name"
      document.getElementById("fullname").focus();
      return
    }

    if(validate_mobile(mobile) == false){
      document.getElementById("error").innerHTML = "Please enter a valid number"
      document.getElementById("mobile").focus();
      return
    }

  
  // const res = await fetch(

    
  //     "https://house-rental-843f2-default-rtdb.asia-southeast1.firebasedatabase.app/house-rental.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         uid,
  //         fullname,
  //         mobile,
  //         email,
  //       })
  //     }
  //   )
  //   if(res) {
  //     alert('Registration complete! Please verify mail to continue!')
  //     location.replace("login.html")
  //   } else {
  //     alert("Registration failed. Please try again!")
  //   }



  
  try {
    // const userAuth = await firebase.auth().createUserWithEmailAndPassword(email, password);
    var user = {
        name: fullname,
        mobile: mobile,
      
        uid: uid,
        email: email,
    }
    writeUserData(user)
    
    document.getElementById("final-signup").style.display = "none";
    document.getElementById("proceed-to-login").style.display = "block";
    document.getElementById("confirmation").innerHTML = "Account Created!";
    document.getElementById("error").style.display = "none";
    document.getElementById("fullname").style.opacity = '0.8';
    document.getElementById("fullname").style.backgroundColor = 'rgb(217, 248, 217)';
    document.getElementById("fullname").style.borderColor = 'rgb(59, 214, 59)';
    document.getElementById("fullname").style.cursor = 'not-allowed';
    document.getElementById("mobile").style.opacity = '0.8';
    document.getElementById("mobile").style.backgroundColor = 'rgb(217, 248, 217)';
    document.getElementById("mobile").style.borderColor = 'rgb(59, 214, 59)';
    document.getElementById("mobile").style.cursor = 'not-allowed';

    
 

} 

catch (error) {
    console.log(error.message)
}


  }

  function writeUserData(user) {
    firebase.database().ref('users/' + user.uid).set(user).catch(error => {
        console.log(error.message)
    });

   
    // alert('Registration complete! Please verify mail to continue!')
    // location.replace("login.html")
    
}

function loginPage(){
  location.replace("../html/login.html")
}

  function validate_name(fullname) {
    expression =  /^[a-zA-Z]+ [a-zA-Z]+$/
    if (expression.test(fullname) == true) {
    
      return true
    } else {
      
      return false
    }
  }

  function validate_mobile(mobile) {
    expression =  /(0|91)?[7-9][0-9]{9}/
    if (expression.test(mobile) == true) {
    
      return true
    } else {
      
      return false
    }
  }

  function sendVerification(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user!=null){


        var email = document.getElementById("email").value
          var user = firebase.auth().currentUser;
          document.getElementById("msg").innerHTML = "Verification mail is sent on  "+email;
          user.sendEmailVerification();
      
     
      
      }
    })
     



  }