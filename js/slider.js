$(function(){
	// Slideshow function


	/*<<<<<<<<<<<<<<<<<<< Globals >>>>>>>>>>>>>>>>>>>*/

	var currentPanel, nextPanel,
		sliderInterval, currentIndex = 0, nextIndex = 1,
		sliderLength, arrows, Index;
	
	

	/*--- Slider constructor*/
	var Slider = function(){

		var pb = {};

		pb.slider = $("#slider");
		pb.panels = $('#slider li');
		pb.arrows = $('#slider-arrows');
		pb.Index = $('#index');

		/*<<<<<<<<<<<<<<<<<<<<<<<<<< VARIABLES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
		arrows = $('#slider-arrows li');
		sliderLength = pb.panels.length;
		Index = pb.Index;
		/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


		/*<<<<<<<<<<<<<<<<<<<<<< FUNCIONES y MÉTODOS >>>>>>>>>>>>>>>>>>>>>>>>*/

		pb.init = function (settings){

			this.settings = settings || {duration: 6000};
			Index.text("1/3");


			/* Initialize slider */

			SliderInit()			

			//Manual transition events


			/*>>>>>>>>>>>>>>>>>>>> SWIPE <<<<<<<<<<<<<<<<<<<<<*/
			// $(document).on("pagecreate","#slider",function(){

			//     $("#slider").on("swipeleft",function(e){
					
			//     	alert("swipeLeft");


			// 	});


			// 	("#slider").on("swiperight",function(e){


			// 		alert("swipeRight");


			// 	});

			// });



			/*>>>>>>>>>>>>>>>>>>>> ARROWS <<<<<<<<<<<<<<<<<*/
			arrows[0].addEventListener("click", function (e){

				clearInterval(sliderInterval);

				currentPanel = pb.panels[currentIndex];

				for (var j = 0; j < sliderLength; j++){
					currentPanel.classList.remove("slide-current");
					currentPanel.classList.remove("fade");
				}

				currentIndex--;
				nextIndex--;

				if (currentIndex == -1){
					currentIndex = sliderLength - 1;
					nextIndex = 0;
				}else if (nextIndex == -1){
					nextIndex = 2;
					currentIndex = 1;
				}

				currentPanel = pb.panels[currentIndex];

				currentPanel.classList.add("slide-current");
				currentPanel.classList.add("fade");
				Index.text((currentIndex+1)+"/"+sliderLength);

				SliderInit();

			});

			arrows[1].addEventListener("click", function (e){

				clearInterval(sliderInterval);

				currentPanel = pb.panels[currentIndex];

				for (var j = 0; j < sliderLength; j++){
					currentPanel.classList.remove("slide-current");
					currentPanel.classList.remove("fade");
				}

				currentIndex++;
				nextIndex++;

				if (currentIndex == 3){
					currentIndex = 0;
					nextIndex = currentIndex + 1;
					
				}else if (nextIndex == 3){
					nextIndex = 0;
					currentIndex = sliderLength - 1;
				}

				currentPanel = pb.panels[currentIndex];

				currentPanel.classList.add("slide-current");
				currentPanel.classList.add("fade");
				Index.text((currentIndex+1)+"/"+sliderLength);

				SliderInit();

			});


		};

		var SliderInit = function (){

			sliderInterval = setInterval(pb.slide,pb.settings.duration);
		};

		pb.slide = function (){

			if (nextIndex == sliderLength){
				nextIndex = 0;
				currentIndex = sliderLength - 1;
				Index.text(0);
			}

			currentPanel = pb.panels[currentIndex];
			nextPanel = pb.panels[nextIndex];
			
			nextPanel.classList.add("slide-current");
			nextPanel.classList.add("fade");
			currentPanel.classList.remove("slide-current");		
			currentPanel.classList.remove("fade");
			Index.text((nextIndex+1)+"/"+sliderLength);



			currentIndex = nextIndex;
			nextIndex++;
			
		};

		return pb;

	};

	var sliderModule = new Slider();


	sliderModule.init({duration: 4000});

});