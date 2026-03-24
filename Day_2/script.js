const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

function setTime() {
  const now = new Date();

  const s = now.getSeconds();
  const sDeg = (s / 60) * 360 + 90;
  second.style.transform = `rotate(${sDeg}deg)`;

  const m = now.getMinutes();
  const mDeg = (m / 60) * 360 + 90;
  minute.style.transform = `rotate(${mDeg}deg)`;

  const h = now.getHours();
  const hDeg = (h / 12) * 360 + 90;
  hour.style.transform = `rotate(${hDeg}deg)`;
}

setInterval(setTime, 1000);