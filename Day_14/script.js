 
const originalDisplay = document.querySelector('#original-code');
const cloneDisplay = document.querySelector('#clone-code');

 
const baseData = {
  name: 'Wes',
  score: 100,
  team: 'Red'
};

 
let originalObj = { ...baseData };
let clonedObj = { ...baseData };

 
function render() {
  originalDisplay.textContent = JSON.stringify(originalObj, null, 2);
  cloneDisplay.textContent = JSON.stringify(clonedObj, null, 2);
}
 
document.querySelector('#btn-reference').addEventListener('click', () => {
  
  const referenceObj = originalObj; 
  
  
  referenceObj.team = 'Blue (Hacked!)';
  referenceObj.score = 999;
  
  clonedObj = referenceObj;  
  render();
});

 
document.querySelector('#btn-copy').addEventListener('click', () => {
   
  const trueCopyObj = { ...originalObj };
  
   
  trueCopyObj.team = 'Green (Safe)';
  trueCopyObj.score = 500;

  clonedObj = trueCopyObj;  
  render();
});

 
document.querySelector('#btn-reset').addEventListener('click', () => {
  originalObj = { ...baseData };
  clonedObj = { ...baseData };
  render();
});

 
render();