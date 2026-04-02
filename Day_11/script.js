const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

function togglePlay() {
  video[video.paused ? 'play' : 'pause']()
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚'
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRange() {
  video[this.name] = this.value
}

function progressUpdate() {
  progressBar.style.flexBasis = (video.currentTime / video.duration) * 100 + '%'
}

function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', progressUpdate)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(b => b.addEventListener('click', skip))
ranges.forEach(r => r.addEventListener('input', handleRange))

let hold = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', e => hold && scrub(e))
progress.addEventListener('mousedown', () => hold = true)
progress.addEventListener('mouseup', () => hold = false)