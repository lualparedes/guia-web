(function(){
	// Slideshow function


	/*<<<<<<<<<<<<<<<<<<< Globals >>>>>>>>>>>>>>>>>>>*/

	var currentPanel, nextPanel,
		sliderInterval, currentIndex = 0, nextIndex = 1,
		sliderLength, arrows, Index;
	
	

	/*--- Slider constructor*/
	var Slider = function(){

		var pb = {};

		/*
			Traemos el slider del ul contenedor de los elementos del slider
		*/

		pb.slider = document.getElementById("slider");//slider es un elemento ul

		pb.panels = slider.getElementsByTagName('li');
		pb.arrows = document.getElementById('slider-arrows');
		pb.Index = document.getElementById('index');

		/*<<<<<<<<<<<<<<<<<<<<<<<<<< VARIABLES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
		arrows = pb.arrows.getElementsByTagName('li');
		sliderLength = pb.panels.length;
		Index = pb.Index;

		/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


		/*<<<<<<<<<<<<<<<<<<<<<< FUNCIONES y MÉTODOS >>>>>>>>>>>>>>>>>>>>>>>>*/

		pb.init = function (settings){

			this.settings = settings || {duration: 6000};
			Index.innerHTML = "1/3";

			/* Esta función incializa el slider */

			SliderInit()//Activamos el intervalo de transición			

			//Eventos de transición manual

			console.log(Index);


			/*>>>>>>>>>> Usando las arrows <<<<<<<<<<<*/
			arrows[0].addEventListener("click", function (e){

				clearInterval(sliderInterval);

				for (var j = 0; j < sliderLength; j++){
					pb.panels[currentIndex].classList.remove("slide-current");
					pb.panels[currentIndex].classList.remove("fade");
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


				pb.panels[currentIndex].classList.add("slide-current");
				pb.panels[currentIndex].classList.add("fade");
				Index.innerHTML = (currentIndex+1) +"/"+(sliderLength);

				SliderInit();

			});

			arrows[1].addEventListener("click", function (e){

				clearInterval(sliderInterval);

				for (var j = 0; j < sliderLength; j++){
					pb.panels[currentIndex].classList.remove("slide-current");
					pb.panels[currentIndex].classList.remove("fade");
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

				pb.panels[currentIndex].classList.add("slide-current");
				pb.panels[currentIndex].classList.add("fade");
				Index.innerHTML = (currentIndex+1) +"/"+(sliderLength);

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
				Index.innerHTML = 0;
			}

			currentPanel = pb.panels[currentIndex];
			nextPanel = pb.panels[nextIndex];
			
			nextPanel.classList.add("slide-current");
			nextPanel.classList.add("fade");
			currentPanel.classList.remove("slide-current");		
			currentPanel.classList.remove("fade");
			Index.innerHTML = (parseInt(Index.innerHTML)+1 )+"/"+sliderLength;


			currentIndex = nextIndex;
			nextIndex++;
			
		};

		return pb;

	};

	var sliderModule = new Slider();


	sliderModule.init({duration: 4000});

}());