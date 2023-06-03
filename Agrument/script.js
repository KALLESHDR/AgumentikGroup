document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform login check
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Replace the condition below with your actual login validation logic
  if (username === "admin" && password === "password") {
    // Redirect to admin dashboard
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform login check
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Replace the condition below with your actual login validation logic
  if (username === "admin" && password === "password") {
    // Redirect to admin dashboard
    window.location.href = "Admin_Login/18CS.HTML";
  } else {
    alert("Invalid username or password");
  }
});
