$(function(){

	var SliderModule = (function(){
		var pb = {};
		pb.el = $('#slider');
		pb.items = 	{
			panel: pb.el.find('li')	
		}

		//Variables
		var SliderInterval,
			currentSlider=0,
			nextSlider=1,	
			lengthSlider=pb.items.panel.length;

		//Initialize
		pb.init = function(settings){
			this.settings = settings || {duration: 6000};
			var output = '';

			//console.log('Initialize');
			//Active the slider
			SliderInit();

			//Create dynamic controls
			for (var i=0; i < lengthSlider; i++){
				if (i == 0){
					output+='<li class="active"></li>';
				}else{
					output += "<li></li>";
				}
			}

			$('#slider-controls').html(output).on('click','li',function(e){
				var $this = $(this);
				changePanel($this.index());

				if (currentSlider !== $this.index()){
					changePanel($this.index())
				}
				//console.log($this.index());
			});

			$('#slider-arrows').on('click','li',function(e){
				var $this = $(this);
				console.log($this);

				if($this.index()==0){
					changePanel(currentSlider-1);
				}else{
					changePanel(currentSlider+1);
				}

			});
		}

		var SliderInit = function(){
			SliderInterval = setInterval(pb.startSlider,pb.settings.duration);
		}

		pb.startSlider = function(){

			var panels = pb.items.panel,
				controls = $('#slider-controls li');

			//console.log("Testing interval...");
			if (nextSlider >= lengthSlider){
				nextSlider = 0;
				currentSlider = lengthSlider-1;
			}

			//Effects
			controls.removeClass('active').eq(currentSlider).addClass('active');
			panels.eq(currentSlider).fadeOut('slow');
			panels.eq(nextSlider).fadeIn('slow');

			//console.log("currentSlider: "+currentSlider);
			//console.log("nextSlider: "+nextSlider);

			currentSlider = nextSlider;
			nextSlider+=1;
		}

		//Controls Function
		var changePanel = function (id) {
			clearInterval(SliderInterval);
			var panels = pb.items.panel,
				controls = $('#slider-controls li');

			//Verify ID
			if (id >= lengthSlider){
				id = 0;
			}else if(id < 0){
				id = lengthSlider - 1;
			}

			//Effects
			controls.removeClass('active').eq(id).addClass('active');
			panels.eq(currentSlider).fadeOut('slow');
			panels.eq(nextSlider).fadeIn('slow');

			console.log("currentSlider: "+currentSlider);
			console.log("nextSlider: "+nextSlider);

			currentSlider = id;
			nextSlider = id+1;

			//Active slider again
			SliderInit();
		};

		return pb;
	}());

	SliderModule.init({duration: 4000});

}());