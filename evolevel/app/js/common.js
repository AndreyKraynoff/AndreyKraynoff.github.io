
$(function() {
	$()
	comp = $('.comp_bg').height();
	$('.composition-text-smm').css({'min-height': +comp+'px'});

	$(window).resize(function(){
		comp = $('.comp_bg').height();
		$('.composition-text-smm').css({'min-height': +comp+'px'});
	});

	$('.form-wrapper').mCustomScrollbar({theme:"dark",mouseWheelPixels: 150,scrollInertia: 300});

	$('.form-wrapper').after().on( "click", function() {
		$.magnificPopup.close();
	});
//$(".phone_write_us").mask("+7(999)-999-99-99");


$('.popup-content').magnificPopup({
	type: 'inline'
});

$.mask.definitions['~']='[+-]';
$('#phone_write_us').mask('+7(999)-999-9999');

$("#form").submit(function() {
	p  =	$('#phone_write_us').val();
	if (p=='') {alert('Введите ваш номер'); return false;}
	else{

		if($("#agree").is(':checked')) { 
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				$.magnificPopup.open({
					items: {
						src: '#thank_you'
					},
					type: 'inline'
				});
				$("#form").trigger("reset");
			});
			return false;
		}
		else{
			window.alert('Дайте свое согласие на обработку данных!');
			$("#agree").css('border', '1px solid red');
			return false;
		}

	}
});



});
