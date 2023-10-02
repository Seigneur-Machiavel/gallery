const urlprefix = subdomain_prefix
// Dont forget to use the "urlprefix" while fetching, example :
// .src = `${urlprefix}/sprites/cloud`
/*const env_= 'dev'; // 'prod' or 'dev'
if (env_ == 'dev') { // THIS IS FOR DEV ONLY ( to get better code completion)
    console.log('dev mode');
    // const sf = require('./simple_functions.js');
} else {
    // sf = window.sf;
}*/

//#region - VARIABLES
const artworks = 0;//#artworks_array
let DisplayJuggleInterval = null;
let paused = false;
let displayFolderIndex = 0;
const displayImgFadeInMs = 400;
const juggleDelay = 3000;
let juggleElements = 5;
let nextJuggleZIndex = 0;
let hoverFolder = null;
//#endregion

//#region - PRELOAD FUNCTIONS - ( They need to be created before html elements who use them )
function toggleDarkMode(element) {
	if (element.checked) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
}
//#endregion

window.addEventListener('load', async function () {

//#region - CLASSES
//#endregion

//#region - HTML-ELEMENTS
const toggleDarkModeButton = document.getElementById('dark-mode-toggle');
const modal = document.getElementById('modal');
const display = document.getElementById('display');
const gallery = document.getElementById('gallery');
//#endregion

//#region - VARIABLES
//#endregion

//#region - SIMPLE FUNCTIONS
function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function randomImageName(folderName) {
	return artworks[folderName][rnd(0, artworks[folderName].length - 1)];
}
function DisplayPopImg(initialImg = false) {
	const atworkFolder = Object.keys(artworks)[displayFolderIndex];
	displayFolderIndex++;
	if (displayFolderIndex >= Object.keys(artworks).length) { displayFolderIndex = 0; }

	const wrapdiv = document.createElement('div');
	wrapdiv.classList.add('circle-img-wrap');

	const image = document.createElement('img');
	const randomImgName = randomImageName(atworkFolder);
	image.src = `${urlprefix}/artworks/${atworkFolder}/${randomImgName}.webp`;
	image.classList.add('circle-img');

	const cicle = document.createElement('div');
	cicle.classList.add('circle');

	wrapdiv.appendChild(image);
	wrapdiv.appendChild(cicle);

	// event listener for "hover"
	wrapdiv.addEventListener('mouseenter', () => {
		pauseDisplayJuggleAnimations();
		setTimeout(() => {
			hoverFolder = atworkFolder;
		}, 100);
	});
	wrapdiv.addEventListener('mouseleave', () => {
		resumeDisplayJuggleAnimations();
		hoverFolder = null;
	});
	// event listener for "click"
	wrapdiv.addEventListener('click', () => {
		console.log(`show ${atworkFolder}`);
		fillGallery(atworkFolder);
	});

	// set the z-index
	wrapdiv.style.zIndex = nextJuggleZIndex;
	nextJuggleZIndex++;

	// Add the image to the display as the first child - or - the last child if it's the initial image
	display.children.length != 0 ? display.insertBefore(wrapdiv, display.children[0]) : display.appendChild(wrapdiv);
	if (!initialImg) { setTimeout(() => { display.children[0].classList.add('fade-in'); }, 100); }
}
function displayJuggle() {
	// remove the last image
	display.children[display.children.length - 1].remove();

	// start collapsing the new last image
	display.children[display.children.length - 1].classList.remove('fade-in');

	// Add the last image
	DisplayPopImg();
}
async function fillDisplay(numberOfImages, delayBetweenImages) {
	// Add the first image collaped
	DisplayPopImg(true);

	let needToWait = displayImgFadeInMs - juggleDelay; // the initial delay to fade-in image
	for (let i = 0; i < numberOfImages; i++) {
		DisplayPopImg();
		await sleep(delayBetweenImages);
		needToWait += delayBetweenImages
	}

	if (needToWait > 0) { await sleep(needToWait) }; // Wait before removing the first image and adding the last one

	// Start the juggle
	DisplayJuggleInterval = setInterval(displayJuggle, juggleDelay);
}
function pauseDisplayJuggleAnimations() {
	if (display.children.length < juggleElements) { return; }
	// pause the juggle
	if (DisplayJuggleInterval) { clearInterval(DisplayJuggleInterval); }
	// pause the animations
	for (let i = 0; i < display.children.length; i++) {
		display.children[i].classList.add('paused');
		if (!display.children[i].matches(':hover')) { display.children[i].classList.add('reduce') }
	};
}
function resumeDisplayJuggleAnimations() {
	if (paused) { return; }
	if (display.children.length < juggleElements) { return; }
	// resume the juggle
	DisplayJuggleInterval = setInterval(displayJuggle, juggleDelay);
	// resume the animations
	for (let i = 0; i < display.children.length; i++) {
		display.children[i].classList.remove('paused');
		display.children[i].classList.remove('reduce');
	};
}
fillDisplay(juggleElements, 200);

// GALLERY
async function fillGallery(folderName) {
	// Clear the gallery
	gallery.innerHTML = "";
	gallery.classList.remove('fade-in');

	// Wait for the gallery to fade-out
	await sleep(200);

	const folder = artworks[folderName];
	for (let i = 0; i < folder.length; i++) {
		const imageName = folder[i];
		const image = document.createElement('img');
		image.src = `${urlprefix}/artworks/${folderName}/${imageName}.webp`;
		image.addEventListener('load', () => {
			image.classList.add('fade-in');
		});
		gallery.appendChild(image);
	};
}
//#endregion

//#region - EVENT LISTENERS
document.getElementById("dark-mode-toggle").addEventListener('change', (event) => {
	toggleDarkMode(toggleDarkModeButton)
	// save dark-mode state
	localStorage.setItem('dark-mode', event.target.checked);
});
//#endregion

//#region - SET SETTINGS FROM LOCALSTORAGE
if (localStorage.getItem('dark-mode') === "false") {
	toggleDarkModeButton.checked = false;
	toggleDarkMode(toggleDarkModeButton);
}
//#endregion ----------------------------------------------

});
