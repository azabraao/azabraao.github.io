let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
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
    footer.style.backgroundColor = palletes[index].secondary
    footer.style.color = palletes[index].primary
    
    chromeTab.setAttribute("content", palletes[index].primary);

    window.localStorage.setItem('pallete-index', index);
}

function palleteIsRepeated(palleteIndex) {
    return  window.localStorage.getItem('pallete-index') == palleteIndex;
}