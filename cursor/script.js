const main = document.querySelector('#main');
const cursor = document.querySelector('.cursor');
const text  = document.querySelector('.text');

let zoom = 0;


main.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.pageX + 'px';
    cursor.style.top = dets.pageY + 'px';
});

text.addEventListener("mouseenter", () => {
    zoom = !zoom;   // toggle 0 → 1 → 0 → 1 ...

    if (zoom) {
        text.textContent = "Boom!!!";
        text.style.color = "wheat";
    } else {
        text.textContent = "ITS , MAGIC";
        text.style.color = "white";
    }
});
