/* CAROUSEL*/
let carouselWidth = 400; 
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");
let imageNum = 0

/*NEXT*/
function showNextImage() {
	// change imageNum
	imageNum = imageNum + 1;
	// how many pixels from the left should imageRow now be?
	let newWidth = (carouselWidth * imageNum) * -1;
	// change css for imageRow
	imageRow.style.left = newWidth + "px";
	checkControls()
}
nextButton.onclick = showNextImage; 

/* TOTAL IMAGES */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* CONTROLS*/
function checkControls() {
	if (imageNum == 2) {
		nextButton.classList.add('hidden');
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove('hidden');
	}
}

