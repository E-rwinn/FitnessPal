// --- Load username from localStorage ---
const accountUsernameEl = document.getElementById("account-username");
let username = localStorage.getItem("username") || "Guest";
accountUsernameEl.textContent = username;

// --- Change username ---
function changeUsername() {
  const newUsername = prompt("Enter your new username:", username);
  if (newUsername && newUsername.trim() !== "") {
    username = newUsername.trim();
    localStorage.setItem("username", username);
    accountUsernameEl.textContent = username;
    updateHomeUsername();
  }
}

// --- Update username on Home page ---
function updateHomeUsername() {
  const homeUsernameEl = window.opener?.document.getElementById("home-username");
  if (homeUsernameEl) {
    homeUsernameEl.textContent = username;
  }
}

// --- Account username click event ---
accountUsernameEl.addEventListener("click", changeUsername);

// --- Dropdown toggle logic ---
document.querySelectorAll(".dropdown-header").forEach(header => {
  header.addEventListener("click", () => {
    const box = header.parentElement;
    box.classList.toggle("open");
  });
});

// --- Handle Logout ---
function handleLogout() {
  alert("Logged out!");
  // Add your logout logic here
}

// --- Handle Delete Account ---
function handleDeleteAccount() {
  if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
    localStorage.clear();
    alert("Account deleted!");
    window.location.href = "/html/home.html";
  }
}

// --- Submit Bug Report ---
function submitBugReport() {
  const textarea = document.getElementById("bug-description");
  const message = document.getElementById("bug-report-message");

  const bugText = textarea.value.trim();
  if (bugText === "") {
    alert("Please describe the bug before submitting.");
    return;
  }

  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
    textarea.value = "";
  }, 3000);
}

// --- Submit Feedback ---
function submitFeedback() {
  const textarea = document.getElementById("feedback-text");
  const message = document.getElementById("feedback-message");

  const feedbackText = textarea.value.trim();
  if (feedbackText === "") return;

  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
    textarea.value = "";
  }, 3000);
}
