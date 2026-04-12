const arrow = document.querySelector('.arrow');
const speedValue = document.querySelector('.speed-value');

function updatePosition(data) {
  const speed = data.coords.speed;
  const heading = data.coords.heading;

  if (speed !== null) {
    const kmh = Math.round(speed * 3.6);
    speedValue.textContent = kmh;
  }

  if (heading !== null) {
    arrow.style.transform = `rotate(${heading}deg)`;
  }
}

function handleError(err) {
  alert('You must allow location access for the speedometer to work.');
}

navigator.geolocation.watchPosition(updatePosition, handleError, {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000
});