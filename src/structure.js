let mainpage = function() {


let page = document.createElement('div');
page.classList.add('page');
page.classList.add('background');  
document.body.appendChild(page);

let menuMain = document.createElement('div');
menuMain.classList.add('menu');
menuMain.classList.add('main')
menuMain.classList.add('background');
page.appendChild(menuMain);

let menuSub = document.createElement('div');
menuSub.classList.add('menu');
menuSub.classList.add('sub')
menuSub.classList.add('background');
page.appendChild(menuSub);

let imageHolder = document.createElement('div');
imageHolder.classList.add('imageHolder');
imageHolder.classList.add('background');
page.appendChild(imageHolder);

let conveyerBelt = document.createElement('div');
conveyerBelt.classList.add('conveyerBelt');
conveyerBelt.classList.add('background');
page.appendChild(conveyerBelt);

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



return {page, menuMain, menuSub, imageHolder, conveyerBelt, bottomSection, timeDisplay, backgroundDisplay}

}

export {mainpage};