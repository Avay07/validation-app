// Defining The UI Elements
const form = document.getElementById("form");
const clientName = document.getElementById("username");
const emailAddress = document.getElementById("email");
const phoneNum = document.getElementById("phnnumber");
const postCode = document.getElementById("postcode");

//Event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkForm();
});

// Check Validation

function checkForm() {
  let userName = clientName.value.trim();
  email = emailAddress.value.trim();
  phone = phoneNum.value.trim();
  pCode = postCode.value.trim();

  if (userName === "") {
    errorFor(clientName, "Username cannot be empty");
  } else {
    successFor(clientName);
  }
  if (email === "") {
    errorFor(emailAddress, "Email cannot be empty");
  } else if (!isEmail(email)) {
    errorFor(emailAddress, "Invalid email");
  } else {
    successFor(emailAddress);
  }
  if (phone === "") {
    errorFor(phoneNum, "Phone number cannot be empty");
  } else if (!isNum(phone)) {
    errorFor(phoneNum, "Invalid number");
  } else {
    successFor(phoneNum);
  }
  if (pCode === "") {
    errorFor(postCode, "Post Code cannot be empty");
  } else if (!isCode(pCode)) {
    errorFor(postCode, "Invalid Post Code");
  } else {
    successFor(postCode);
  }
}

function isEmail(emailAddress) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailAddress
  );
}

function isNum(phoneNum) {
  return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(phoneNum);
}

function isCode(postCode) {
  return /^\d{4}$/.test(postCode);
}

function errorFor(input, message) {
  const formControl = input.parentElement;
  const msg = formControl.querySelector("small");
  // console.log(msg);
  formControl.className = "form-control error";
  msg.innerText = message;
}

function successFor(input) {
  const formControl = input.parentElement;
  const msg = formControl.querySelector("small");
  // console.log(msg);
  formControl.className = "form-control";
  msg.innerText = "";
}
