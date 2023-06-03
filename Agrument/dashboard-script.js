document.addEventListener("DOMContentLoaded", function() {
    // Load saved photos on page load
    loadSavedPhotos();
  });
  
  document.getElementById("photoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Handle photo upload
    var photoInput = document.getElementById("photo");
    var file = photoInput.files[0];
  
    // You can handle the file upload using AJAX or send it to a backend server
  
    // Display the photo preview
    var photoPreview = document.getElementById("photoPreview");
    photoPreview.innerHTML = "";
    var img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = "300px";
    photoPreview.appendChild(img);
  
    // Save the photo URL to the server (assuming the server returns the saved photo URL)
    var savedPhotoUrl = "http://example.com/saved-photo.jpg"; // Replace with actual saved photo URL
  
    // Append the saved photo to the gallery
    appendToGallery(savedPhotoUrl);
  });
  
  document.getElementById("changePhotoButton").addEventListener("click", function() {
    var photoInput = document.getElementById("photo");
    photoInput.value = ""; // Clear the photo input field
    var photoPreview = document.getElementById("photoPreview");
    photoPreview.innerHTML = ""; // Clear the photo preview
  });
  
  document.getElementById("saveToFileButton").addEventListener("click", function() {
    var photoInput = document.getElementById("photo");
    var file = photoInput.files[0];
  
    if (file) {
      saveAs(file, "saved-photo.jpg");
    } else {
      alert("No photo available to save.");
    }
  });
  
  function saveAs(blob, fileName) {
    if (window.navigator.msSaveOrOpenBlob) {
      // For IE/Edge browser
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      // For other browsers
      var link = document.createElement("a");
      var url = URL.createObjectURL(blob);
  
      link.href = url;
      link.download = fileName;
      link.click();
  
      // Cleanup
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 100);
    }
  }
  
  function loadSavedPhotos() {
    // Call the backend API to retrieve saved photo URLs
    // Replace the URL with your actual API endpoint
    fetch("http://example.com/api/saved-photos")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Iterate through the saved photo URLs and append them to the gallery
        data.forEach(function(photoUrl) {
          appendToGallery(photoUrl);
        });
      })
      .catch(function(error) {
        console.log("Error loading saved photos:", error);
      });
  }
  
  function appendToGallery(photoUrl) {
    var gallery = document.getElementById("photoGallery");
    var img = document.createElement("img");
    img.src = photoUrl;
    img.style.maxWidth = "200px";
    gallery.appendChild(img);
  }
  