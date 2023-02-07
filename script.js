document.getElementById("convert-button").addEventListener("click", function() {
    // Get the input file
    var inputFile = document.getElementById("input-file").files[0];
  
    // Check that a file was selected
    if (!inputFile) {
      alert("Please select a PNG file to convert.");
      return;
    }
  
    // Create a new FileReader object
    var reader = new FileReader();
  
    // Load the input file
    reader.readAsDataURL(inputFile);
  
    // Once the input file is loaded, convert it to JPG and display the result
    reader.onload = function() {
      // Create a new image object
      var image = new Image();
  
      // Set the source of the image to the data URL
      image.src = reader.result;
  
      // Once the image has loaded, create a new canvas and draw the image on it
      image.onload = function() {
        // Create a new canvas
        var canvas = document.createElement("canvas");
  
        // Set the dimensions of the canvas to match the dimensions of the image
        canvas.width = image.width;
        canvas.height = image.height;
  
        // Draw the image on the canvas
        canvas.getContext("2d").drawImage(image, 0, 0);
  
        // Convert the canvas to a JPG data URL
        var jpgDataURL = canvas.toDataURL("image/jpeg");
  
        // Display the JPG data URL in the output div
        document.getElementById("output").innerHTML = "<img src='" + jpgDataURL + "'><br><br><a download='converted.jpg' href='" + jpgDataURL + "'>Download JPG</a>";
      };
    };
  });
  