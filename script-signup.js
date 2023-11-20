let container = document.getElementById("container");
let containerBox = document.getElementById("container-box");
let usernameSignup = document.getElementById("inputUsernameSignup");
let emailSignup = document.getElementById("inputEmailSignup");
let passwordSignup = document.getElementById("inputPasswordSignup");
let confirmPasswordSignup = document.getElementById(
  "inputConfirmPasswordSignup"
);
let terms = document.getElementById("term");
let btnSignup = document.getElementById("button-signup");
let massageSignup = document.getElementById("massage-signup");

let usernameValid = /^[A-Za-z]*\w{4,14}$/;
let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordValid = /^[A-Za-z]\w{5,14}$/;

btnSignup.addEventListener("click", () => {
  if (
    usernameSignup.value === "" ||
    emailSignup.value === "" ||
    passwordSignup.value === "" ||
    confirmPasswordSignup.value === ""
  ) {
    massageSignup.textContent = "input is empty";
  } else if (passwordSignup.value !== confirmPasswordSignup.value) {
    massageSignup.innerHTML = "Password not match";
  } else if (!usernameSignup.value.match(usernameValid)) {
    massageSignup.innerHTML = "Invalid Username";
  } else if (!emailSignup.value.match(emailValid)) {
    massageSignup.innerHTML = "Invalid Email";
  } else if (!passwordSignup.value.match(passwordValid)) {
    massageSignup.innerHTML = "Invalid Paassword";
  } else if (!terms.checked) {
    massageSignup.innerHTML = "Please agree the terms";
  } else {
    fetch("https://655273ad5c69a779032a0b90.mockapi.io/Signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameSignup.value,
        email: emailSignup.value,
        password: passwordSignup.value,
      }),
    });
    
  }

});


