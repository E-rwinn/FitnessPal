function handleDeleteAccount() {
  const confirmDelete = confirm(
    "Are you sure you want to delete your account?"
  );
  if (!confirmDelete) return;

  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("profileImage");

  window.location.href = "../index.html";
}
//UP THERE IS FOR DELTEING ACCOUNT//
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
//UP THERE IS FOR THE BUG SECTION//
function toggleDropdown(headerEl) {
  const box = headerEl.closest(".dropdown-box");
  box.classList.toggle("open");
}

const username = localStorage.getItem("loggedInUser");
if (username) {
  document.getElementById("account-username").textContent = username;
}
