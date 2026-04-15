const nav = document.querySelector('#main-nav');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

function handleResize() {
  document.body.style.paddingTop = 0;
  document.body.classList.remove('fixed-nav');
  topOfNav = nav.offsetTop;
  fixNav();
}

window.addEventListener('scroll', fixNav);
window.addEventListener('resize', handleResize);