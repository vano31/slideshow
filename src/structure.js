let mainpage = function() {

///////////////////////////////////////////////
let page = document.createElement('div');
page.classList.add('page');
page.classList.add('background');  
document.body.appendChild(page);

//////////////////////////////////////////////////////
let menuMain = document.createElement('div');
menuMain.classList.add('menu');
menuMain.classList.add('main')
menuMain.classList.add('background');
page.appendChild(menuMain);

let dropDownImage = document.createElement('button');
dropDownImage.id = 'dropDownImage';
dropDownImage.textContent = 'Choose Image';
menuMain.appendChild(dropDownImage);

let dropDownColor = document.createElement('button');
dropDownColor.id = 'dropDownColor';
dropDownColor.textContent = 'Choose Color';
menuMain.appendChild(dropDownColor);

/////////////////////////////////////////////////

let colorbox = document.createElement('button');

//Create colorboxx buttons with for loop instead of defining each one individually




///////////////////////////////////////////////////

let menuSub = document.createElement('div');
menuSub.classList.add('menu');
menuSub.classList.add('sub')
menuSub.classList.add('background');
page.appendChild(menuSub);



///////////////////////////////////////////////////////

let imageHolder = document.createElement('div');
imageHolder.classList.add('imageHolder');
imageHolder.classList.add('background');
page.appendChild(imageHolder);

//////////////////////////////////////////////////////////

let conveyerBelt = document.createElement('div');
conveyerBelt.classList.add('conveyerBelt');
conveyerBelt.classList.add('background');
page.appendChild(conveyerBelt);

//////////////////////////////////////////////////////////

let bottomSection = document.createElement('div');
bottomSection.classList.add('bottomSection');
bottomSection.classList.add('background');
page.appendChild(bottomSection);

let timeDisplay = document.createElement('div');
timeDisplay.classList.add('timeDisplay');
timeDisplay.classList.add('background');
bottomSection.appendChild(timeDisplay);

let backgroundDisplay = document.createElement('div');
backgroundDisplay.classList.add('backgroundDisplay');
backgroundDisplay.classList.add('background');
bottomSection.appendChild(backgroundDisplay);

///////////////////////////////////////////////////////////////


let imageBox = document.createElement('img');
imageBox.id = 'imageBox';
//imageBox.src = '../src/images/samusdread.jpg'
imageHolder.appendChild(imageBox);


////////////////////////////////////////////////////////////////


//Conveyer belt stuff

let conveyerButtonLeft = document.createElement('button');
conveyerButtonLeft.id = 'leftButton';
conveyerButtonLeft.textContent = 'Back';
conveyerBelt.appendChild(conveyerButtonLeft);

let conveyerButton0 = document.createElement('button');
conveyerButton0.name = '0';
conveyerButton0.textContent = 'Pic 1';
conveyerBelt.appendChild(conveyerButton0);

let conveyerButton1 = document.createElement('button');
conveyerButton1.name = '1';
conveyerButton1.textContent = 'Pic 2';
conveyerBelt.appendChild(conveyerButton1);

let conveyerButton2 = document.createElement('button');
conveyerButton2.name = '2';
conveyerButton2.textContent = 'Pic 3';
conveyerBelt.appendChild(conveyerButton2);

let conveyerButton3 = document.createElement('button');
conveyerButton3.name = '3';
conveyerButton3.textContent = 'Pic 4';
conveyerBelt.appendChild(conveyerButton3);

let conveyerButton4 = document.createElement('button');
conveyerButton4.name = '4';
conveyerButton4.textContent = 'Pic 5';
conveyerBelt.appendChild(conveyerButton4);

let conveyerButtonRight = document.createElement('button');
conveyerButtonRight.id = 'rightButton';
conveyerButtonRight.textContent = 'Forward';
conveyerBelt.appendChild(conveyerButtonRight)

////////////////////////////////////////////////////////////////

return {page, menuMain, menuSub, imageHolder, imageBox, conveyerBelt, bottomSection, timeDisplay, backgroundDisplay, dropDownImage, dropDownColor, conveyerButton0, conveyerButton1, conveyerButton2, conveyerButton3, conveyerButton4, conveyerButtonLeft, conveyerButtonRight}

}

export {mainpage};