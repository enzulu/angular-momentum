isInvalid = function(donateValue) {
	donateValue = Number(donateValue);
	return (isNaN(donateValue) || donateValue < 0);
}

$(document).ready(function() {
	var donateGoal = window.prompt('What is your monetary goal?');
		while (isInvalid(donateGoal)){
			donateGoal = prompt('Nope. What is your monetary goal?');
		}
	$('#goalHeader').html("GOAL: $" + donateGoal);
	var donateTotal = 0; // donateTotal value should be stored in backend
	$('#totalHeader').html("TOTAL: $" + donateTotal);

	$('#donateButton').click(function() {
		
		var moneyAmount = $('#donateMoney').val();
		
		if (isInvalid(moneyAmount)) {
			alert("Your donation is invalid.");
			return;
		}
		/*
		var donateDeets = $('#donateName').val() + " - $" + $('#donateMoney').val();
		$('#donateList').append("<li>" + donateDeets + "</li>");
		*/
		var addToTable = "<tr><td>" + $(donateName).val() + "</td><td>" + $(donateMoney).val() + "</td></tr>";
		$('#donateList').append(addToTable);
		donateTotal += Number(moneyAmount);
		$('#totalHeader').html("TOTAL: $" + donateTotal);
		$('input').val("");

		var goalPercent = (donateTotal/donateGoal)*100;
		$('#goalBar').css('width',goalPercent + '%');
		if (goalPercent >= 100) {
			alert("you have achieved.");
			goalPercent = 100;
		}
	});
});
