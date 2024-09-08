// Input Styles
const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

// Feedback Message
function displayFeedback(message, type, formType) {
  const feedbackElement =
    formType === "signup"
      ? document.getElementById("signupFeedback")
      : document.getElementById("loginFeedback");

  feedbackElement.className = `feedback-message ${type}`;
  feedbackElement.textContent = message;
  feedbackElement.style.display = "block";

  setTimeout(() => {
    feedbackElement.style.display = "none";
  }, 3000);
}

// Sign Up Validation
function validateSignup() {
  const SignupstudentName = document.getElementById("SignupstudentName").value;
  const SignupstudentID = document.getElementById("SignupstudentID").value;

  const nameRegex = /^[A-Za-z\s]+$/;
  const idRegex = /^\d+$/;

  if (SignupstudentName === "" || SignupstudentID === "") {
    displayFeedback("Please fill in all fields", "error", "signup");
  } else if (!nameRegex.test(SignupstudentName)) {
    displayFeedback("Name should only contain letters", "error", "signup");
  } else if (!idRegex.test(SignupstudentID)) {
    displayFeedback("ID should only contain numbers", "error", "signup");
  } else {
    localStorage.setItem("studentName", SignupstudentName);
    localStorage.setItem("studentID", SignupstudentID);

    displayFeedback(
      "Signup successful! Redirecting to login page...",
      "success",
      "signup"
    );
    setTimeout(() => {
      showLoginForm();
    }, 1500);
  }
}

// Login Validation
function validateLogin() {
  const loginStudentName = document.getElementById("loginStudentName").value;
  const loginStudentID = document.getElementById("loginStudentID").value;

  const nameRegex = /^[A-Za-z\s]+$/;
  const idRegex = /^\d+$/;

  const registeredStudentName = localStorage.getItem("studentName");
  const registeredStudentID = localStorage.getItem("studentID");

  if (loginStudentName === "" || loginStudentID === "") {
    displayFeedback("Please fill in all fields", "error", "login");
  } else if (!nameRegex.test(loginStudentName)) {
    displayFeedback("Name should only contain letters", "error", "login");
  } else if (!idRegex.test(loginStudentID)) {
    displayFeedback("ID should only contain numbers", "error", "login");
  } else if (
    loginStudentName === registeredStudentName &&
    loginStudentID === registeredStudentID
  ) {
    displayFeedback(
      "Login successful! Redirecting to welcome page...",
      "success",
      "login"
    );
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 1500);
  } else {
    displayFeedback(
      "Invalid login details. Please try again.",
      "error",
      "login"
    );
  }
}

// Login Animation
function showLoginForm() {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  signupForm.classList.remove("slide-in-right");
  signupForm.classList.add("slide-out-left");

  loginForm.classList.remove("slide-out-right");
  loginForm.classList.add("slide-in-right");
  loginForm.classList.add("active");
}

// Sign Up Animation
function showSignupForm() {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  loginForm.classList.remove("slide-in-right");
  loginForm.classList.add("slide-out-right");

  signupForm.classList.remove("slide-out-left");
  signupForm.classList.add("slide-in-left");
  signupForm.classList.add("active");
}