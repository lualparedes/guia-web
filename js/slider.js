(function(){
	// Slideshow function


	/*<<<<<<<<<<<<<<<<<<< Globals >>>>>>>>>>>>>>>>>>>*/

	var panelActual, panelSiguiente,
		sliderInterval, indActual = 0, indSiguiente = 1,
		controlesLi, sliderLength, flechas;
	
	

	/*--- Slider constructor*/
	var Slider = function(){

		var pb = {};

		/*
			Traemos el slider del ul contenedor de los elementos del slider
		*/

		pb.slider = document.getElementById("slider");//slider es un elemento ul

		pb.paneles = slider.getElementsByTagName('li');
		pb.flechas = document.getElementById('slider-arrows');
		pb.controles = document.getElementById('slider-controls');

		/*<<<<<<<<<<<<<<<<<<<<<<<<<< VARIABLES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

		controlesLi = pb.controles;
		flechas = pb.flechas.getElementsByTagName('li');
		sliderLength = pb.paneles.length;

		/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


		//Creamos los controles
		var liElem;

		for (var i = 0; i < sliderLength; i++){
			liElem = document.createElement('li');
			controlesLi.appendChild(liElem);
		}

		//Activamos el primer li
		controlesLi.getElementsByTagName('li')[0].classList.add('active');


		/*<<<<<<<<<<<<<<<<<<<<<< FUNCIONES y MÉTODOS >>>>>>>>>>>>>>>>>>>>>>>>*/

		pb.init = function (settings){

			this.settings = settings || {duration: 6000};

			/* Esta función incializa el slider */

			SliderInit()//Activamos el intervalo de transición			

			//Eventos de transición manual


			/*>>>>>>> Usando los controles <<<<<<<<<*/

			for (i = 0; i < sliderLength; i++){
				controlesLi.getElementsByTagName('li')[i].addEventListener("click",function(e){

					clearInterval(sliderInterval);

					for (var j = 0; j < sliderLength; j++){
						controlesLi.getElementsByTagName('li')[indActual].classList.remove("active");
						pb.paneles[indActual].classList.remove("slide-current");
						pb.paneles[indActual].classList.remove("fade");
					}

					//Hayamos el índice del li actual

					this.classList.add("active");

					for (j = 0; j < sliderLength; j++){

						if (controlesLi.getElementsByTagName('li')[j].classList != ""){
							indActual = j;
						}
					}

					pb.paneles[indActual].classList.add("slide-current");
					pb.paneles[indActual].classList.add("fade");

					indSiguiente = indActual + 1;

					SliderInit();
				});
			}


			/*>>>>>>>>>> Usando las flechas <<<<<<<<<<<*/
			flechas[0].addEventListener("click", function (e){

				clearInterval(sliderInterval);

				for (var j = 0; j < sliderLength; j++){
					controlesLi.getElementsByTagName('li')[indActual].classList.remove("active");
					pb.paneles[indActual].classList.remove("slide-current");
					pb.paneles[indActual].classList.remove("fade");
				}

				indActual--;
				indSiguiente--;

				if (indActual == -1){
					indActual = sliderLength - 1;
					indSiguiente = 0;
				}else if (indSiguiente == -1){
					indSiguiente = 2;
					indActual = 1;
				}


				controlesLi.getElementsByTagName('li')[indActual].classList.add("active");
				pb.paneles[indActual].classList.add("slide-current");
				pb.paneles[indActual].classList.add("fade");

				SliderInit();

			});

			flechas[1].addEventListener("click", function (e){

				clearInterval(sliderInterval);

				for (var j = 0; j < sliderLength; j++){
					controlesLi.getElementsByTagName('li')[indActual].classList.remove("active");
					pb.paneles[indActual].classList.remove("slide-current");
					pb.paneles[indActual].classList.remove("fade");
				}

				indActual++;
				indSiguiente++;

				if (indActual == 3){
					indActual = 0;
					indSiguiente = indActual + 1;
					
				}else if (indSiguiente == 3){
					indSiguiente = 0;
					indActual = sliderLength - 1;
				}


				controlesLi.getElementsByTagName('li')[indActual].classList.add("active");
				pb.paneles[indActual].classList.add("slide-current");
				pb.paneles[indActual].classList.add("fade");

				SliderInit();

			});


		};

		var SliderInit = function (){

			sliderInterval = setInterval(pb.slide,pb.settings.duration);
		};

		pb.slide = function (){

			if (indSiguiente == sliderLength){
				indSiguiente = 0;
				indActual = sliderLength - 1;
			}

			console.log(indActual);
			console.log(indSiguiente);


			panelActual = pb.paneles[indActual];
			panelSiguiente = pb.paneles[indSiguiente];
			
			panelSiguiente.classList.add("slide-current");
			panelSiguiente.classList.add("fade");
			panelActual.classList.remove("slide-current");		
			panelActual.classList.remove("fade");	

			controlesLi.getElementsByTagName('li')[indActual].classList.remove("active");
			controlesLi.getElementsByTagName('li')[indSiguiente].classList.add("active");

			indActual = indSiguiente;
			indSiguiente++;
		};

		return pb;

	};

	var sliderModule = new Slider();


	sliderModule.init({duration: 4000});

}());<<<<<<< HEAD
@import 'buttons';
@import 'footer';
@import 'slider';
=======