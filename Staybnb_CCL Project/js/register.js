document.getElementById("registerForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

window.onload=function(){
  document.getElementById("signin").style.display='none';

}




async function signUp(){
 
    // var firebaseRef = firebase.database().ref("users");
    //fullname = document.getElementById("fullname").value
    email = document.getElementById("email").value
   // mobile = document.getElementById("mobile").value
    password = document.getElementById("password").value
   
    //firebaseRef.push(email);

    // if(validate_name(fullname) == false) {
    //   document.getElementById("error").innerHTML = "Please enter a valid name"
    //   document.getElementById("fullname").focus();
    //   return
    // }

    // if(validate_mobile(mobile) == false){
    //   document.getElementById("error").innerHTML = "Please enter a valid number"
    //   document.getElementById("mobile").focus();
    //   return
    // }

    if (validate_email(email) == false) {
      document.getElementById("error").innerHTML = "Please enter a valid email."
      document.getElementById("email").focus();
      return
      // Don't continue running the code
    }
    
    if (validate_password(password) == false) {
      document.getElementById("error").innerHTML = "Password should be more than 6 characters."
      document.getElementById("password").focus();
      return
      
    }

    if(validate_bothpassword() == false){
      document.getElementById("error").innerHTML = "Passwords don't match!"
      document.getElementById("repassword").focus();
      return
    }

  
    // var promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    // promise.then(function(user) {// You are forgetting this reference.
    //   user.sendEmailVerification();
    //   // You can also call this.
    //   firebase.auth().currentUser.sendEmailVerification();
    //   // Email sent.
    // }, function(error) {
    //   // An error happened.
    // })

    firebase.auth().createUserWithEmailAndPassword(email, password);
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
    document.getElementById("signin").style.opacity= 1;
    document.getElementById("termslink").style.display = "none";
    document.getElementById("success").innerHTML = "Account created! Please proceed"
    document.getElementById("error").innerHTML = null;



    
    
          
      
  
    
    // location.replace("register2.html")
       
//     firebase.auth().signInWithEmailAndPassword(email, password);
//     const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
 
//     const uid = user.uid;
 
//   } else {
//    alert("error")
//   }
// });
//    console.log(uid)

   
    //firebase.auth().currentUser.sendEmailVerification()
 

    
    // const res = await fetch(
    //   "https://house-rental-843f2-default-rtdb.asia-southeast1.firebasedatabase.app/house-rental.json",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       uid,
    //       fullname,
    //       mobile,
    //       email,
    //     })
    //   }
    // )
    // if(res) {
    //   alert('Registration complete! Please verify mail to continue!')
    //   location.replace("login.html")
    // } else {
    //   alert("Registration failed. Please try again!")
    // }
  }

  function redirect(){
   
        location.replace("../html/register2.html")
      

    
  }

 

  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    expression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (expression.test(password) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }

  // function validate_name(fullname) {
  //   expression =  /^[a-zA-Z]+ [a-zA-Z]+$/
  //   if (expression.test(fullname) == true) {
    
  //     return true
  //   } else {
      
  //     return false
  //   }
  // }

  // function validate_mobile(mobile) {
  //   expression =  /(0|91)?[7-9][0-9]{9}/
  //   if (expression.test(mobile) == true) {
    
  //     return true
  //   } else {
      
  //     return false
  //   }
  // }

  function validate_bothpassword() {
    repassword = document.getElementById("repassword").value
    password = document.getElementById("password").value
    if (password == repassword) {
    
      return true
    } else {
      
      return false
    }
  }


  function disableFunction(){
    if(document.getElementById("flexCheckDefault").checked){
      document.getElementById("signup").style.opacity= 1;
      document.getElementById("signup").disabled= false;

    }

    else{
      document.getElementById("signup").style.opacity= 0.4;
      document.getElementById("signup").disabled= true;
     
    }
   
  }
