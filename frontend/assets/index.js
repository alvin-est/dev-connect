document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    // Toggle button text based on mode
    const isDarkMode = body.classList.contains("dark-mode");
    this.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
  });
  