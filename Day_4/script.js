const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Beck, Glenn','Becker, Carl','Beckett, Samuel','Beddoes, Mick',
  'Beecher, Henry','Beethoven, Ludwig','Begin, Menachem',
  'Belloc, Hilaire','Bellow, Saul','Benchley, Robert',
  'Benenson, Peter','Ben-Gurion, David','Benjamin, Walter',
  'Benn, Tony','Bennington, Chester','Benson, Leana',
  'Bent, Silas','Bentsen, Lloyd','Berger, Ric','Bergman, Ingmar'
];

const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk','car','van','car','truck'];

const fifteen = inventors.filter(i => i.year >= 1500 && i.year < 1600);

const fullNames = inventors.map(i => `${i.first} ${i.last}`);

const ordered = inventors.sort((a, b) => a.year - b.year);

const totalYears = inventors.reduce((t, i) => t + (i.passed - i.year), 0);

const oldest = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));

const links = [...document.querySelectorAll('.mw-category a')];

const de = links.map(l => l.textContent).filter(n => n.includes('de'));

const alpha = people.sort((a, b) => {
  const [aLast] = a.split(', ');
  const [bLast] = b.split(', ');
  return aLast.localeCompare(bLast);
});

const transportation = data.reduce((obj, item) => {
  obj[item] = (obj[item] || 0) + 1;
  return obj;
}, {});

console.log(fifteen);
console.log(fullNames);
console.log(ordered);
console.log(totalYears);
console.log(oldest);
console.log(de);
console.log(alpha);
console.log(transportation);