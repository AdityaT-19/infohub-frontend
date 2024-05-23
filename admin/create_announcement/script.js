function showAnnouncementForm() {
  var form = document.getElementById("announcementForm");
  form.style.display = "block";
}

function addAnnouncement() {
  var dept = document.getElementById("dept").value;
  var priority = document.getElementById("priority").value;
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var file = document.getElementById("file").files[0]; // Access the file object

  // Perform validation if needed

  // Create announcement object or perform any other operations

  // Reset form fields and hide the form
  document.getElementById("dept").value = "";
  document.getElementById("priority").value = "LOW"; // Reset priority to default
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("file").value = ""; // Reset file input
  var form = document.getElementById("announcementForm");
  form.style.display = "none";
}
