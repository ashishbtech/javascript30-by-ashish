function playSound(key) {

  let sound = document.querySelector("audio[data-key='" + key + "']");
  let button = document.querySelector(".btn[data-key='" + key + "']");

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  if (button) {
    button.classList.add("active");

    setTimeout(function() {
      button.classList.remove("active");
    }, 100);
  }
}


document.addEventListener("keydown", function(event) {
  playSound(event.keyCode);
});


let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    let key = this.getAttribute("data-key");
    playSound(key);
  });
});