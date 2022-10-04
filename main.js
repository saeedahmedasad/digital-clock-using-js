const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const container = document.querySelector(".container");
const clockStarted = function () {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h >= 12) {
    container.style.background =
      "linear-gradient(45deg, #16003b, #413f42, #7f8487)";
  } else {
    container.style.background =
      "linear-gradient(45deg, #87a2fb, #adddd0, #eeeeee);";
  }
  if (h > 12) {
    h = h - 12;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  hour.innerText = h;
  minute.innerText = m;
  seconds.innerText = s;
  setTimeout(() => {
    clockStarted();
  }, 1000);
};
clockStarted();
