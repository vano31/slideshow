import './style.css';
import {mainpage} from './structure.js'

let {page, menuMain, menuSub, imageHolder, imageBox, conveyerBelt, timeDisplay, backgroundDisplay, dropDownImage, dropDownColor, conveyerButton0, conveyerButton1, conveyerButton2, conveyerButton3, conveyerButton4, conveyerButtonLeft, conveyerButtonRight} = mainpage();


let redColorSquare = document.createElement('div');
let greenColorSquare = document.createElement('div');
let blueColorSquare = document.createElement('div');
let goldColorSquare = document.createElement('div');
let silverColorSquare = document.createElement('div');

redColorSquare.classList.add('backgroundSquare');
greenColorSquare.classList.add('backgroundSquare');
blueColorSquare.classList.add('backgroundSquare');
goldColorSquare.classList.add('backgroundSquare');
silverColorSquare.classList.add('backgroundSquare');

redColorSquare.id = 'red';
greenColorSquare.id = 'green';
blueColorSquare.id = 'blue';
goldColorSquare.id = 'gold';
silverColorSquare.id = 'silver';

//redColorSquare.textContent = 'red';
redColorSquare.setAttribute('style', 'display: none');
menuSub.appendChild(redColorSquare);

//greenColorSquare.textContent = 'green';
greenColorSquare.setAttribute('style', 'display: none')
menuSub.appendChild(greenColorSquare);

//blueColorSquare.textContent = 'blue';
blueColorSquare.setAttribute('style', 'display: none')
menuSub.appendChild(blueColorSquare);

//goldColorSquare.textContent = 'gold';
goldColorSquare.setAttribute('style', 'display: none');
menuSub.appendChild(goldColorSquare);

//silverColorSquare.textContent = 'silver';
silverColorSquare.setAttribute('style', 'display: none');
menuSub.appendChild(silverColorSquare);

let backgroundSquares = document.querySelectorAll('.backgroundSquare');




let imageSquare0 = document.createElement('input');
imageSquare0.type = 'file';
imageSquare0.id = '0';
menuSub.appendChild(imageSquare0);
imageSquare0.style.display = 'none';

let imageSquare1 = document.createElement('input');
imageSquare1.type = 'file';
imageSquare1.id = '1';
menuSub.appendChild(imageSquare1);
imageSquare1.style.display = 'none';

let imageSquare2 = document.createElement('input');
imageSquare2.type = 'file';
imageSquare2.id = '2';
menuSub.appendChild(imageSquare2);
imageSquare2.style.display = 'none';

let imageSquare3 = document.createElement('input');
imageSquare3.type = 'file';
imageSquare3.id = '3';
menuSub.appendChild(imageSquare3);
imageSquare3.style.display = 'none';

let imageSquare4 = document.createElement('input');
imageSquare4.type = 'file';
imageSquare4.id = '4';
menuSub.appendChild(imageSquare4);
imageSquare4.style.display = 'none';

imageSquare0.classList.add('imageSquare');
imageSquare1.classList.add('imageSquare');
imageSquare2.classList.add('imageSquare');
imageSquare3.classList.add('imageSquare');
imageSquare4.classList.add('imageSquare');

let imageSquares = document.querySelectorAll('.imageSquare');



/////////////////////////////////////Important Function Declarations

let backgroundSave = function() {
    
    let backgroundColorToSave = window.getComputedStyle(page).backgroundColor;
    let backgroundColorJSON = JSON.stringify(backgroundColorToSave);
    localStorage.setItem('backgroundColor', backgroundColorJSON);


}

let backgroundLoad = function() {

    if (!localStorage.getItem('backgroundColor')) {
        
        return

    }   else {

        let oldColorJSON = localStorage.getItem('backgroundColor');
        let oldColorParsed = JSON.parse(oldColorJSON);
        return {oldColorParsed};

    }

}

let backgroundLoadToDOM = function() {


    let {oldColorParsed} = backgroundLoad();
    page.style.backgroundColor = oldColorParsed;


}

let getTime = function() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (minutes < 10) {
        minutes = '0' + simpleMinutes;
    }

    let time = hours + ':' + minutes;
    timeDisplay.textContent = time;
}

///////////////////////////////////Set Interval Functions

let timeDisplayTimer = setInterval(getTime, 6000);



////////////////////////////////////Global Functions to Run at Page Load

backgroundLoad();

if (localStorage.getItem('backgroundColor')) {

    backgroundLoadToDOM();

}

getTime(); //For getting the time on page load without waiting for timer



////////////////////////////////////// Important Event Listeners

dropDownColor.addEventListener('click', () => {
    backgroundSquares.forEach(square => {
        if (square.style.display === 'none') {

            square.style.display = 'block';

            imageSquares.forEach(otherSquare => {
                otherSquare.style.display = 'none';
            })

        }   else {
            square.style.display = 'none';
            
        }
    })
    

    //console.log(page.style.backgroundColor);

})


dropDownImage.addEventListener('click', () => {
    imageSquares.forEach(square => {
        if (square.style.display === 'none') {

            square.style.display = 'block';

            backgroundSquares.forEach(otherSquare => {
                otherSquare.style.display = 'none';
            })

        }   else {
            square.style.display = 'none';
        }
    })
})

/////////////////////////////////////////////////////////////////////////////////////

backgroundSquares.forEach(square => {
    square.addEventListener('click', function(e) {
        //console.log(e.target.id);
        page.style.backgroundColor = e.target.id;

        backgroundDisplay.textContent = e.target.id

        backgroundSave();
    })
})