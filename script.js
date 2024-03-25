function submitLoginForm(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    displaySuccessMessage("Login successful! Redirecting...");
  }
}

function submitContactForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name && email && message) {
    displaySuccessMessage(
      `Thank you, ${name}! Your message has been sent successfully.`
    );
  }
}

function submitAppointmentForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var service = document.getElementById("service").value;

  if (name && email && phone && service) {
    displaySuccessMessage(
      `Thank you, ${name}! Your appointment for ${service} has been booked successfully.`
    );
  }
}

function submitRegisterForm(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (username && email && password) {
    displaySuccessMessage("Registration successful!");
  }
}

function displaySuccessMessage(message) {
  var successMessage = document.getElementById("successMessage");
  successMessage.innerHTML = message;
  successMessage.style.display = "block";
}
