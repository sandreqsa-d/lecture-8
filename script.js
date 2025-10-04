

const form = document.querySelector("#form");
const nameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");

const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passError");
const confirmPasswordError = document.querySelector(".confError");

const namePattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/
const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/
const HardPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){8,}/


form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    let valid = true;

    if(!namePattern.test(nameInput.value)){
        nameError.textContent = "Name is not valid";
        nameError.style.color = "red";
        valid = false; 
    } else { nameError.textContent = ""; }

    if(!emailPattern.test(emailInput.value)){
        emailError.textContent = "Email is not valid";
        emailError.style.color = "red";
        valid = false;
    } else { emailError.textContent = ""; }

    if(!HardPasswordPattern.test(passwordInput.value)){
        passwordError.textContent = "Password is not valid";
        passwordError.style.color = "red";
        valid = false;
    } else { passwordError.textContent = ""; }

    if(passwordInput.value !== confirmPasswordInput.value){
        confirmPasswordError.textContent = "Passwords don't match";
        confirmPasswordError.style.color = "red";
        valid = false;
    } else { confirmPasswordError.textContent = ""; }

    if(valid){
        window.location.href = "figmasi.html";
    }
});





