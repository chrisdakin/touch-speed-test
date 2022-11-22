const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight - 100}px`);
  doc.style.setProperty("--doc-width", `${window.innerWidth - 25}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});

document.addEventListener("gesturechange", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});

document.addEventListener("gestureend", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});

const button = document.getElementById("button");
const reset = document.getElementById("reset");

const timer = document.getElementById("timer");
timer.innerHTML = "5.00";

let time = 500;
let clicked = 0;
let interval;

button.addEventListener("click", () => {
  if (time === 500) {
    button.innerHTML = 1;
    clicked = 1;
    interval = setInterval(() => {
      if (time <= 0) {
        button.innerHTML = "Total: " + clicked;
        timer.innerHTML = "0.00";
        clearInterval(interval);
      } else {
        time = time - 1;
        let updatedTimer = time.toString();
        updatedTimer = (time / 100).toFixed(2);
        timer.innerHTML = updatedTimer;
        console.log(time);
      }
    }, 10);
  } else if (time > 0) {
    clicked++;
    button.innerHTML = clicked;
  }
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  time = 500;
  clicked = 0;
  button.innerHTML = "Start";
  timer.innerHTML = "5.00";
});
