function onLoad(arg) {
  // Listen for Enter key on desktop
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
  });

  // Listen for any click/tap event for mobile users
  document.addEventListener("click", function() {
    toggleFullScreen();
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // Function to trigger fullscreen mode with cross-browser support
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

  // Update background color of the monitor element
  document.querySelector('#monitor').style.backgroundColor = "#161913";

  // Remove "nodisplay" class from any elements that have it
  const nodisplays = document.querySelectorAll('.nodisplay');
  nodisplays.forEach(nodisplay => nodisplay.classList.remove('nodisplay'));

  // Hide the enter-text and background-image elements
  document.querySelector('.enter-text').classList.add('nodisplay');
  document.querySelector('.background-image').classList.add('nodisplay');

  // Update the prompt key text with new values
  const promptKey = document.querySelector('.prompt-key');
  promptKey.innerHTML = "B C F E";
  promptKey.innerHTML += "\tB C E D";
  promptKey.innerHTML += "\tB C F E D C";
}
