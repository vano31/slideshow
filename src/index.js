import './style.css';
import {mainpage} from './structure.js'

let {page, menuMain, menuSub, imageHolder, conveyerBelt, timeDisplay, backgroundDisplay, dropDownImage, dropDownColor} = mainpage();


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

redColorSquare.textContent = 'red';
redColorSquare.setAttribute('style', 'visibility: hidden');
menuSub.appendChild(redColorSquare);

greenColorSquare.textContent = 'green';
greenColorSquare.setAttribute('style', 'visibility: hidden')
menuSub.appendChild(greenColorSquare);

blueColorSquare.textContent = 'blue';
blueColorSquare.setAttribute('style', 'visibility: hidden')
menuSub.appendChild(blueColorSquare);

goldColorSquare.textContent = 'gold';
goldColorSquare.setAttribute('style', 'visibility: hidden');
menuSub.appendChild(goldColorSquare);

silverColorSquare.textContent = 'silver';
silverColorSquare.setAttribute('style', 'visibility: hidden');
menuSub.appendChild(silverColorSquare);

let backgroundSquares = document.querySelectorAll('.backgroundSquare');
console.log(backgroundSquares);

//let backgroundSquares = document.querySelectorAll('.backgroundSquare');
//let gook = document.querySelectorAll('#red');

dropDownColor.addEventListener('click', () => {

    backgroundSquares.forEach(square => {
        if (square.style.visibility === 'hidden') {

            square.style.visibility = 'visible';

        }   else {
            square.style.visibility = 'hidden';
        }
    })


})

backgroundSquares.forEach(square => {
    square.addEventListener('click', function(e) {
        //console.log(e.target.id);
        page.style.backgroundColor = e.target.id;
    })
})







