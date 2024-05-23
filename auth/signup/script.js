// Check if user is already logged in
if (localStorage.getItem("isLoggedIn")) {
  // Redirect to login page
  window.location.href = "/auth/login/index.html";
}

// Add event listener for form submission
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation and signup logic here
    // For demonstration purposes, let's just set isLoggedIn to true
    localStorage.setItem("isLoggedIn", true);

    // Redirect to login page
    window.location.href = "/auth/login/index.html";
  });
function showTeacherForm() {
  document.getElementById("teacherForm").style.display = "block";
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("adminForm").style.display = "none";
  document.getElementById("clubForm").style.display = "none";
}

function showStudentForm() {
  document.getElementById("studentForm").style.display = "block";
  document.getElementById("teacherForm").style.display = "none";
  document.getElementById("adminForm").style.display = "none";
  document.getElementById("clubForm").style.display = "none";
}

function showAdminForm() {
  document.getElementById("adminForm").style.display = "block";
  document.getElementById("teacherForm").style.display = "none";
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("clubForm").style.display = "none";
}

function showClubForm() {
  document.getElementById("clubForm").style.display = "block";
  document.getElementById("teacherForm").style.display = "none";
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("adminForm").style.display = "none";
}
