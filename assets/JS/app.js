$('#start').on('click', function(){
	game.start();
})

$(document).on('click', '#end', function(){
	game.done();
})

var questions = [{
	question:"What is Batman real name?",
	answers:[" Bruce Wayne", " Bob Saget", " John Wayne", " Lil Wayne"],
	correctAnswer: " Bruce Wayne"
}, {
	question:"Who is his Butler?",
	answers:[" Alfred", " John Telles", " Lex Lugar", " The Strokes"],
	correctAnswer: " Alfred"
}, {
	question:"Who is Batmans nemesis?",
	answers:[" Cat Woman", " The Joker", " Mr.Peguin", " Ironamn"],
	correctAnswer: " The Joker"
}, {
	question:"Batman beame popular in what year?",
	answers:[" 1991", " 1943", " 1963", " 1939"],
	correctAnswer: " 1939"
}, {
	question:"Who were his parents? ",
	answers:[" Thomas & Martha Wayne", " Dez & Kim Wayne", " John & Cindy Wayne", " Thomas & Lucy Wayne"],
	correctAnswer: "Thomas & Martha Wayne"
}, {
	question:"Batman is also reffered to as the Caped ________?",
	answers:[" Knight", " Crusader", " Gladiator", " Defender"],
	correctAnswer: " Crusader"
	
	
}];	

var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		
if(game.counter===0){
			alert("time is up");
			game.done();
		}
	},
	start: function(){
		timer= setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
		$('#start').remove();
		$('#batjoker').remove();
		$('#enterCave').remove();
			for(var i = 0; i<questions.length; i++){
				$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
					for(var j=0;j<questions[i].answers.length;j++){
						$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='" +questions[i].answers[j]+"'>"+questions[i].answers[j])
			}

		}
		$('#subwrapper').append('<br><button id="end">Done</button>');
	},
	done: function(){
		$.each($('input[name="question-0"]:checked'), function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-1"]:checked'), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-2"]:checked'), function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-3"]:checked'), function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-4"]:checked'), function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-5"]:checked'), function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
			
		});

		this.result();
		},
		result: function(){
			clearInterval(timer);
			$('#subwrapper h2').remove();
			
			$('#subwrapper').html("<h2> You Are Done!!!!  </h2>");
			$('#subwrapper').append("<h3> Here Are The Correct Answers!: "+this.correct+ "</h3>");
			$('#subwrapper').append("<h3> Here Are The Incorrect Answers!: " +this.incorrect+ "</h3>");
			$('#subwrapper').append("<h3> Unanswered: "+(questions.length-(this.correct+this.incorrect))+"</h3>");
			console.log(result);
}
};
