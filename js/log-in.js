document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const showPassCheckbox = document.getElementById("showPass");
  const passwordField = document.getElementById("password");

  // Show/hide password
  if (showPassCheckbox && passwordField) {
    showPassCheckbox.addEventListener("change", function () {
      passwordField.type = this.checked ? "text" : "password";
    });
  }

  // Handle login form submit
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;

      // Save to localStorage
      localStorage.setItem("username", username);

      // Redirect to home page
      window.location.href = "home.html";
    });
  }
});
