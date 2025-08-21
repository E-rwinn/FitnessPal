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

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent page reload

      const usernameInput = document.getElementById('login-username');
      const username = usernameInput.value.trim();

      if (username) {
        // Save the username to localStorage
        localStorage.setItem('username', username);

        // Redirect to home page
        window.location.href = 'home.html';
      } else {
        alert("Please enter a username");
      }
    });
  }
});
