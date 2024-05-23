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
