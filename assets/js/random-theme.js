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