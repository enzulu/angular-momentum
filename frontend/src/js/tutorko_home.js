$(document).ready(function() {
	var personIndex = 0;
	$('#addPerson').click(function() {
		personIndex++;
		var ranAv = Math.round(Math.random()*2)+1;
		var ranExp;
		switch(ranAv) {
			case 1:
				ranExp="Physics";
				break;
			case 2:
				ranExp="Math";
				break;
			case 3:
				ranExp="English";
				break;
		}

		var formatPerson = "<div class='row-fluid well tutor"+ranExp+"'>"+
								"<div class='span1'>"+
									"<img src='/lib/bootstrap/img/av"+ranAv+".png' class='img-polaroid'/>"+
								"</div>"+	
								"<div class='span6'>"+
									"<h5>"+ranExp+" Pro"+personIndex+"</h3>"+
								"</div>"+
								"<div class='span3'>"+
									"<button class='btn'>See Cred</button>"+
								"</div>"+	
								"<div class='span2'>"+
									"<button class='btn btn-primary'>Connect!</button>"+
								"</div>"+
							"</div>";	

		$('#homeList').append(formatPerson);
	});

	$('#btnAll').click(function() {
		$('#homeList').children().show('100');
		return false;
	});
	$('#btnPhysics').click(function() {
		$('#homeList').children().show();
		$('.tutorMath').slideToggle('fast');
		$('.tutorEnglish').slideToggle('fast');
		return false;
	});
	$('#btnMath').click(function() {
		$('#homeList').children().show();
		$('.tutorPhysics').slideToggle('fast');
		$('.tutorEnglish').slideToggle('fast');
		return false;
	});
	$('#btnEnglish').click(function() {
		$('#homeList').children().show();
		$('.tutorMath').slideToggle('fast');
		$('.tutorPhysics').slideToggle('fast');
		return false;
	});

});
