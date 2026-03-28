const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw';

const cities = [];

fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  if (this.value === '') {
    suggestions.innerHTML = '';
    return;
  }

  const matchArray = findMatches(this.value, cities);

  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');

    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li data-city="${place.city}" data-state="${place.state}">
        <span>${cityName}, ${stateName}</span>
        <span>${Number(place.population).toLocaleString()}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
}

function handleClick(e) {
  const li = e.target.closest('li');
  if (!li) return;

  const city = li.dataset.city;
  const state = li.dataset.state;

  searchInput.value = `${city}, ${state}`;
  suggestions.innerHTML = '';
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
suggestions.addEventListener('click', handleClick);