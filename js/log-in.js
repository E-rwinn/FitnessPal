function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;

  // Save username to localStorage
  localStorage.setItem("username", username);

  // Redirect to homepage
  window.location.href = "home.html";
}
