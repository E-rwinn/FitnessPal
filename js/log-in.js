// Toggle password visibility
document.getElementById("showPass").addEventListener("change", function () {
  const passField = document.getElementById("password");
  passField.type = this.checked ? "text" : "password";
});

// Email/password login handler (localStorage version)
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Simulate login logic (replace with real check if needed)
  if (email && password) {
    // Save email to localStorage (e.g., as a session token)
    localStorage.setItem("username", email);
    alert(`Welcome back, ${email}!`);
    window.location.href = "../html/home.html";
  } else {
    alert("Please enter both email and password.");
  }
});
