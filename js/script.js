
$(document).ready(function () {

	var temp = $('#word').text();

	temp = temp.split(''); 

	var rand = Math.random() * temp.length;
	rand = Math.floor(rand);

	temp[rand] = "_";

	temp = temp.join('');

	$('#word').text(temp)



	

	
})

