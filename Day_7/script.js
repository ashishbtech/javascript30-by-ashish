const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

let comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const peopleList = document.getElementById('peopleList');
const commentsList = document.getElementById('commentsList');
const output = document.getElementById('output');

function renderPeople() {
  peopleList.innerHTML = people
    .map(p => `<li>${p.name} - ${new Date().getFullYear() - p.year}</li>`)
    .join('');
}

function renderComments() {
  commentsList.innerHTML = comments
    .map(c => `<li>${c.text} (${c.id})</li>`)
    .join('');
}

renderPeople();
renderComments();

document.getElementById('checkAdult').onclick = () => {
  const result = people.some(p => new Date().getFullYear() - p.year >= 19);
  output.textContent = result ? 'At least one adult exists' : 'No adults found';
};

document.getElementById('checkAllAdults').onclick = () => {
  const result = people.every(p => new Date().getFullYear() - p.year >= 19);
  output.textContent = result ? 'All are adults' : 'Not everyone is an adult';
};

document.getElementById('findComment').onclick = () => {
  const comment = comments.find(c => c.id === 823423);
  output.textContent = comment ? comment.text : 'Comment not found';
};

document.getElementById('deleteComment').onclick = () => {
  const index = comments.findIndex(c => c.id === 823423);
  if (index !== -1) {
    comments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];
    renderComments();
    output.textContent = 'Comment deleted';
  } else {
    output.textContent = 'Comment already removed';
  }
};