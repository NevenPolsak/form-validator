//1) FORM VARIABLE 1-1
const form = document.querySelector("#form");
//4)MESSAGE VARIABLE 4-1
const message = document.querySelector("#message");
//5)PASSWORD1 VARIABLE 5-1
const password1 = document.querySelector("#password1");
//6)PASSWORD2 VARIABLE 6-1
const password2 = document.querySelector("#password2");

//3-2
let isValid = false;
//4-3
let passwordMatch = false;

//3)VALIDATE FORM FUNCTION 3-1
function validateForm() {
  //3-3
  isValid = form.checkValidity();
  console.log(isValid);
  //4-2
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
  } else {
    //4-4
    if (password1.value === password2.value) {
      passwordMatch = true;

      password1.style.borderColor = "green";
      password2.style.borderColor = "green";
    } else {
      passwordMatch = false;
      message.textContent = "Make Sure Password Match";
      message.style.color = "red";

      password1.style.borderColor = "red";
      password2.style.borderColor = "red";
      return;
    }

    //7-1
    if (isValid && passwordMatch) {
      message.textContent = "Register Successfully";
      message.style.color = "green";
    }
  }
}

//2)FORM ADD EVENT 2-1
form.addEventListener("submit", (e) => {
  //2-2
  e.preventDefault();
  //3-1
  validateForm();
});

//password
//Kevin69@
