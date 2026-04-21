const nodes = document.querySelectorAll('.node');
const scoreBoard = document.querySelector('.score');
const targets = document.querySelectorAll('.target');
const startBtn = document.querySelector('.start-btn');

let lastNode;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomNode(nodes) {
  const idx = Math.floor(Math.random() * nodes.length);
  const node = nodes[idx];
  
  if (node === lastNode) {
    return randomNode(nodes);
  }
  
  lastNode = node;
  return node;
}

function popTarget() {
  const time = randomTime(400, 1000);
  const node = randomNode(nodes);
  
  node.classList.add('active');
  
  setTimeout(() => {
    node.classList.remove('active');
    if (!timeUp) popTarget();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  startBtn.disabled = true;
  startBtn.style.opacity = '0.5';
  
  popTarget();
  
  setTimeout(() => {
    timeUp = true;
    startBtn.disabled = false;
    startBtn.style.opacity = '1';
  }, 10000);
}

function hitTarget(e) {
  if (!e.isTrusted) return; 
  
  score++;
  this.parentNode.classList.remove('active');
  scoreBoard.textContent = score;
}

targets.forEach(target => target.addEventListener('click', hitTarget));
startBtn.addEventListener('click', startGame);