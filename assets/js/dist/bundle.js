console.log(
  `
 █████╗ ███████╗ █████╗ ██████╗ ██████╗  █████╗  █████╗  ██████╗ 
██╔══██╗╚══███╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
███████║  ███╔╝ ███████║██████╔╝██████╔╝███████║███████║██║   ██║
██╔══██║ ███╔╝  ██╔══██║██╔══██╗██╔══██╗██╔══██║██╔══██║██║   ██║
██║  ██║███████╗██║  ██║██████╔╝██║  ██║██║  ██║██║  ██║╚██████╔╝
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ 

So you like to see under the hood. Cool! Have a better look to the source code here:  

https://github.com/azabraao/azabraao.github.io
`
);
let primaryBackground = document.querySelectorAll('.jsPrimaryBackground');
let secondaryBackground = document.querySelectorAll('.jsSecondaryBackground');
let secondaryColor = document.querySelectorAll('.jsSecondaryColor');
let primaryColor = document.querySelectorAll('.jsPrimaryColor');
let primaryFill = document.querySelectorAll('.jsPrimaryFill');
let secondaryFill = document.querySelectorAll('.jsSecondaryFill');
let secondaryBorder = document.querySelectorAll('.jsSecondaryBorder');
let primaryBorder = document.querySelectorAll('.jsPrimaryBorder');

let chromeTab = document.querySelector("meta[name=theme-color]");
let palletes = [
    {primary: '#001427', secondary: '#F4D58D'},
    {primary: '#000000', secondary: '#ffffff'},
    {primary: '#271F30', secondary: '#D0FCB3'},
    {primary: '#331E38', secondary: '#A0C1B9'},
    {primary: '#44355B', secondary: '#ECA72C'},
    {primary: '#5B7553', secondary: '#C3E8BD'},
    {primary: '#136F63', secondary: '#E0CA3C'},
    {primary: '#3E2F5B', secondary: '#E0CA3C'},
    {primary: '#0353A4', secondary: '#B9D6F2'},
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


    primaryBackground.forEach(item => {
        item.style.backgroundColor = palletes[index].primary
    });
    secondaryBackground.forEach(item => {
        item.style.backgroundColor = palletes[index].secondary
    });
    primaryColor.forEach(item => {
        item.style.color = palletes[index].primary
    })
    secondaryColor.forEach(item => {
        item.style.color = palletes[index].secondary
    })
    secondaryFill.forEach(item => {
        item.style.fill = palletes[index].secondary
    })
    primaryFill.forEach(item => {
        item.style.fill = palletes[index].primary
    })
    primaryBorder.forEach(item => {
        item.style.borderColor = palletes[index].primary
    })
    secondaryBorder.forEach(item => {
        item.style.fill = palletes[index].secondary
    })

    // item.style.color = palletes[index].secondary
    // item.style.fill = palletes[index].primary
    
    // item.style.backgroundColor = palletes[index].secondary
    // item.style.fill = palletes[index].secondary
    
    chromeTab.setAttribute("content", palletes[index].primary);

    window.localStorage.setItem('pallete-index', index);
}

function palleteIsRepeated(palleteIndex) {
    return  window.localStorage.getItem('pallete-index') == palleteIndex;
}
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
  
  let clickedItem = event.target;
  let itemImage = clickedItem.querySelector('.item__img');
  let itemDescription = clickedItem.querySelector('.jsItemPortifolioDesc').innerHTML;
  let modalImage = document.querySelector('.jsModalImage');
  let modalContent = document.querySelector('.jsModalContent');
  let brand = clickedItem.dataset.brand;
  
  modalContent.innerHTML = itemDescription;
  modalImage.src = itemImage.getAttribute('src');
  modal.dataset.brand = brand;
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
let titles = [' Freelancer',' Front-end developer', 'n Entrepreneur', ' Maker',' Web Developer'];
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
