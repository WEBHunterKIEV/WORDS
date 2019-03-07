
$(document).ready(function () {

	var word = $('#word').text();

	word = word.split(''); 

	var rand = Math.random() * word.length;
	rand = Math.floor(rand);

	randLetter = word[rand];

	word[rand] = "_";

	word = word.join('');

	$('#word').text(word)

	//---------------------------------

	$('.keyboard').click(function(e) {

		

		//--------------------------------------

		if (e.target.innerText == randLetter) {
			alert('Yes')
		} else {
			alert('no')
		}

		//console.log(e.target.innerText + " / " + randLetter)
	})



	

	
})

