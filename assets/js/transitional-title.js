let titles = ['Front-end', 'Empreendedor', 'Maker','Desenvolvedor Web'];
let transitionalTitle = document.querySelector('.jsTransitional');

showTitle(titles[0], 0)

function showTitle(title, counter = 0) {
  transitionalTitle.textContent = "";
  let letters = title.split('');
  if(counter === titles.length) {
    counter = 0;
  }
  
  transitionalTitle.textContent = '';

  letters.map((letter, index) => {
    setTimeout(() => {
      transitionalTitle.textContent += letter;

      if(index === letters.length - 1) {
        setTimeout(() => {
          showTitle(titles[counter], counter + 1)
        },1000);
      }
    },100 * index)
  });
}