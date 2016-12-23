/***** Slider module *****/


/*==== Classes ====*/

/*---- Slide ----*/
function slide(aI, rI) {

	// properties
	this.absoluteIndex = aI;
	this.relativeIndex = rI;

}



/*==== Global variables ====*/

var numOfSlides = $('.slides li').length;



/*==== Initial setup ====*/

/*---- Slide object generation ----*/

for (var i = 0; i < numOfSlides; i++) {
	
	var slide+i = slide(i,i);

	console.log(slide+i);
}