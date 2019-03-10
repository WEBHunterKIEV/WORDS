
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

	//--------------------------------- init history log

	for (historyCount = 0;window.localStorage['answer' + historyCount] != undefined;historyCount++) {
		$('#history_log').append('<p>');
		$('#history_log p').eq(historyCount).text(window.localStorage['answer' + historyCount]);
		
	}

	
	//--------------------------------- head text

	var totalCounter = window.localStorage.totalCounter;
	if (totalCounter == undefined) totalCounter = 0;
	var correctCounter = window.localStorage.correctCounter;
	if (correctCounter == undefined) correctCounter = 0;
	var incorrectCounter = window.localStorage.incorrectCounter;
	if (incorrectCounter == undefined) incorrectCounter = 0;

		$('#blue_span').text('СЛОВ ЗА СЕГОДНЯ: ' + totalCounter);
		$('#green_span').text('ПРАВИЛЬНО: ' + correctCounter);
		$('#red_span').text('НЕ ПРАВИЛЬНО: ' + incorrectCounter);
		
		
	
	//--------------------------------- random generator
    
	var randTask = Math.random() * base.length;
	randTask = Math.floor(randTask);

	$('#imageSrc').attr('src', base[randTask].img);
	$('#word').text(base[randTask].name);

    //---------------------------------

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

					var answerNom = 'answer' + window.localStorage.counter;

					window.localStorage[answerNom] = d + "  >>  " + $('#word').text() + " // " + base[randTask].name;
				

					}
					}

		  //--------------------------------------

		  
		})


		$('.reload').click(function() {
      location.reload();
		})

		//--------------------------------- toggle history class
		$('#history').click(function(){
			$('#history').toggleClass('history_open');
		})

	

	
})



