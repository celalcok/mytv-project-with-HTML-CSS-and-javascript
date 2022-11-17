const overlay = document.getElementById("overlay");
const openClose = document.getElementById("openClose");
const muteToggle = document.getElementById("muteToggle");
const spans = document.querySelectorAll("span");
const receiverLed = document.getElementById("receiverLed");
const brand = document.getElementById("brand");
let isOpened = false;
var player;
var list="jS4aFq5-91M,w7ejDZ8SWv8";

overlay.classList.add("close");

// iFrame Api Codes
function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-placeholder", {
      videoId: "vAVpeiJ6tps",
      playerVars: {
        color: "white",
        playlist: list,
      },
   
    });
    
}

  // Add to spans event listener
spans.forEach((element) => {
  element.addEventListener("click", function () {
    switch (element.getAttribute("id")) {
      case "openClose":
        if (!isOpened) {
            player.playVideo();
            brand.classList.add("open");
            brand.classList.remove("close");
            overlay.classList.remove("close");
            receiverLed.classList.add("active")
            isOpened = true;
        } else {
          brand.classList.remove("open");
          brand.classList.add("close");
          overlay.classList.add("close");
          receiverLed.classList.remove("active");

          player.pauseVideo();
          isOpened = false;
        }
        break;
      case "prev":
        isOpened && player.previousVideo();
        break;
      case "next":
        isOpened && player.nextVideo();
        break;
      case "muteToggle":
        if (player.isMuted()) {
          player.unMute();
          muteToggle.innerHTML='<i  class="fa-solid fa-volume-xmark"></i>';
        } else {
          player.mute();
          muteToggle.innerHTML='<i class="fa-solid fa-volume-high"></i>';
        }
        break;
      default:
        break;
    }
  });
});



