
$(document).ready(function () {

  var base = [
		{"name":"КОТ","img":"images/cat.png"},
		{"name":"СЛОН","img":"images/elef.png"},
		{"name":"ЗАЯЦ","img":"images/banny.png"},
		{"name":"МЕДВЕДЬ","img":"images/bear.png"},
		{"name":"БЕГЕМОТ","img":"images/hippo.png"},
		{"name":"ТИГР","img":"images/tiger.png"},
		{"name":"ВОЛК","img":"images/woolf.png"}
	]

	$('#history_log').text(window.localStorage.wrongAnswer);

	var randTask = Math.random() * base.length;
	randTask = Math.floor(randTask);

	$('#imageSrc').attr('src', base[randTask].img);
	$('#word').text(base[randTask].name);

  //-----------------------------------

	var word = $('#word').text();

	word = word.split(''); 

	var rand = Math.random() * word.length;
	rand = Math.floor(rand);

	

	randLetter = word[rand];

	word[rand] = "_";

	word = word.join('');

	$('#word').text(word)

	//----------------------------------------

	$('.keyboard').click(function(e) {

		$('.keyboard').fadeTo("slow", 0.1)
		$('.confirm').addClass('confirm_show')
		$('#word').css('font-size','8vmax')

		word = word.split(''); 
		
		word[rand] = e.target.innerText;

		//word[rand].css('color','red')

		word = word.join('');
		$('#word').text(word)




		
	})

		//-------------------------------------
		
		$('.confirm').click(function(e) {

			if (e.target.innerText == "НЕТ") {
				word = word.split(''); 
				word[rand] = "_";
	      word = word.join('');
				$('#word').text(word)
				
				$('.keyboard').fadeTo("slow", 1)
				$('.confirm').removeClass('confirm_show')
				$('#word').css('font-size','4vmax')

			} else {
				if (word[rand] == randLetter) {
					$(".answer_correct").addClass('flex_show');
					} else {
					$(".answer_incorrect").addClass('flex_show');
					$("#right_answer").text(base[randTask].name);

					var d = new Date();
					d.toLocaleString();

					if (window.localStorage.counter != undefined) {
						window.localStorage.counter++;
					} else {
						window.localStorage.counter = 0;
					}
					
					window.localStorage.wrongAnswer[] = d + $('#word').text();
					$('#history_log').text(window.localStorage.wrongAnswer[]);

					}
					}

		  //--------------------------------------

		  
		})


		$('.reload').click(function() {
      location.reload();
		})

	

	
})



