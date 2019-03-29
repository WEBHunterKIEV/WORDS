
$(document).ready(function () {

  var base = [
		{"name":"КІТ","img":"images/cat.png"},
		{"name":"СЛОН","img":"images/elef.png"},
		{"name":"ЗАЄЦЬ","img":"images/banny.png"},
		{"name":"ВЕДМЕДЬ","img":"images/bear.png"},
		{"name":"БЕГЕМОТ","img":"images/hippo.png"},
		{"name":"ТИГР","img":"images/tiger.png"},
		{"name":"ВОВК","img":"images/woolf.png"},
		{"name":"ЧАРІВНИЦЯ","img":"images/magikgirl.png"},
		{"name":"сніжинка","img":"images/snow.png"},
		{"name":"завірюха","img":"images/zaviruh.png"},
		{"name":"бурульки","img":"images/burulki.png"},
		{"name":"хмари","img":"images/hmari.jpg"},
		{"name":"дощик","img":"images/rain.jpg"},
		{"name":"гілочки","img":"images/gilochki.png"},
		{"name":"ковзани","img":"images/kovzani.webp"},
		{"name":"ялинка","img":"images/yalinka.png"},
		{"name":"кульки","img":"images/kulki.png"},
		{"name":"квіти","img":"images/flowers.png"},
		{"name":"засмучений","img":"images/zasmuch.jpg"},
		{"name":"камінець","img":"images/kaminetc.jpg"},
		{"name":"дивитись","img":"images/divitis.png"},
		{"name":"сонечко","img":"images/sun.png"},
		{"name":"бджілка","img":"images/bee.png"},

		{"name":"АЗБУКА","img":"images/azbuka.jpg"},
		{"name":"СЛОВНИК","img":"images/slovnik.jpg"},
		{"name":"УЧЕНЬ","img":"images/uchen.jpg"},
		{"name":"НАВЧАННЯ","img":"images/navchanna.jpg"},
		{"name":"МОВА","img":"images/mova.jpg"},
		{"name":"АЛФАВІТ","img":"images/azbuka.jpg"},
		{"name":"ВПРАВА","img":"images/vprava.jpg"},
		{"name":"ЗВУК","img":"images/zvuk.jpg"},
		{"name":"КНИГА","img":"images/kniga.jpg"},
		{"name":"СЛОВО","img":"images/word.jpg"}
	]

	//--------------------------------- apper case

  for (i=0; i<base.length; i++) {
		base[i].name = base[i].name.toUpperCase()
		console.log(base[i].name)
	}

	//--------------------------------- init history log

	for (historyCount = 0;window.localStorage['answer' + historyCount] != undefined;historyCount++) {
		$('#history_log').append('<p>');
		$('#history_log p').eq(historyCount).text(window.localStorage['answer' + historyCount]);
		
	}

	
	//--------------------------------- head text

	totalCounter = window.localStorage.totalCounter;
	if (totalCounter == undefined) {
		totalCounter = 0;
		window.localStorage.totalCounter = totalCounter;
	}
	correctCounter = window.localStorage.correctCounter;
	if (correctCounter == undefined) {
		correctCounter = 0;
		window.localStorage.correctCounter = correctCounter;
	}
	incorrectCounter = window.localStorage.incorrectCounter;
	if (incorrectCounter == undefined) {
		incorrectCounter = 0;
		window.localStorage.incorrectCounter = incorrectCounter;
	}

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
					totalCounter++;
					window.localStorage.totalCounter = totalCounter;
					correctCounter++;
					window.localStorage.correctCounter = correctCounter;
					} else {
						totalCounter++;
						window.localStorage.totalCounter = totalCounter;
						incorrectCounter++;
						window.localStorage.incorrectCounter = incorrectCounter;
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


		//--------------------------------- toggle history class




	
})



