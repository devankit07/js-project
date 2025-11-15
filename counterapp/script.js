const dabba = document.querySelector(".box");
const incre = document.querySelector(".incr");
const decre = document.querySelector(".decr");
const pause = document.querySelector(".paus");
const reset = document.querySelector(".rese");

let counter = 0;
let ispaused = false;

incre.addEventListener("click", () => {
  if (ispaused) return;

  if (counter >= 40) {
    console.error("limit reached");
    return;
}
  counter++;
  dabba.innerHTML = counter;

});

decre.addEventListener("click", () => {
    if (ispaused) return;

  if (counter <= 0) {
    console.log("negative nahi");
    return;
  }

  counter--;

  dabba.innerHTML = counter;
});

reset.addEventListener("click", () => {
  dabba.innerHTML = 0;
});

pause.addEventListener("click", () => {
  ispaused = !ispaused;
  pause.innerHTML = ispaused ? "pause" : "stop";
  console.log("stopee");
});
