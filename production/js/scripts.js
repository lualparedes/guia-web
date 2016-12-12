$(document).ready(function(){

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
$('.search').click(function(){
	// calculate available space and put proper bg
	if (window.matchMedia('(min-width: 840px)').matches) {
		var avaHeaderSpace = $('header').width() - 149;
		$('.search .in').css('background','#fff');
	} else {
		var avaHeaderSpace = $('header').width() - 197;
	}
	// define width
	$(this).css('width',avaHeaderSpace+'px');
});
$(document).click(function(event) { 
    if(!$(event.target).closest('.search').length) {
        $('.search').css('width','');
        $('.search .in').css('background','');
    }        
})

/*---- Scroller ----*/
$('.jumbotron .btn').click(function(){
	scroller(this);
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