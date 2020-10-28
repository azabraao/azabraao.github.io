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
