const urlprefix = ""
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
const artworks = {"Abstract":["Abstract- 1","Abstract- 10","Abstract- 100","Abstract- 101","Abstract- 102","Abstract- 103","Abstract- 104","Abstract- 105","Abstract- 106","Abstract- 107","Abstract- 108","Abstract- 109","Abstract- 11","Abstract- 110","Abstract- 111","Abstract- 112","Abstract- 113","Abstract- 114","Abstract- 115","Abstract- 116","Abstract- 117","Abstract- 118","Abstract- 119","Abstract- 12","Abstract- 120","Abstract- 121","Abstract- 122","Abstract- 123","Abstract- 124","Abstract- 125","Abstract- 126","Abstract- 127","Abstract- 128","Abstract- 129","Abstract- 13","Abstract- 130","Abstract- 131","Abstract- 132","Abstract- 133","Abstract- 134","Abstract- 135","Abstract- 136","Abstract- 137","Abstract- 138","Abstract- 139","Abstract- 14","Abstract- 140","Abstract- 141","Abstract- 142","Abstract- 143","Abstract- 144","Abstract- 145","Abstract- 146","Abstract- 147","Abstract- 148","Abstract- 149","Abstract- 15","Abstract- 150","Abstract- 151","Abstract- 152","Abstract- 153","Abstract- 154","Abstract- 155","Abstract- 156","Abstract- 157","Abstract- 158","Abstract- 159","Abstract- 16","Abstract- 160","Abstract- 161","Abstract- 162","Abstract- 163","Abstract- 164","Abstract- 165","Abstract- 166","Abstract- 167","Abstract- 168","Abstract- 169","Abstract- 17","Abstract- 170","Abstract- 171","Abstract- 172","Abstract- 173","Abstract- 174","Abstract- 175","Abstract- 176","Abstract- 177","Abstract- 178","Abstract- 179","Abstract- 18","Abstract- 180","Abstract- 181","Abstract- 182","Abstract- 183","Abstract- 184","Abstract- 185","Abstract- 186","Abstract- 187","Abstract- 188","Abstract- 189","Abstract- 19","Abstract- 190","Abstract- 191","Abstract- 192","Abstract- 193","Abstract- 194","Abstract- 195","Abstract- 196","Abstract- 197","Abstract- 198","Abstract- 199","Abstract- 2","Abstract- 20","Abstract- 200","Abstract- 201","Abstract- 202","Abstract- 203","Abstract- 204","Abstract- 205","Abstract- 206","Abstract- 207","Abstract- 208","Abstract- 209","Abstract- 21","Abstract- 210","Abstract- 211","Abstract- 212","Abstract- 213","Abstract- 214","Abstract- 215","Abstract- 216","Abstract- 217","Abstract- 218","Abstract- 219","Abstract- 22","Abstract- 220","Abstract- 221","Abstract- 222","Abstract- 223","Abstract- 224","Abstract- 225","Abstract- 226","Abstract- 227","Abstract- 228","Abstract- 229","Abstract- 23","Abstract- 230","Abstract- 231","Abstract- 232","Abstract- 233","Abstract- 234","Abstract- 235","Abstract- 236","Abstract- 237","Abstract- 238","Abstract- 239","Abstract- 24","Abstract- 240","Abstract- 241","Abstract- 242","Abstract- 243","Abstract- 244","Abstract- 245","Abstract- 246","Abstract- 247","Abstract- 248","Abstract- 249","Abstract- 25","Abstract- 250","Abstract- 251","Abstract- 252","Abstract- 253","Abstract- 254","Abstract- 255","Abstract- 256","Abstract- 257","Abstract- 258","Abstract- 259","Abstract- 26","Abstract- 260","Abstract- 261","Abstract- 262","Abstract- 263","Abstract- 264","Abstract- 265","Abstract- 266","Abstract- 267","Abstract- 268","Abstract- 269","Abstract- 27","Abstract- 270","Abstract- 271","Abstract- 272","Abstract- 273","Abstract- 274","Abstract- 275","Abstract- 276","Abstract- 277","Abstract- 278","Abstract- 279","Abstract- 28","Abstract- 280","Abstract- 281","Abstract- 282","Abstract- 283","Abstract- 284","Abstract- 285","Abstract- 286","Abstract- 287","Abstract- 288","Abstract- 289","Abstract- 29","Abstract- 290","Abstract- 291","Abstract- 292","Abstract- 293","Abstract- 294","Abstract- 295","Abstract- 296","Abstract- 297","Abstract- 298","Abstract- 299","Abstract- 3","Abstract- 30","Abstract- 300","Abstract- 301","Abstract- 302","Abstract- 303","Abstract- 304","Abstract- 305","Abstract- 306","Abstract- 307","Abstract- 308","Abstract- 309","Abstract- 31","Abstract- 310","Abstract- 311","Abstract- 312","Abstract- 313","Abstract- 314","Abstract- 315","Abstract- 316","Abstract- 317","Abstract- 318","Abstract- 319","Abstract- 32","Abstract- 320","Abstract- 321","Abstract- 322","Abstract- 323","Abstract- 324","Abstract- 325","Abstract- 326","Abstract- 327","Abstract- 328","Abstract- 329","Abstract- 33","Abstract- 330","Abstract- 331","Abstract- 332","Abstract- 333","Abstract- 334","Abstract- 335","Abstract- 336","Abstract- 337","Abstract- 338","Abstract- 339","Abstract- 34","Abstract- 340","Abstract- 341","Abstract- 342","Abstract- 343","Abstract- 344","Abstract- 345","Abstract- 346","Abstract- 347","Abstract- 348","Abstract- 349","Abstract- 35","Abstract- 350","Abstract- 351","Abstract- 352","Abstract- 353","Abstract- 354","Abstract- 355","Abstract- 356","Abstract- 357","Abstract- 358","Abstract- 359","Abstract- 36","Abstract- 360","Abstract- 361","Abstract- 362","Abstract- 363","Abstract- 364","Abstract- 365","Abstract- 366","Abstract- 367","Abstract- 368","Abstract- 369","Abstract- 37","Abstract- 370","Abstract- 371","Abstract- 372","Abstract- 373","Abstract- 374","Abstract- 375","Abstract- 376","Abstract- 377","Abstract- 378","Abstract- 379","Abstract- 38","Abstract- 380","Abstract- 381","Abstract- 382","Abstract- 383","Abstract- 384","Abstract- 385","Abstract- 386","Abstract- 387","Abstract- 388","Abstract- 389","Abstract- 39","Abstract- 390","Abstract- 391","Abstract- 392","Abstract- 393","Abstract- 394","Abstract- 395","Abstract- 396","Abstract- 397","Abstract- 398","Abstract- 399","Abstract- 4","Abstract- 40","Abstract- 400","Abstract- 401","Abstract- 402","Abstract- 403","Abstract- 404","Abstract- 405","Abstract- 406","Abstract- 407","Abstract- 408","Abstract- 409","Abstract- 41","Abstract- 410","Abstract- 411","Abstract- 412","Abstract- 413","Abstract- 414","Abstract- 415","Abstract- 416","Abstract- 417","Abstract- 418","Abstract- 419","Abstract- 42","Abstract- 420","Abstract- 421","Abstract- 422","Abstract- 423","Abstract- 424","Abstract- 425","Abstract- 426","Abstract- 427","Abstract- 428","Abstract- 429","Abstract- 43","Abstract- 430","Abstract- 431","Abstract- 432","Abstract- 433","Abstract- 434","Abstract- 435","Abstract- 436","Abstract- 437","Abstract- 438","Abstract- 439","Abstract- 44","Abstract- 440","Abstract- 441","Abstract- 442","Abstract- 443","Abstract- 444","Abstract- 445","Abstract- 446","Abstract- 447","Abstract- 448","Abstract- 449","Abstract- 45","Abstract- 450","Abstract- 451","Abstract- 452","Abstract- 453","Abstract- 454","Abstract- 455","Abstract- 456","Abstract- 457","Abstract- 458","Abstract- 459","Abstract- 46","Abstract- 460","Abstract- 461","Abstract- 462","Abstract- 463","Abstract- 464","Abstract- 465","Abstract- 466","Abstract- 467","Abstract- 468","Abstract- 469","Abstract- 47","Abstract- 470","Abstract- 471","Abstract- 472","Abstract- 473","Abstract- 474","Abstract- 475","Abstract- 476","Abstract- 477","Abstract- 478","Abstract- 479","Abstract- 48","Abstract- 480","Abstract- 481","Abstract- 482","Abstract- 483","Abstract- 484","Abstract- 485","Abstract- 486","Abstract- 487","Abstract- 488","Abstract- 489","Abstract- 49","Abstract- 490","Abstract- 491","Abstract- 492","Abstract- 493","Abstract- 494","Abstract- 495","Abstract- 496","Abstract- 497","Abstract- 498","Abstract- 499","Abstract- 5","Abstract- 50","Abstract- 500","Abstract- 501","Abstract- 502","Abstract- 503","Abstract- 504","Abstract- 505","Abstract- 506","Abstract- 507","Abstract- 508","Abstract- 509","Abstract- 51","Abstract- 510","Abstract- 511","Abstract- 512","Abstract- 513","Abstract- 514","Abstract- 515","Abstract- 516","Abstract- 517","Abstract- 518","Abstract- 519","Abstract- 52","Abstract- 520","Abstract- 521","Abstract- 522","Abstract- 523","Abstract- 524","Abstract- 525","Abstract- 526","Abstract- 527","Abstract- 528","Abstract- 529","Abstract- 53","Abstract- 530","Abstract- 531","Abstract- 532","Abstract- 533","Abstract- 534","Abstract- 535","Abstract- 536","Abstract- 537","Abstract- 538","Abstract- 539","Abstract- 54","Abstract- 540","Abstract- 541","Abstract- 542","Abstract- 543","Abstract- 544","Abstract- 545","Abstract- 546","Abstract- 547","Abstract- 548","Abstract- 549","Abstract- 55","Abstract- 550","Abstract- 551","Abstract- 552","Abstract- 553","Abstract- 554","Abstract- 555","Abstract- 556","Abstract- 557","Abstract- 558","Abstract- 559","Abstract- 56","Abstract- 560","Abstract- 561","Abstract- 562","Abstract- 563","Abstract- 564","Abstract- 57","Abstract- 58","Abstract- 59","Abstract- 6","Abstract- 60","Abstract- 61","Abstract- 62","Abstract- 63","Abstract- 64","Abstract- 65","Abstract- 66","Abstract- 67","Abstract- 68","Abstract- 69","Abstract- 7","Abstract- 70","Abstract- 71","Abstract- 72","Abstract- 73","Abstract- 74","Abstract- 75","Abstract- 76","Abstract- 77","Abstract- 78","Abstract- 79","Abstract- 8","Abstract- 80","Abstract- 81","Abstract- 82","Abstract- 83","Abstract- 84","Abstract- 85","Abstract- 86","Abstract- 87","Abstract- 88","Abstract- 89","Abstract- 9","Abstract- 90","Abstract- 91","Abstract- 92","Abstract- 93","Abstract- 94","Abstract- 95","Abstract- 96","Abstract- 97","Abstract- 98","Abstract- 99"],"Atomic Flowers":["Atomic Flowers- 1","Atomic Flowers- 10","Atomic Flowers- 11","Atomic Flowers- 12","Atomic Flowers- 13","Atomic Flowers- 14","Atomic Flowers- 15","Atomic Flowers- 16","Atomic Flowers- 17","Atomic Flowers- 18","Atomic Flowers- 19","Atomic Flowers- 2","Atomic Flowers- 20","Atomic Flowers- 21","Atomic Flowers- 22","Atomic Flowers- 23","Atomic Flowers- 24","Atomic Flowers- 25","Atomic Flowers- 26","Atomic Flowers- 27","Atomic Flowers- 28","Atomic Flowers- 29","Atomic Flowers- 3","Atomic Flowers- 30","Atomic Flowers- 31","Atomic Flowers- 32","Atomic Flowers- 33","Atomic Flowers- 34","Atomic Flowers- 35","Atomic Flowers- 36","Atomic Flowers- 37","Atomic Flowers- 38","Atomic Flowers- 39","Atomic Flowers- 4","Atomic Flowers- 40","Atomic Flowers- 41","Atomic Flowers- 42","Atomic Flowers- 43","Atomic Flowers- 44","Atomic Flowers- 45","Atomic Flowers- 46","Atomic Flowers- 47","Atomic Flowers- 5","Atomic Flowers- 6","Atomic Flowers- 7","Atomic Flowers- 8","Atomic Flowers- 9"],"Freedom":["Freedom- 1","Freedom- 10","Freedom- 11","Freedom- 12","Freedom- 13","Freedom- 14","Freedom- 15","Freedom- 16","Freedom- 17","Freedom- 18","Freedom- 19","Freedom- 2","Freedom- 20","Freedom- 21","Freedom- 22","Freedom- 23","Freedom- 24","Freedom- 25","Freedom- 26","Freedom- 27","Freedom- 28","Freedom- 29","Freedom- 3","Freedom- 30","Freedom- 31","Freedom- 32","Freedom- 33","Freedom- 34","Freedom- 35","Freedom- 36","Freedom- 37","Freedom- 38","Freedom- 39","Freedom- 4","Freedom- 40","Freedom- 41","Freedom- 42","Freedom- 43","Freedom- 44","Freedom- 45","Freedom- 46","Freedom- 47","Freedom- 48","Freedom- 49","Freedom- 5","Freedom- 50","Freedom- 51","Freedom- 52","Freedom- 53","Freedom- 54","Freedom- 55","Freedom- 56","Freedom- 57","Freedom- 58","Freedom- 59","Freedom- 6","Freedom- 60","Freedom- 61","Freedom- 62","Freedom- 63","Freedom- 7","Freedom- 8","Freedom- 9"],"Fusion":["Fusion- 1","Fusion- 10","Fusion- 11","Fusion- 12","Fusion- 13","Fusion- 14","Fusion- 15","Fusion- 16","Fusion- 17","Fusion- 18","Fusion- 19","Fusion- 20","Fusion- 21","Fusion- 22","Fusion- 23","Fusion- 24","Fusion- 25","Fusion- 26","Fusion- 27","Fusion- 28","Fusion- 29","Fusion- 3","Fusion- 30","Fusion- 31","Fusion- 32","Fusion- 33","Fusion- 34","Fusion- 35","Fusion- 36","Fusion- 37","Fusion- 38","Fusion- 39","Fusion- 4","Fusion- 40","Fusion- 41","Fusion- 42","Fusion- 43","Fusion- 44","Fusion- 45","Fusion- 5","Fusion- 6","Fusion- 7","Fusion- 8","Fusion- 9"],"Green Landscape":["Green Landscape- 10","Green Landscape- 11","Green Landscape- 12","Green Landscape- 13","Green Landscape- 14","Green Landscape- 15","Green Landscape- 16","Green Landscape- 17","Green Landscape- 18","Green Landscape- 19","Green Landscape- 2","Green Landscape- 20","Green Landscape- 21","Green Landscape- 22","Green Landscape- 23","Green Landscape- 24","Green Landscape- 25","Green Landscape- 26","Green Landscape- 27","Green Landscape- 28","Green Landscape- 29","Green Landscape- 3","Green Landscape- 30","Green Landscape- 31","Green Landscape- 32","Green Landscape- 33","Green Landscape- 34","Green Landscape- 35","Green Landscape- 36","Green Landscape- 37","Green Landscape- 38","Green Landscape- 39","Green Landscape- 4","Green Landscape- 40","Green Landscape- 41","Green Landscape- 42","Green Landscape- 43","Green Landscape- 44","Green Landscape- 45","Green Landscape- 46","Green Landscape- 47","Green Landscape- 48","Green Landscape- 49","Green Landscape- 5","Green Landscape- 50","Green Landscape- 51","Green Landscape- 6","Green Landscape- 7","Green Landscape- 8","Green Landscape- 9"],"Pastel Eyes":["Pastel Eyes- 1","Pastel Eyes- 10","Pastel Eyes- 11","Pastel Eyes- 12","Pastel Eyes- 13","Pastel Eyes- 14","Pastel Eyes- 15","Pastel Eyes- 16","Pastel Eyes- 17","Pastel Eyes- 18","Pastel Eyes- 19","Pastel Eyes- 2","Pastel Eyes- 20","Pastel Eyes- 21","Pastel Eyes- 22","Pastel Eyes- 23","Pastel Eyes- 24","Pastel Eyes- 25","Pastel Eyes- 26","Pastel Eyes- 27","Pastel Eyes- 28","Pastel Eyes- 29","Pastel Eyes- 3","Pastel Eyes- 30","Pastel Eyes- 31","Pastel Eyes- 4","Pastel Eyes- 5","Pastel Eyes- 6","Pastel Eyes- 7","Pastel Eyes- 8","Pastel Eyes- 9"],"Stoic":["Stoic- 1","Stoic- 10","Stoic- 100","Stoic- 101","Stoic- 102","Stoic- 103","Stoic- 104","Stoic- 105","Stoic- 106","Stoic- 107","Stoic- 108","Stoic- 109","Stoic- 11","Stoic- 110","Stoic- 111","Stoic- 112","Stoic- 113","Stoic- 114","Stoic- 115","Stoic- 116","Stoic- 117","Stoic- 118","Stoic- 119","Stoic- 12","Stoic- 120","Stoic- 121","Stoic- 122","Stoic- 123","Stoic- 124","Stoic- 125","Stoic- 126","Stoic- 127","Stoic- 128","Stoic- 129","Stoic- 13","Stoic- 130","Stoic- 131","Stoic- 132","Stoic- 133","Stoic- 134","Stoic- 135","Stoic- 136","Stoic- 137","Stoic- 138","Stoic- 139","Stoic- 14","Stoic- 140","Stoic- 141","Stoic- 142","Stoic- 143","Stoic- 144","Stoic- 145","Stoic- 146","Stoic- 147","Stoic- 148","Stoic- 149","Stoic- 15","Stoic- 150","Stoic- 151","Stoic- 152","Stoic- 153","Stoic- 154","Stoic- 155","Stoic- 156","Stoic- 157","Stoic- 158","Stoic- 159","Stoic- 16","Stoic- 160","Stoic- 161","Stoic- 162","Stoic- 163","Stoic- 164","Stoic- 165","Stoic- 166","Stoic- 167","Stoic- 168","Stoic- 169","Stoic- 17","Stoic- 170","Stoic- 18","Stoic- 19","Stoic- 2","Stoic- 20","Stoic- 21","Stoic- 22","Stoic- 23","Stoic- 24","Stoic- 25","Stoic- 26","Stoic- 27","Stoic- 28","Stoic- 29","Stoic- 3","Stoic- 30","Stoic- 31","Stoic- 32","Stoic- 33","Stoic- 34","Stoic- 35","Stoic- 36","Stoic- 37","Stoic- 38","Stoic- 39","Stoic- 4","Stoic- 40","Stoic- 41","Stoic- 42","Stoic- 43","Stoic- 44","Stoic- 45","Stoic- 46","Stoic- 47","Stoic- 48","Stoic- 49","Stoic- 5","Stoic- 50","Stoic- 51","Stoic- 52","Stoic- 53","Stoic- 54","Stoic- 55","Stoic- 56","Stoic- 57","Stoic- 58","Stoic- 59","Stoic- 6","Stoic- 60","Stoic- 61","Stoic- 62","Stoic- 63","Stoic- 64","Stoic- 65","Stoic- 66","Stoic- 67","Stoic- 68","Stoic- 69","Stoic- 7","Stoic- 70","Stoic- 71","Stoic- 72","Stoic- 73","Stoic- 74","Stoic- 75","Stoic- 76","Stoic- 77","Stoic- 78","Stoic- 79","Stoic- 8","Stoic- 80","Stoic- 81","Stoic- 82","Stoic- 83","Stoic- 84","Stoic- 85","Stoic- 86","Stoic- 87","Stoic- 88","Stoic- 89","Stoic- 9","Stoic- 90","Stoic- 91","Stoic- 92","Stoic- 93","Stoic- 94","Stoic- 95","Stoic- 96","Stoic- 97","Stoic- 98","Stoic- 99"],"UFO":["UFO- 1","UFO- 10","UFO- 100","UFO- 101","UFO- 102","UFO- 103","UFO- 11","UFO- 12","UFO- 13","UFO- 14","UFO- 15","UFO- 16","UFO- 17","UFO- 18","UFO- 19","UFO- 2","UFO- 20","UFO- 21","UFO- 22","UFO- 23","UFO- 24","UFO- 25","UFO- 26","UFO- 27","UFO- 28","UFO- 29","UFO- 3","UFO- 30","UFO- 31","UFO- 32","UFO- 33","UFO- 34","UFO- 35","UFO- 36","UFO- 37","UFO- 38","UFO- 39","UFO- 4","UFO- 40","UFO- 41","UFO- 42","UFO- 43","UFO- 44","UFO- 45","UFO- 46","UFO- 47","UFO- 48","UFO- 49","UFO- 5","UFO- 50","UFO- 51","UFO- 52","UFO- 53","UFO- 54","UFO- 55","UFO- 56","UFO- 57","UFO- 58","UFO- 59","UFO- 6","UFO- 60","UFO- 61","UFO- 62","UFO- 63","UFO- 64","UFO- 65","UFO- 66","UFO- 67","UFO- 68","UFO- 69","UFO- 7","UFO- 70","UFO- 71","UFO- 72","UFO- 73","UFO- 74","UFO- 75","UFO- 76","UFO- 77","UFO- 78","UFO- 79","UFO- 8","UFO- 80","UFO- 81","UFO- 82","UFO- 83","UFO- 84","UFO- 85","UFO- 86","UFO- 87","UFO- 88","UFO- 89","UFO- 9","UFO- 90","UFO- 91","UFO- 92","UFO- 93","UFO- 94","UFO- 95","UFO- 96","UFO- 97","UFO- 98","UFO- 99"]}
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
	await sleep(600);

	const folder = artworks[folderName];
	for (let i = 0; i < folder.length; i++) {
		const imageName = folder[i];
		const image = document.createElement('img');
		image.src = `${urlprefix}/artworks/${folderName}/${imageName}.webp`;
		gallery.appendChild(image);
	};

	// Wait for the gallery to be filled
	await sleep(400);

	gallery.classList.add('fade-in');
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
