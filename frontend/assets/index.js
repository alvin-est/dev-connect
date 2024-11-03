document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    const isDarkMode = body.classList.contains("dark-mode");
    this.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });
  
  document.getElementById("sign-up-button").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("button-container").classList.add("hidden");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("registration-form").classList.remove("hidden");
  });
  
  document.getElementById("login-button").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("button-container").classList.add("hidden");
    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
  });
  
  document.getElementById("close-registration").addEventListener("click", function () {
    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("button-container").classList.remove("hidden");
  });
  
  document.getElementById("close-login").addEventListener("click", function () {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("button-container").classList.remove("hidden");
  });
  