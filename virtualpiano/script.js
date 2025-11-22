const img = document.querySelector("#image");
const info = document.querySelector(".info-box span");
const keys = document.querySelectorAll("h2");

const sounds = {
  KeyA: "./Sounds/sound1.mp3",
  KeyB: "./Sounds/sound2.mp3",
  KeyC: "./Sounds/sound3.mp3",
  KeyD: "./Sounds/sound4.mp3",
  KeyE: "./Sounds/sound5.mp3",
  KeyF: "./Sounds/sound6.mp3",
  KeyG: "./Sounds/sound7.mp3",
  KeyH: "./Sounds/sound8.mp3",
  KeyI: "./Sounds/sound9.mp3",
  KeyJ: "./Sounds/sound0.mp3",
  KeyK: "./Sounds/sound1.mp3",
  KeyL: "./Sounds/sound2.mp3",
  KeyM: "./Sounds/sound3.mp3",
  KeyN: "./Sounds/sound4.mp3",
  KeyO: "./Sounds/sound5.mp3",
  KeyP: "./Sounds/sound6.mp3",
  KeyQ: "./Sounds/sound7.mp3",
  KeyR: "./Sounds/sound8.mp3",
  KeyS: "./Sounds/sound9.mp3",
  KeyT: "./Sounds/sound0.mp3",
  KeyU: "./Sounds/sound1.mp3",
  KeyV: "./Sounds/sound2.mp3",
  KeyW: "./Sounds/sound3.mp3",
  KeyX: "./Sounds/sound4.mp3",
  KeyY: "./Sounds/sound5.mp3",
  KeyZ: "./Sounds/sound6.mp3",
};

document.body.addEventListener("mousemove", function (dets) {
  img.style.top = dets.y + "px";
  img.style.left = dets.x + "px";
});

document.body.addEventListener("keydown", function (dets) {
  info.innerHTML = dets.code;

  if (sounds[dets.code]) {
    let aud = new Audio(sounds[dets.code]);
    aud.play();
  }

  const keyElement = Array.from(keys).find((k) => k.dataset.key === dets.code);
  if (keyElement) {
    keyElement.classList.add("playing");
    setTimeout(() => {
      keyElement.classList.remove("playing");
    }, 150);
  }
});
