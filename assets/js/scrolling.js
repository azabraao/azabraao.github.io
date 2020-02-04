document.addEventListener('wheel', handleScroll);
let firstSection = document.querySelector('.jsFirstSection');
let portifolio = document.querySelector('.jsPortifolio');
let portifolioItems = document.querySelectorAll('.jsPortifolioItem');
let closeModal = document.querySelector('.jsCloseModal');

portifolioItems.forEach((item) => {
  item.addEventListener('click', showModal);
})

closeModal.addEventListener('click', hideModal);

function hideModal() {
  let modal = document.querySelector('.jsPortifolioModal');
  
  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
  
  modal.classList.add('inactive');
  
  let body = document.querySelector('body');
  body.style.overflowY = 'scroll'
}

function activeModal(modal) {
  modal.style.display = 'block';
  
  if (modal.classList.contains('inactive')) {
    modal.classList.remove('inactive');
  }
  modal.classList.add('active');
  
  let body = document.querySelector('body');
  // body.style.overflowY = 'hidden'
}


function showModal(event) {
  let modal = document.querySelector('.jsPortifolioModal');
  activeModal(modal);
  
  let clickedItem = matchPortifolioItem(event.path);
  let itemImage = clickedItem.querySelector('.item__img');
  let itemDescription = clickedItem.querySelector('.jsItemPortifolioDesc').innerHTML;
  let modalImage = document.querySelector('.jsModalImage');
  let modalContent = document.querySelector('.jsModalContent');
  let brand = clickedItem.dataset.brand;
  
  modalContent.innerHTML = itemDescription;
  modalImage.src = itemImage.getAttribute('src');
  modal.dataset.brand = brand;
}

function matchPortifolioItem(array) {
  let result = array.filter((item) => {
    let findItem = !!item.classList ? item.classList.contains('jsPortifolioItem') : null;
    if (findItem) return item
  })
  
  return result[0];
}

function isClicked(element) {
  return element.classList.contains('clicked');
}

function handleScroll(event) {
  
  const test = {
    scrollIndex: 0,
    down() {
      test.scrollIndex = test.scrollIndex + 1;
    },
    up() {
      test.scrollIndex = test.scrollIndex - 1;
      console.log(test.scrollIndex);
    }
  }
  
  if(event.deltaY > 0) {
    test.down();
  } else {
    test.up();
  }
  
  
  if (isScrollingDown(event)) {
    firstSection.classList.remove('forward');
    firstSection.classList.add('backward');
    
    document.body.style.overflow = "hidden";
    portifolio.style.overflowY = "scroll";
    portifolio.classList.remove('unscrolling');
    portifolio.classList.add('scrolling');

  } else {
    let isOnTop = portifolio.scrollTop === 0
    if(isOnTop) {
      firstSection.classList.remove('backward');
      firstSection.classList.add('forward');
      
      portifolio.classList.remove('scrolling');
      portifolio.classList.add('unscrolling');
    }
  }
}

function isScrollingDown(event) {
  return event.deltaY > 0;
}