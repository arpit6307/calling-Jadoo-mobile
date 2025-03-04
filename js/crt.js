function onLoad() {
  // Detect if the device is a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Force landscape orientation for mobile devices
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(function(error) {
        console.error("Error locking screen orientation:", error);
        // Handle the error if orientation lock fails (e.g., due to browser restrictions)
        alert("Screen orientation lock to landscape failed. Please manually rotate your device to landscape for the best experience.");
      });
    } else {
      console.warn("Screen orientation lock is not supported on this browser.");
      alert("Please rotate your device to landscape for the best experience.");
    }

    // For mobile, functionality will be triggered on any keydown event after connecting keyboard (or just pressing any key if keyboard detection is not reliably possible)
    document.addEventListener("keydown", function(e) {
      if (e.keyCode == 13) { // Enter key
        toggleFullScreen();
      }
    });
  } else {
    // For desktop/non-mobile devices, keep the original behavior - full screen on Enter key press
    document.addEventListener("keydown", function(e) {
      if (e.keyCode == 13) {
        toggleFullScreen();
      }
    });
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    function launchIntoFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    launchIntoFullscreen(document.documentElement);
  }
  document.querySelector('#monitor').style.backgroundColor="#161913";
  const nodisplays = document.querySelectorAll('.nodisplay');
  nodisplays.forEach(nodisplay => nodisplay.classList.remove('nodisplay'));

  document.querySelector('.enter-text').classList.add('nodisplay');
  document.querySelector('.background-image').classList.add('nodisplay');

  const promptKey = document.querySelector('.prompt-key');
  promptKey.innerHTML = "B C F E";
  promptKey.innerHTML += "\tB C E D";
  promptKey.innerHTML += "\tB C F E D C";
}

// Call onLoad when the body is loaded
document.addEventListener('DOMContentLoaded', onLoad);
