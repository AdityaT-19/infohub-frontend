document.addEventListener("DOMContentLoaded", function () {
  const eventForm = document.getElementById("event-form");

  eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(eventForm);

    // Convert FormData to JSON object
    const eventData = {};
    formData.forEach((value, key) => {
      eventData[key] = value;
    });

    // Display the created event (you can send this data to the server instead)
    console.log(eventData);

    // You can send the eventData to the server using fetch or XMLHttpRequest
    // Example:
    // fetch('your-api-url', {
    //   method: 'POST',
    //   body: JSON.stringify(eventData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => {
    //   if (response.ok) {
    //     // Event created successfully
    //   } else {
    //     // Error handling
    //   }
    // }).catch(error => {
    //   // Error handling
    // });
  });
});
