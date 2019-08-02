window.onload = function() {
  setTimeout(() => {
  },2000)
}

document.addEventListener('wheel', paralaxing );
let firstSection = document.querySelector('.jsFirstSection');
let portifolio = document.querySelector('.jsPortifolio');

function paralaxing(event) {
  if (isScrollingDown(event)) {
    firstSection.classList.remove('forward');
    firstSection.classList.add('backward');
    
    portifolio.classList.remove('unscrolling');
    portifolio.classList.add('scrolling');
  } else {
    firstSection.classList.remove('backward');
    firstSection.classList.add('forward');
   
    portifolio.classList.remove('scrolling');
    portifolio.classList.add('unscrolling');
  }
}

function isScrollingDown(event) {
  return event.deltaY === 100;  
}