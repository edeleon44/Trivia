//Variables for Data
//var questionArray = ["q1 , q2 , q3"];
//var selectedQuestion = " ";
//var generateAnswerChoices = " ";
//var answerArrayQone = ["Bruce Wayne", "Bob Saget", "John Wayne"]; 
//var answerArrayQtwo = ["Alfred","John Telles","lex Luther"];
//var answerArrayQthree = ["Cat Woman", "Mr.Penguin","The Joker"];
//var correctAnswerQone = ["A. Bruce Wayne"];
//var correctAnswerQtwo = ["A. 'Alfred'"];
//var correctAnswerQthree = ["C. The Joker"];

//Game Counters
var winCount = 0;
var lossCount = 0;


//Functions --> Reusable blocks of code that I will call apon when needed
//-----------------------------------------------------------------------
//["What is Batman's name?", "Who is his Butler?", "Who is Batman's Nemises?"];
function startGame(){



var questionArray = ["q1 , q2 , q3"];
var q1 = {
	question: 'What is Batmans name?',
	possibleAnswers: ['A. Bruce Wayne', 'B. Bob Saget', 'C. John Wayne'],
	flags : [true,false,false],
	answer : 'A. Bruce Wayne'
};
var q2 = {
	question: 'Who is his Butler?',
	possibleAnswers: ['A. Alfred','B. John Telles','C. Lex Lugar'],
	flags : [true,false,false],
	answer : 'A. Alfred'
};
var q3 = {
	question: 'Who is Batmans Nemises?',
	possibleAnswers: ['A. The Joker', 'B. CatWoman', 'C. Mr.Penguin'],
	answer : 'A. The Joker'
};

function loadQuestion(selectedQuestion){
	console.log(questionSelection);
		$(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
		$("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
		$("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
		$("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();

	
}
	selectedQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
		for (var i=0; i<questionArray; i++){
	
		};



	
};
;
startGame();
