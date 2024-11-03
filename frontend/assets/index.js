// Toggle between light and dark mode
document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    // Toggle button text based on mode
    const isDarkMode = body.classList.contains("dark-mode");
    this.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });
  
  // Show registration form
  document.getElementById("sign-up-button").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("button-container").classList.add("hidden");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("registration-form").classList.remove("hidden");
  });
  
  // Show login form
  document.getElementById("login-button").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("button-container").classList.add("hidden");
    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
  });
  
  // Close forms when clicking outside
  document.addEventListener("click", function (e) {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");
  
    // Check if either form is visible and the click is outside of it
    if (
      !registrationForm.contains(e.target) &&
      !loginForm.contains(e.target) &&
      !document.getElementById("sign-up-button").contains(e.target) &&
      !document.getElementById("login-button").contains(e.target)
    ) {
      registrationForm.classList.add("hidden");
      loginForm.classList.add("hidden");
      document.getElementById("button-container").classList.remove("hidden");
    }
  });
  