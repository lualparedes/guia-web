$(document).ready(function(){



/***** Slider module *****/


/*==== Classes ====*/

/*---- Slide ----*/
function slide(aI, rI) {

	// properties
	this.absoluteIndex = aI;
	this.relativeIndex = rI;

}



/*==== Global variables ====*/

var numOfSlides = $('.slider li').length;
var swipeArea = $('.slider');
    swipeArea = new Hammer(swipeArea[0]);
var slides = [];
var numOfPrevSlides;
var numOfNextSlides;
var viewportWidth;

/*==== Functions ====*/

function setInitIndexes() {
	// set relative indexes
	for (var i = 1; i <= numOfPrevSlides; i++) {
		slides[numOfSlides-i].relativeIndex = -i;
	}
}

function setSlidesPos() {
	// set proper styles (left value)
	viewportWidth = $(window).width();
	for (var i = 0; i < numOfSlides; i++) {
		$('.slide:nth-child('+(i+1)+')').css('left', slides[i].relativeIndex*viewportWidth + 'px');
	}
}

function prevSlide() {

	// reset indexes (the logic is counterintuitive)
	// think of it as when scrolling: you browse down but the page goes up
	for (var i = 0; i < numOfSlides; i++) {

		var currentIndex = slides[i].relativeIndex; // it reflects the state before the movement
		var aI = slides[i].absoluteIndex;

		// avoid flashes
		// hide the crossing of the last
		if (currentIndex == (numOfPrevSlides+1) && numOfSlides%2 == 0) {
			$('.slide:nth-child('+(i+1)+')').css('z-index','-1');
		} else if (currentIndex == numOfPrevSlides && numOfSlides%2 != 0) {
			$('.slide:nth-child('+(i+1)+')').css('z-index','-1');
		}
		// restore the previous last 
		if (currentIndex == -numOfPrevSlides) {	
			$('.slide:nth-child('+(i+1)+')').css('z-index','');
		}

		// change the slides
		if (currentIndex <= numOfPrevSlides && numOfSlides%2 == 0) {// # prev slides = # next slides +1 (even n)
			slides[i].relativeIndex = currentIndex + 1;
		} else if (currentIndex < numOfPrevSlides) {// # prev slides = # next slides (odd n)
			slides[i].relativeIndex = currentIndex + 1;
		} else {
			slides[i].relativeIndex = -numOfPrevSlides;
		}

		// change pagination
		if (currentIndex == -1) {
			$('.slider-pagination span:nth-child('+(aI+1)+')').addClass('current');
		} else {
			$('.slider-pagination span:nth-child('+(aI+1)+')').removeClass('current');
		}

	}

	// apply styles
	setSlidesPos();
}

function nextSlide() {

	// reset indexes
	for (var i = 0; i < numOfSlides; i++) {

		var currentIndex = slides[i].relativeIndex; // it reflects the state before the movement
		var aI = slides[i].absoluteIndex;	

		// avoid flashes
		// hide the crossing of the first
		if (currentIndex == -numOfPrevSlides) {
			$('.slide:nth-child('+(i+1)+')').css('z-index','-1');
		}
		// restore the previous first 
		if (slides[i].relativeIndex == numOfPrevSlides) {
			$('.slide:nth-child('+(i+1)+')').css('z-index','0');
		}
				
		// change the slides
		if (currentIndex >= -numOfPrevSlides && numOfSlides%2 == 0) {// # prev slides = # next slides +1 (even n)
			slides[i].relativeIndex = currentIndex - 1;
		} else if (currentIndex > -numOfPrevSlides) {// # prev slides = # next slides (odd n)
			slides[i].relativeIndex = currentIndex - 1;
		} else {
			slides[i].relativeIndex = numOfPrevSlides;
		}

		// change pagination
		if (currentIndex == 1) {
			$('.slider-pagination span:nth-child('+(aI+1)+')').addClass('current');
		} else {
			$('.slider-pagination span:nth-child('+(aI+1)+')').removeClass('current');
		}

	}

	// apply styles
	setSlidesPos();

}


/*==== Initial setup ====*/

/*---- Slide object generation ----*/

for (var i = 0; i < numOfSlides; i++) {
	var thisSlide = new slide(i,i);
	slides.push(thisSlide);
}



/*---- Ordering the slides ----*/
// calculte how many slides go after current one (rI = 0)
// and how many go before current one

if (numOfSlides%2 == 0) { // even number of slides

	numOfPrevSlides = numOfSlides/2 - 1;
	numOfNextSlides = numOfPrevSlides + 1;
	setInitIndexes();
	setSlidesPos();

} else { // odd number of slides

	numOfPrevSlides = Math.floor(numOfSlides/2);
	numOfNextSlides = numOfPrevSlides;
	setInitIndexes();
	setSlidesPos();

}

/*---- Generate pagination ----*/
for (var i = 0; i < numOfSlides; i++) {
	$('.slider-pagination').append('<span></span>');
}
$('.slider-pagination span:first-child').addClass('current');


/*---- Autoslide ----
setInterval(function(){

	

}, 2000);*/

/*---- Prev slide ----*/
$('.slider-prev').click(function(){
	prevSlide();
});
swipeArea.on('swiperight', function(){
	prevSlide();
});

/*---- Next slide ----*/
$('.slider-next').click(function(){
	nextSlide();
});
swipeArea.on('swipeleft', function(){
	nextSlide();
});

























/*==== Functions ====*/

// Scroller
// ON: click
function scroller(btn) {
	//var btn = button;
	var target = $(btn).attr('data-target');
	    target = '.'+target;
	var targetOffset = $(target).offset().top;
	// scroll there
	$('html,body').animate({
		scrollTop: targetOffset
	}, 'slow');
}

// Close box
// ON: click 
function closeBox(e) {
	var box = $(e).parent();
	box.slideUp('fast');
}



/*==== On click ====*/

/*---- Menu drawer ----*/
$('.nav-trigger').click(function(){
	if ($(this).hasClass('open')) {
		// change icon
		$(this).toggleClass('open');
		// move stuff
		$('.content').css('left','');
		$('header').css('left','');
		$('.drawer').css('right', '');
	} else {
		// change icon
		$(this).toggleClass('open');
		// calculate the movement
		var displaceX = $(window).width() - 48;
		// move stuff
		$('.content').css('left','-'+displaceX+'px');
		$('header').css('left','-'+displaceX+'px');
		$('.drawer').css('right', '-48px');
	}
});

/*---- Search ----*/
$('.search').click(function(){ // open search box
	// calculate available space and put proper bg
	if (window.matchMedia('(min-width: 840px)').matches) {
		var avaHeaderSpace = $('header').width() - 149;
		$('.search .in').css('background','#fff');
	} else {
		var avaHeaderSpace = $('header').width() - 197;
	}
	// hide mask
	$('.search-mask').css('display','none');
	// focus on input
	$('#search-box').focus();
	// define width
	$(this).css('width',avaHeaderSpace+'px');
});
$(document).click(function(event) { // close search box
    if(!$(event.target).closest('.search').length) {
        $('.search').css('width','');
        $('.search .in').css('background','');
        // show mask
        $('.search-mask').css('display','');
    }        
})

/*---- Scroller ----*/
$('.jumbotron .btn').click(function(){
	scroller(this);
});

/*---- Close box ----*/
$(document).on('click', '.close', function() {
	closeBox(this);
});


/*==== On resize ====*/
$(window).resize(function(){

	/*---- Menu drawer ----*/
	// adjust stuff if the drawer is displayed
	if ($('.nav-trigger').hasClass('open')) {
			// styles for desktop
		if (window.matchMedia('(min-width: 840px)').matches) {
			// change icon
			$('.nav-trigger').toggleClass('open');
			// move stuff
			$('.content').css('left','');
			$('header').css('left','');
			$('.drawer').css('right', '');
		} else {
			// styles to adjust while resizing
			// recalculate the movement
			var displaceX = $(window).width() - 48;
			// move stuff
			$('.content').css('left','-'+displaceX+'px');
			$('header').css('left','-'+displaceX+'px');
			$('.drawer').css('right', '-48px');
		}
	}

	/*---- Search ----*/
	if ($('.search').width() != 48) {
		// recalculate available space and put proper bg
		if (window.matchMedia('(min-width: 840px)').matches) {
			var avaHeaderSpace = $('header').width() - 149;
			$('.search .in').css('background','#fff');
		} else {
			var avaHeaderSpace = $('header').width() - 197;
			$('.search .in').css('background','');
		}
		// update width
		$('.search').css('width',avaHeaderSpace+'px');
	}
	
});


});