const boxes = document.querySelectorAll('.box');
const logContainer = document.getElementById('event-log');
const btnOnce = document.getElementById('btn-once');
const btnClear = document.getElementById('btn-clear');

function createLogEntry(message, colorHex) {
  const li = document.createElement('li');
  li.textContent = message;
  
  if (colorHex) {
    li.style.borderLeftColor = colorHex;
  }
  
  logContainer.prepend(li);
}

function handleBoxClick(e) {
  const level = this.dataset.level;
  let indicatorColor = '#8257e5';
  
  if (this.classList.contains('two')) {
    indicatorColor = '#04d361';
  } else if (this.classList.contains('three')) {
    indicatorColor = '#fd951f';
  }

  createLogEntry(`Fired on: ${level}`, indicatorColor);
}

boxes.forEach(box => box.addEventListener('click', handleBoxClick, {
  capture: false,
  once: false
}));

btnOnce.addEventListener('click', function() {
  createLogEntry('Single-use button clicked. Event listener removed.', '#e1e1e6');
}, {
  once: true
});

btnClear.addEventListener('click', () => {
  logContainer.innerHTML = '';
});