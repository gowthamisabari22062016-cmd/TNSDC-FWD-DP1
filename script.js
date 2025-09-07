document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email.includes("@")) {
    document.getElementById("message").textContent = "Form submitted successfully!";
  } else {
    document.getElementById("message").textContent = "Please enter valid details.";
  }
});
