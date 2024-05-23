// Assuming you have an array of announcements
let announcements = [];

// Function to add an announcement
function addAnnouncement() {
  const dept = document.getElementById('dept').value;
  const priority = document.getElementById('priority').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const file = document.getElementById('file').files[0];

  const announcement = {
    dept,
    priority,
    title,
    description,
    file
  };

  announcements.push(announcement);
  document.getElementById('announcementForm').style.display = 'none';
  displayAnnouncements();
}

// Function to display announcements
function displayAnnouncements() {
  const announcementList = document.getElementById('announcementList');
  announcementList.innerHTML = '';

  announcements.forEach(announcement => {
    const announcementElement = document.createElement('div');
    announcementElement.classList.add('announcement');

    const priorityElement = document.createElement('p');
    priorityElement.textContent = `Priority: ${announcement.priority}`;

    const titleElement = document.createElement('h3');
    titleElement.textContent = announcement.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = announcement.description;

    const fileElement = document.createElement('img');
    fileElement.src = URL.createObjectURL(announcement.file);
    fileElement.alt = 'Announcement Image';

    announcementElement.appendChild(priorityElement);
    announcementElement.appendChild(titleElement);
    announcementElement.appendChild(descriptionElement);
    announcementElement.appendChild(fileElement);

    announcementList.appendChild(announcementElement);
  });
}