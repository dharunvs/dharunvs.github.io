var state = false;
function inputChangeName() {
  var name = document.getElementById("name");
  var nameErrorElement = document.getElementById("name-error");

  var nameError = "";

  if (name.value.trim() == "") {
    nameError = "Required";
  } else if (name.value.length < 4) {
    nameError = "Name must atleast be 4 letters";
  } else {
    nameError = "";
  }

  nameErrorElement.innerText = nameError;

  if (nameError == "") {
    state = true;
  }
}

function inputChangeEmail() {
  var email = document.getElementById("email");
  var emailErrorElement = document.getElementById("email-error");

  var emailError = "";

  if (email.value.trim() == "") {
    emailError = "Required";
  } else {
    emailError = "";
  }

  emailErrorElement.innerText = emailError;
}

function inputChangeMessage() {
  var message = document.getElementById("message");
  var messageErrorElement = document.getElementById("message-error");

  var messageError = "";

  if (message.value.trim() == "") {
    messageError = "Required";
  } else {
    messageError = "";
  }

  messageErrorElement.innerText = messageError;
}

function submit() {
  console.log("Submitting....");
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});
