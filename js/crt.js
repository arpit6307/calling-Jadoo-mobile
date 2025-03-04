function onLoad() {
  // Listen for Enter key on desktop
  document.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      toggleFullScreen();
    }
  });

  // Listen for click events (works on both desktop and mobile)
  document.addEventListener("click", function() {
    toggleFullScreen();
  });

  // Listen for touch events on mobile devices
  document.addEventListener("touchstart", function() {
    toggleFullScreen();
  });
}

function toggleFullScreen() {
  // If not already in fullscreen, request it with cross-browser support
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    launchIntoFullscreen(document.documentElement);
  }

  // Update background color of the monitor element
  const monitor = document.querySelector("#monitor");
  if (monitor) {
    monitor.style.backgroundColor = "#161913";
  }

  // Remove "nodisplay" class from all elements that have it
  const nodisplayElements = document.querySelectorAll(".nodisplay");
  nodisplayElements.forEach(el => el.classList.remove("nodisplay"));

  // Hide the enter-text and background-image elements
  const enterText = document.querySelector(".enter-text");
  if (enterText) {
    enterText.classList.add("nodisplay");
  }
  const bgImage = document.querySelector(".background-image");
  if (bgImage) {
    bgImage.classList.add("nodisplay");
  }

  // Update the prompt key text with new values
  const promptKey = document.querySelector(".prompt-key");
  if (promptKey) {
    promptKey.innerHTML = "B C F E";
    promptKey.innerHTML += "\tB C E D";
    promptKey.innerHTML += "\tB C F E D C";
  }
}

// Cross-browser function to request fullscreen mode
function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // IE/Edge
    element.msRequestFullscreen();
  }
}

// Initialize the event listeners on page load
window.addEventListener("load", onLoad);
