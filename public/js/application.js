$(document).ready(function() {
  $(function() {
    //VALIDACIONES EN EL CLIENTE JQUERY
  	var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  	var passreg= /(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?![.\n])((?=.*\d)|(?=.*\W+))(?=.*[a-z]).*/
  	$(".boton").click(function(){
  		$(".error").fadeOut().remove();

  		if ($(".nombre").val() == "") {
  			$(".nombre").focus().after('<span class="error">Ingrese su nombre</span>');
  			return false;
  		}

  		if ($(".email").val() == "" || !emailreg.test($(".email").val())) {
  			$(".email").focus().after('<span class="error">Ingrese un email correcto</span>');
  			return false;
  		}

  		if ($(".pass").val() == "" || !passreg.test($(".pass").val())){
  			$(".pass").focus().after('<span class="error">Ingrese un password con almenos un numero , mayor a 8 caracteres y una mayuscula</span>');
  			return false;
  		}
  	});

  	$(".nombre").bind('blur keyup', function(){
  		if ($(this).val() != "") {
  			$('.error').fadeOut();
  			return false;
  		}
  	});

  	$(".email").bind('blur keyup', function(){
  		if ($(".email").val() != "" && emailreg.test($(".email").val())) {
  			$('.error').fadeOut();
  			return false;
  		}
  	});

  	$(".pass").bind('blur keyup', function(){
  		if ($(".pass").val() != "" && passreg.test($(".pass").val()) && ($(".pass").val().length >=8)) {
  			$('.error').fadeOut();
  			return false;
  		}
  	});

  });

  //apuntes
  // Método bind() para definir cualquier tipo de evento
  // Con el método bind() podemos definir de una manera genérica cualquier tipo de evento,
  // o incluso un mismo manejador de eventos para distintos tipos de eventos distintos.
  // El uso más habitual de este método es el siguiente:
  //				 bind(tipo_de_evento, manejador)


  // jQuery blur(), su funcionalidad es la detección de la pérdida del foco en los diferentes
  //  elementos del DOM de una página web. El evento opuesto es jQuery focus().

//CARROUSEL
//https://www.youtube.com/watch?v=I00i_NmLSzw
  var SliderModule = (function() {
  	 	var pb = {};
  	 	pb.el = $('#slider');
  	 	pb.items = {
  	 		panels: pb.el.find('.slider-wrapper > li'),
  	 	}
  	 	// Interval del Slider Variables
  	 	var SliderInterval,
  	 		currentSlider = 0,
  	 		nextSlider = 1,
  	 		lengthSlider = pb.items.panels.length;

  	 	// Constructor del Slider
  	 	pb.init = function(settings) {
        //console.log('Inicializado';)
  	 		this.settings = settings || {duration: 8000};
  	 		var items = this.items,
  	 			lengthPanels = items.panels.length,
  	 			output = '';

  	 		// Insertamos nuestros botones
  	 		for(var i = 0; i < lengthPanels; i++) {
  	 			if(i == 0) {
  	 				output += '<li class="active"></li>';
  	 			} else {
  	 				output += '<li></li>';
  	 			}
  	 		}

  	 		$('#control-buttons').html(output);

  	 		// Activamos nuestro Slider
  	 		activateSlider();
  	 		// Eventos para los controles
  	 		$('#control-buttons').on('click', 'li', function(e) {
  	 			var $this = $(this);
  	 			if(!(currentSlider === $this.index())) {
  	 				changePanel($this.index());
  	 			}
  	 		});

  	 	}

  	 	// Funcion para activar el Slider
  	 	var activateSlider = function() {
  	 		SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
  	 	}

  	 	// Funcion para la Animacion
  	 	pb.startSlider = function() {
  	 		var items = pb.items,
  	 			controls = $('#control-buttons li');
  	 		// Comprobamos si es el ultimo panel para reiniciar el conteo
  	 		if(nextSlider >= lengthSlider) {
  	 			nextSlider = 0;
  	 			currentSlider = lengthSlider-1;
  	 		}

  	 		controls.removeClass('active').eq(nextSlider).addClass('active');
  	 		items.panels.eq(currentSlider).fadeOut('slow');
  	 		items.panels.eq(nextSlider).fadeIn('slow');

  	 		// Actualizamos los datos del slider
  	 		currentSlider = nextSlider;
  	 		nextSlider += 1;
  	 	}

  	 	// Funcion para Cambiar de Panel con Los Controles
  	 	var changePanel = function(id) {
  	 		clearInterval(SliderInterval);
  	 		var items = pb.items,
  	 			controls = $('#control-buttons li');
  	 		// Comprobamos si el ID esta disponible entre los paneles
  	 		if(id >= lengthSlider) {
  	 			id = 0;
  	 		} else if(id < 0) {
  	 			id = lengthSlider-1;
  	 		}

  	 		controls.removeClass('active').eq(id).addClass('active');
  	 		items.panels.eq(currentSlider).fadeOut('slow');
  	 		items.panels.eq(id).fadeIn('slow');

  	 		// Volvemos a actualizar los datos del slider
  	 		currentSlider = id;
  	 		nextSlider = id+1;
  	 		// Reactivamos nuestro slider
  	 		activateSlider();
  	 	}

  		return pb;
  	 }());

  	 SliderModule.init({duration: 4000});


});
