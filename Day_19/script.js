const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const captureBtn = document.querySelector('#capture');
const effectSelect = document.querySelector('#effect');


async function getVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });
    video.srcObject = stream;
    video.play();
  } catch (err) {
    alert("Camera access denied or not available");
    console.error(err);
  }
}


function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  function draw() {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);

    
    const effect = effectSelect.value;

    if (effect === 'red') pixels = redEffect(pixels);
    if (effect === 'rgb') pixels = rgbSplit(pixels);
    if (effect === 'green') pixels = greenScreen(pixels);
    if (effect === 'gray') pixels = grayscale(pixels);

    ctx.putImageData(pixels, 0, 0);

    requestAnimationFrame(draw);
  }

  draw();
}


function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');

  link.href = data;
  link.setAttribute('download', `photo-${Date.now()}.jpg`);
  link.innerHTML = `<img src="${data}" alt="Snapshot" />`;

  strip.insertBefore(link, strip.firstChild);
}


function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] += 100;     
    pixels.data[i + 1] -= 50;  
    pixels.data[i + 2] *= 0.5; 
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i];     // red
    pixels.data[i + 100] = pixels.data[i + 1]; // green
    pixels.data[i - 100] = pixels.data[i + 2]; // blue 
  }
  return pixels;
}

function grayscale(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    const avg = (pixels.data[i] + pixels.data[i+1] + pixels.data[i+2]) / 3;
    pixels.data[i] = avg;
    pixels.data[i+1] = avg;
    pixels.data[i+2] = avg;
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i += 4) {
    const red = pixels.data[i];
    const green = pixels.data[i + 1];
    const blue = pixels.data[i + 2];

    if (
      red >= levels.rmin && red <= levels.rmax &&
      green >= levels.gmin && green <= levels.gmax &&
      blue >= levels.bmin && blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0; // transparent
    }
  }
  return pixels;
}


getVideo();
video.addEventListener('canplay', paintToCanvas);
captureBtn.addEventListener('click', takePhoto);