// Set constraints for the video stream
var constraints = { video: true, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    // track.stop();
};
screen.lockOrientation('landscape');
// Start the video stream when the window loads
<<<<<<< HEAD
=======
screen.lockOrientation('landscape');
>>>>>>> 41cd522d69b5115c78ad98328b342cf87b2a2ae7
window.addEventListener("load", cameraStart, false);
screen.addEventListener("orientationchange", function () {
    console.log("The orientation of the screen is: " + screen.orientation);
  });
<<<<<<< HEAD
  
   
  
=======
>>>>>>> 41cd522d69b5115c78ad98328b342cf87b2a2ae7
