
$(document).ready(function () {

    var base = [
		{"name":"КОТ","img":"images/cat.png"},
		{"name":"СЛОН","img":"images/elef.png"}
	]

	$('#imageSrc').attr('src', base[1].img);
	$('#word').text(base[1].name);


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

		$('.keyboard').fadeTo("slow", 0.1)
		$('.confirm').addClass('confirm_show')

		word = word.split(''); 
		
		word[rand] = e.target.innerText;

		//word[rand].css('color','red')

		word = word.join('');
		$('#word').text(word)

		//--------------------------------------

		if (e.target.innerText == randLetter) {
			//alert('Yes')
		} else {
			//alert('no')
		}

		console.log(word)
		//console.log(e.target.innerText + " / " + randLetter)
	})



	

	
})

