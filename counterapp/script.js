const dabba = document.querySelector(".box");
const incre = document.querySelector(".incr");
const decre = document.querySelector(".decr");
const pause = document.querySelector(".paus");
const reset = document.querySelector(".rese");
const star = document.querySelector(".sta");

let counter = 0;
let ispaused = false;
let timer = null;


function updateUI() {
  dabba.innerHTML = counter;
}


incre.addEventListener("click", () => {
  if (ispaused) return;
  if (counter >= 50) return; 
  counter++;
  updateUI();
});


decre.addEventListener("click", () => {
  if (ispaused) return;
  if (counter <= 0) return;
  counter--;
  updateUI();
});


reset.addEventListener("click", () => {
  counter = 0;
  updateUI();
});


pause.addEventListener("click", () => {
  if (!timer) return; 
  ispaused = !ispaused;
  pause.innerHTML = ispaused ? "Resume" : "Pause";
});

star.addEventListener("click", () => {
  if (timer) return; 

  timer = setInterval(() => {
    if (!ispaused && counter < 50) {
      counter++;
      updateUI();
    }
  }, 1000);
});

