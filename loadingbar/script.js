//1st circular progress bar
const btn = document.querySelector("button");
const numb = document.getElementById("numb");
const outer = document.querySelector(".outer");

btn.addEventListener("click", function () {
  let value = 0;
  btn.textContent = "Downloading...";
  btn.disabled = true;

  let processing = setInterval(() => {
    if (value >= 100) {
      clearInterval(processing);
      btn.textContent = "Downloaded";
      btn.disabled = true;
      return;
    }

    value++;
    numb.textContent = `${value}%`;
    outer.style.background = `conic-gradient(#0ddc2cff ${
      value * 3.6
    }deg, #0d0e0fff ${value * 3.6}deg)`;
  }, 100);
});

//2nd circular progress bar

const btn1 = document.querySelector(".circle1 button");
const numb1 = document.getElementById("numb1");
const progress1 = document.querySelector(".progress1");

btn1.addEventListener("click", function () {
  let value1 = 0;
  btn1.textContent = "Downloading...";
  btn1.disabled = true;

  let interval = setInterval(() => {
    if (value1 >= 100) {
      clearInterval(interval);
      btn1.textContent = "Downloaded";
    } else {
      value1++;
      numb1.textContent = `${value1}%`;
      progress1.style.transform = `rotate(${value1 * 3.6}deg)`;
    }
  }, 50);
});
