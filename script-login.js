let container = document.getElementById("container");
let containerBox = document.getElementById("container-box");
let emailLogin = document.getElementById("inputEmailLogin")
let passwordLogin = document.getElementById("inputPasswordLogin")
let btnLogin = document.getElementById("button-login")
let massageLogin = document.getElementById("massage-login")

btnLogin.addEventListener("click",()=>{
fetch("https://655273ad5c69a779032a0b90.mockapi.io/Signup")

.then(res=>res.json())
.then(data=> {
    if(emailLogin.value === "" || passwordLogin.value === ""){
        massageLogin.innerHTML ="input is empty"
    }
    else if (emailLogin.value!=data.find(email.emailSignup)&&passwordLogin.value!=data.find(password.passwordSignup)){
        massageLogin.innerHTML="invalid email or password"
        
    }
    else {
        let userValid = localStorage.setItem("user",emailLogin.value)
        massageLogin.innerHTML=`Wellcom ${userValid}`
        window.location.href ="index.html"

    }
})
})
