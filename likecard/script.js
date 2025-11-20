const post = document.querySelector(".post");
const love = document.querySelector("#heart");
const like = document.querySelector("#like");

post.addEventListener("dblclick", () => {
  love.style.opacity = 1;
  love.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  console.log('double')

  setTimeout(function () {
    love.style.transform = "translate(-50%, -300%) scale(1) rotate(50deg)";
  }, 200);
  setTimeout(function () {
    love.style.opacity = 0;
  }, 500);
  like.style.color = "red";
  setTimeout(function () {
    love.style.transform = "translate(-50%, 50%) scale(0) rotate(-50deg)";
  }, 1000);

  post.addEventListener("click", () => {
    like.style.color = "#555";
    console.log('single click')
  });
});
