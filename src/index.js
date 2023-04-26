import './style.css';
import {mainpage} from './structure.js'

let {page, menuMain, menuSub, imageHolder, imageBox, conveyerBelt, timeDisplay, backgroundDisplay, dropDownImage, dropDownColor, conveyerButton0, conveyerButton1, conveyerButton2, conveyerButton3, conveyerButton4, conveyerButtonLeft, conveyerButtonRight} = mainpage();

//////////////////////////////Global Variables

let imageArray = [];

let countNumber = 0;



///////////////////////////////////////////////

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


//////////////////////////////////////////

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
        minutes = '0' + minutes;
    }

    let time = hours + ':' + minutes;
    timeDisplay.textContent = time;
}


let imageDOMLoader = function() {

    if (!(imageArray[countNumber])) {

        console.log(countNumber);
        imageBox.src = '../src/images/emptyimage.jpg';

        if (countNumber < 4) {

            countNumber++

        }   else {

            countNumber = 0;
        }


    }   else {

        if (/*imageArray[countNumber] && */countNumber < 4) {

            console.log(countNumber);
            imageBox.src = `${imageArray[countNumber]}`;
            countNumber++;
    
        }   else if (countNumber === 4) {
    
            console.log(countNumber);
            imageBox.src = `${imageArray[countNumber]}`;
            countNumber = 0;
            
            //countNumber++;
            
        }   /*else {
    
            console.log('no picture');
            //console.log(countNumber);
            countNumber++;
    
    
        }
        */






    }
   

    


}

let imageStorageSaver = function() {

    let imageArrayJSON = JSON.stringify(imageArray);
    localStorage.setItem('imageArray', imageArrayJSON);

}

/* imageURLRetriever Will be run at beginning of page to all imageArray to be equal to localStorage on page load/refresh*/ 
let imageURLRetriever = function() { 


    if (localStorage.getItem('imageArray')) {

        let oldImageArrayJSON = localStorage.getItem('imageArray');
        let parsedOldImageArray = JSON.parse(oldImageArrayJSON);
        imageArray = parsedOldImageArray;


    }   else {

        return
    }
    

}

let countTimerResetter = function() {
    clearInterval(setInternalId)
    setInternalId = setInterval(imageDOMLoader, 2000);
  }


///////////////////////////////////Set Interval Functions

let timeDisplayTimer = setInterval(getTime, 6000);

let setInternalId = setInterval(imageDOMLoader, 3000);



////////////////////////////////////Global Functions to Run at Page Load

backgroundLoad();

if (localStorage.getItem('backgroundColor')) {

    backgroundLoadToDOM();

}

getTime(); //For getting the time on page load without waiting for timer

imageURLRetriever(); //For getting the url from localStorage on page load



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

imageSquares.forEach(square => {
    square.addEventListener('change', function(e) {
        let reader = new FileReader();
        reader.readAsDataURL(square.files[0]);

        reader.addEventListener('load', () => {

            let imageArrayIndex = parseInt(e.target.id);
            imageArray[imageArrayIndex] = reader.result;
            //imageBox.src = imageArray[imageArrayIndex];
            imageStorageSaver();
            console.log(imageArray);


        })
    })
})


//Conveyer Belt Button Event Listeners/////////////////////////////////////////////

conveyerButtonLeft.addEventListener('click', () => {
  
    //Add if else statement to make sure it does not go below 0
    
    if (countNumber === 0) {
      countNumber = 4; //Going left from 0 takes you to the end
    } else {
      countNumber--; // Reduce countNumber by 1
    }
    
     
    imageDOMLoader(); //Do one round of imageDOMLoader to load the image immediately
    countNumber++; // Increase countNumber by 1 since the setInterval function within countTimerResetter takes some time BEFORE a new image is shown;
    countTimerResetter(); //
    
  })
  
  conveyerButtonRight.addEventListener('click', () => {
    
    //Add if else statement to make sure it does not go above 4
    
    if (countNumber === 4) {
      countNumber = 0; //Going right from 4 takes you to the beginning
    } else {
      countNumber++; //Increase countNumber by 1
    }
    
    
    
    countNumber++; //Increase countNumber by 1
    imageDOMLoader(); //Do one round of imageDOMLoader to load the image immediately
    countNumber++; // Increase countNumber by 1 since the setInterval function within countTimerResetter takes some time BEFORE a new image is shown;
    countTimerResetter(); //
    
  })
  
  let numberedConveyerButtons = [conveyerButton0, conveyerButton1, conveyerButton2, conveyerButton3, conveyerButton4];
  
  numberedConveyerButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      countNumber = e.target.name; //Change countNumber to the name of the selected button
      imageDOMLoader(); //Do one round of imageDOMLoader to load the image immediately
    countNumber++; // Increase countNumber by 1 since the setInterval function within countTimerResetter takes some time BEFORE a new image is shown;
    countTimerResetter(); //
    })
  })
  
  
  
  