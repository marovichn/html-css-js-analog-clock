/* const min = document.querySelector(".center-nut");
const hours = document.querySelector(".center-nut2"); */
let m = -90;
let h = -90;

setInterval(function () {
  min.style.transform = `rotate(${m}deg) translate(75px)`;
  hours.style.transform = `rotate(${h}deg) translate(50px)`;
  if (m >= 360) {
    m = 0;
  } else {
    m = m + 6;
  }

  if (m % 60 === 0) {
    h = h + 4;
  }
}, 1000);
