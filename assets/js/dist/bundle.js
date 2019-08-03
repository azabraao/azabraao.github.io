document.addEventListener('wheel', paralaxing );
let firstSection = document.querySelector('.jsFirstSection');
let portifolio = document.querySelector('.jsPortifolio');
let portifolioItems = document.querySelectorAll('.jsPortifolioItem');
let closeModal = document.querySelector('.jsCloseModal');

portifolioItems.forEach((item) => {
  item.addEventListener('click', showModal );
})

closeModal.addEventListener('click', hideModal );

function hideModal() {
  let modal = document.querySelector('.jsPortifolioModal');
  
      if(modal.classList.contains('active')) {
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

  if(modal.classList.contains('inactive')) {
     modal.classList.remove('inactive');
  }
  modal.classList.add('active');

  let body = document.querySelector('body');
  body.style.overflowY = 'hidden'
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
    if(findItem) return item
  })

  return result[0];
}

function isClicked(element) {
  return element.classList.contains('clicked');
}

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
let header = document.querySelector('.header');
let contact = document.querySelector('.contact');
let chromeTab = document.querySelector("meta[name=theme-color]");
let palletes = [
    {primary: '#001427', secondary: '#F4D58D'},
    {primary: '#000000', secondary: '#ffffff'},
    {primary: '#271F30', secondary: '#D0FCB3'},
    {primary: '#331E38', secondary: '#A0C1B9'},
    {primary: '#44355B', secondary: '#ECA72C'},
    {primary: '#5B7553', secondary: '#C3E8BD'},
    {primary: '#136F63', secondary: '#E0CA3C'},
    {primary: '#E0CA3C', secondary: '#3E2F5B'},
    {primary: '#B9D6F2', secondary: '#0353A4'},
    {primary: '#424242', secondary: '#FCFC62'},
];

randomizeTheme();

function randomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeTheme() {
    let index = randomIndex(0, palletes.length -1);
    
    if(palleteIsRepeated(index)) {
        randomizeTheme();
        return;
    }

    header.style.backgroundColor = palletes[index].primary
    header.style.color = palletes[index].secondary
    contact.style.backgroundColor = palletes[index].secondary
    contact.style.color = palletes[index].primary
    
    chromeTab.setAttribute("content", palletes[index].primary);

    window.localStorage.setItem('pallete-index', index);
}

function palleteIsRepeated(palleteIndex) {
    return  window.localStorage.getItem('pallete-index') == palleteIndex;
}
let titles = ['Front-end', 'Empreendedor', 'Maker','Desenvolvedor Web'];
let transitionalTitle = document.querySelector('.jsTransitional');

changeTitle(titles[0], 0)

function changeTitle(title, counter = 0) {
  resetTitle();
  showLetterByLetter(title, counter);
}

function resetTitle() {
  transitionalTitle.textContent = "";
}

function showLetterByLetter(string, counter) {
  let letters = string.split('');

  letters.map((letter, index) => {
    setTimeout(() => {
      addLetterToTitle(letter);

      if(isLastLetter(index, letters)) {
        changeTitleRecursion(counter + 1)
      }
    },increaseSeconds(index))
  });
}

function addLetterToTitle(letter) {
  transitionalTitle.textContent += letter;
}

function increaseSeconds(index) {
  return 100 * index;
}

function isLastLetter(index, letters) {
  return index === letters.length - 1;
}

function changeTitleRecursion(counter) {
  if(islastTitle(counter)) counter = 0;
  
  setTimeout(() => {
    changeTitle(titles[counter], counter);
  },1000);  
}

function islastTitle(counter) {
  return counter === titles.length;
}