const main = document.querySelector("main");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  for (let i = 0; i < 15; i++) createBox();
});

function createBox() {
  const box = document.createElement("div");
  const size = Math.random() * 120 + 40;
  const r = Math.random() * 256;
  const g = Math.random() * 256;
  const b = Math.random() * 256;

  box.style.height = `${size}px`;
  box.style.width = `${size}px`;
  box.style.backgroundColor = `rgb(${r},${g},${b})`;
  box.style.borderRadius = Math.random() > 0.5 ? "0" : "50%";
  box.style.position = "absolute";
  box.style.top = `${Math.random() * (window.innerHeight - size)}px`;
  box.style.left = `${Math.random() * (window.innerWidth - size)}px`;
  box.style.transform = `rotate(${Math.random() * 360}deg)`;
  box.style.transition = "0.8s ease";
  box.style.animation = "float 3s ease-in-out infinite";

  main.appendChild(box);

  setTimeout(() => {
    box.style.top = `${Math.random() * (window.innerHeight - size)}px`;
    box.style.left = `${Math.random() * (window.innerWidth - size)}px`;
  }, 50);
}
