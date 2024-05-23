function showContent(contentType) {
    const announcementContainer = document.querySelector('.announcement-container');
    const eventContainer = document.querySelector('.event-container');
  
    if (contentType === 'all') {
      announcementContainer.style.display = 'block';
      eventContainer.style.display = 'block';
    } else if (contentType === 'announcement') {
      announcementContainer.style.display = 'block';
      eventContainer.style.display = 'none';
    } else if (contentType === 'event') {
      announcementContainer.style.display = 'none';
      eventContainer.style.display = 'block';
    }
  }
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  button.classList.add('button-animated');
});
button.addEventListener('click', () => {
    button.classList.add('button-animated');
    button.addEventListener('animationend', () => {
      button.classList.remove('button-animated');
    }, { once: true });
  });