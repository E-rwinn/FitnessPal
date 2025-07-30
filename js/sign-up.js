// Your Firebase config - replace if needed
const firebaseConfig = {
  apiKey: "AIzaSyAKsNqr-UAkwGh2H6uD_ZXfwjwCsinB6bg",
  authDomain: "fitnesspal-3c566.firebaseapp.com",
  projectId: "fitnesspal-3c566",
  storageBucket: "fitnesspal-3c566.appspot.com", // ✅ fixed here
  messagingSenderId: "860568935458",
  appId: "1:860568935458:web:1f695b4693270d5869be7b",
  measurementId: "G-DE14S51W80",
};
//TESTING THIS//
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Toggle password visibility
document.getElementById("showPass").addEventListener("change", function () {
  const passField = document.getElementById("password");
  passField.type = this.checked ? "text" : "password";
});

// Email/password signup handler
document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    await userCredential.user.updateProfile({ displayName: username });
    alert(`Account created! Welcome, ${username}`);
    // TODO: redirect to home page or update UI
  } catch (error) {
    alert(`Error: ${error.message}`);
    window.location.href = "/html/welcome.html"; // or dashboard.html
  }
});

// Google Sign-In callback for Google Identity Services
function handleCredentialResponse(response) {
  const id_token = response.credential;
  // Note: Usually you’d verify this token on your backend for security.
  // For demo, decode and extract info client-side:

  const userObject = JSON.parse(atob(id_token.split(".")[1]));
  const email = userObject.email;
  const username = userObject.name || email.split("@")[0];

  // Sign in or create Firebase user with Google credential
  const credential = firebase.auth.GoogleAuthProvider.credential(id_token);

  auth
    .signInWithCredential(credential)
    .then(() => {
      alert(`Signed in as ${username} (${email})`);
      // TODO: redirect to home page or update UI
    })
    .catch((error) => {
      alert(`Google sign-in failed: ${error.message}`);
    });
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "899373532299-dno9k1v6u83mn2ngmkh0dsgoc64g7vpg.apps.googleusercontent.com",
    callback: handleCredentialResponse,
    ux_mode: "popup", // popup so no redirect, optional
  });

  google.accounts.id.renderButton(document.getElementById("google-signin"), {
    theme: "outline",
    size: "large",
  });

  // Uncomment to show Google One-Tap prompt automatically:
  // google.accounts.id.prompt();
};
