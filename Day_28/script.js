const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.video-player');

let isDragging = false;

function handlePlaybackRate(e) {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  
  const min = 0.4;
  const max = 4.0;
  
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousedown', () => isDragging = true);
speed.addEventListener('mouseup', () => isDragging = false);
speed.addEventListener('mouseleave', () => isDragging = false);

speed.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  handlePlaybackRate(e);
});

speed.addEventListener('click', handlePlaybackRate);

speed.addEventListener('touchmove', (e) => {
  e.preventDefault();
  handlePlaybackRate(e.touches[0]);
}, { passive: false });