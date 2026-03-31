const text = document.getElementById('text')

const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 }
]

function makeGreen() {
  text.style.color = '#BADA55'
  text.style.fontSize = '50px'
}

text.addEventListener('click', makeGreen)

console.log('hello')
console.log('Hello I am a %s string!', 'cool')

console.log('%c Styled text', 'font-size:40px; color:blue;')

console.warn('Warning message')
console.error('Error message')
console.info('Information message')

console.assert(text.classList.contains('active'), 'Missing class')

console.log(text)
console.dir(text)

dogs.forEach(dog => {
  console.groupCollapsed(dog.name)
  console.log(`Name: ${dog.name}`)
  console.log(`Age: ${dog.age}`)
  console.log(`Dog years: ${dog.age * 7}`)
  console.groupEnd()
})

console.count('count')
console.count('count')
console.count('other')

console.time('fetching')

fetch('https://api.github.com/users/wesbos')
  .then(res => res.json())
  .then(data => {
    console.timeEnd('fetching')
    console.log(data)
  })