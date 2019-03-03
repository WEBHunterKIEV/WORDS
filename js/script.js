
$(document).ready(function () {

	var temp = $('#word').text();

	temp = temp.split(''); 

	var rand = Math.random() * temp.length;
	rand = Math.floor(rand);

	var randA = temp[rand];


	

	
})

