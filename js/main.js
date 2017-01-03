var lang_status = 0;
var click_status = 1;

$(document).ready(function() {

	$('#lang_select').click(
		function () {


		if (lang_status == 0 && click_status == 0) {

			$('.header_menu_lang_box').show();
			lang_status = 1;

		} else {

			$('.header_menu_lang_box').hide();
			lang_status = 0;
		}


	});
	//Formulario prueba.html
	function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
	}
	$('.main_body_programs_list_element').click(
		function () {

		var which_program = $(this).hasClass('program_active');

		var which_program_1 = $(this).hasClass('program_1');
		var which_program_2 = $(this).hasClass('program_2');
		var which_program_3 = $(this).hasClass('program_3');
		var which_program_4 = $(this).hasClass('program_4');

		if(which_program) {

		} else {

			$('.main_body_programs_list_element').removeClass('program_active');
			$(this).addClass('program_active');

		}

		if (which_program_1) {

			$('.main_body_programs_content').fadeOut();

			$.doTimeout( 500, function(){

				$('.main_body_programs_content').empty();
				$('.main_body_programs_content').append('<b>Niños y mujeres en prisión</b><br /><br />En México existen 339 niños que nacen y viven en prisión hasta los seis años.<br /><br />Reinserta, ayuda a que estos niños en crezcan y se desarrollen bajo las mismas condiciones que un niño de su edad lo haría fuera de prisión.<br /><br />Conviértete en un embajador de los niños invisibles y ayúdanos a transformar sus vidas.');

				$('.main_body_programs_content').fadeIn(1000);
			});


		} else if (which_program_2) {

			$('.main_body_programs_content').fadeOut();

			$.doTimeout( 500, function(){

				$('.main_body_programs_content').empty();
				$('.main_body_programs_content').append('<b>Adolescentes en conflicto con la ley</b><br /><br />En México hay 4,959 adolescentes privados de su libertad por haber cometido delitos graves, muchos de ellos, salen de prisión como adultos.<br /><br />Reinserta les ayuda en el proceso de reinserción para alejarlos de la reincidencia y acercarlos a oportunidades que les permitan transformar sus vidas y convertirlos en agentes de cambio que eviten la incorporación de otros adolescentes en actividades delictivas.<br /><br />Conviértete en un agente de cambio, ayudándonos a transformar la vida de estos jóvenes y hacer de México un país más seguro.');

				$('.main_body_programs_content').fadeIn(1000);
			});

		} else if (which_program_3) {

			$('.main_body_programs_content').fadeOut();

			$.doTimeout( 500, function(){

				$('.main_body_programs_content').empty();
				$('.main_body_programs_content').append('<b>Causas justas</b><br /><br />La inseguridad en México está altamente relacionada con la deficiencia de nuestro sistema de justicia.<br /><br />Reinserta lleva el proceso jurídico de personas encarceladas injustamente y se asegura de defender sus derechos para que sean puestos en libertad lo más rápido posible.<br /><br />Para poder progresar como país, tenemos que asegurar que la situación económica de una persona no sea un factor determinante para el acceso a la justicia. Ayúdanos a lograrlo.');


				$('.main_body_programs_content').fadeIn(1000);
			});

		} else if (which_program_4) {

			$('.main_body_programs_content').fadeOut();

			$.doTimeout( 500, function(){

				$('.main_body_programs_content').empty();
				$('.main_body_programs_content').append('<b>Dignificación carcelaria</b><br /><br />En México este es el último eslabón que se contempla en el sistema penitenciario, a pesar de ser uno de los más importantes para lograr un país más seguro. Aún hay un camino largo que recorrer para tener prisiones medianamente funcionales en el país.<br /><br />Reinserta trabaja para que problemas graves como el hacinamiento, condiciones deplorables de las instalaciones y situaciones de autogobierno sean resueltos, para lograr que la reinserción de los reclusos que salen de prisión sea exitosa.<br /><br />Ayúdanos a fortalecer este programa y cambiar a México.');

				$('.main_body_programs_content').fadeIn(1000);
			});

		}


	});

	$('.donate_recur').click(
		function() {

		var btn_status = $(this).hasClass('active_donation');

		if (btn_status == false) {

			$('.main_body_donate').stop(true, false).animate({
					height: "350px"
			});
			$('.main_body_donate_content').stop(true, false).animate({
					height: "265px"
			});

			$('.donate_recur').addClass('active_donation');
			$('.donate_unic').removeClass('active_donation');

			$('.paypal_unic').hide();
			$('.paypal_recu').show(1000);



		} else {

		}

	});

	$('.donate_unic').click(
		function() {

		var btn_status = $(this).hasClass('active_donation');

		if (btn_status == false) {

			$('.main_body_donate').stop(true, false).animate({
					height: "265px"
			});
			$('.main_body_donate_content').stop(true, false).animate({
					height: "180px"
			});

			$('.donate_unic').addClass('active_donation');
			$('.donate_recur').removeClass('active_donation');

			$('.paypal_recu').hide();
			$('.paypal_unic').show();

		} else {

		}

	});

});

$(window).load(function() {

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();

	function resizeBg() {

		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}

	}

	theWindow.resize(resizeBg).trigger("resize");

});

$(document).mouseup(function (e)
{
    var container = $('.header_menu_lang_box');

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {

		if (lang_status == 0) {

			click_status = 0;

		} else {

			container.hide();
			lang_status = 0;
			click_status = 1;
		}


    }
});
