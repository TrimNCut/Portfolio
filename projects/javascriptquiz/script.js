const questions = [
	{
		id: 1,
		title: "What is the full meaning of DOM?",
		a: "Document Objective Model",
		b: "Document Object Modeling",
		c: "Document Object Model",
		d: "Document Of Model",
		answer: "c",
	},
	{
		id: 2,
		title: "How do you add javascript to HTML",
		a: "js",
		b: "script",
		c: "javascript",
		d: "link",
		answer: "b",
	},
	{
		id: 3,
		title: "Add an element with id",
		a: "document.getElementbyClass",
		b: "document.getElementByid",
		c: "document.getElementByClassName",
		d: "document.getElementById",
		answer: "d",
	},
	{
		id: 4,
		title: "Create a variable in javascript",
		a: "let x = 'a';",
		b: "variable x = 'a';",
		c: "x = 'a';",
		d: "char x = 'a';",
		answer: "a",
	},
	{
		id: 5,
		title: "Create a function in javascript",
		a: "func giveCash(){}",
		b: "def giveCash(){}",
		c: "function giveCash(){}",
		d: "void giveCash(){}",
		answer: "c",
	},
	{
		id: 6,
		title: "Print out 'Hello World!'",
		a: "print('Hello World')",
		b: "System.out.println('Hello World!');",
		c: "echo Hello World!",
		d: "console.log('Hello World!');",
		answer: "d",
	},
	{
		id: 7,
		title: "Comment in javascript",
		a: "/*This is a comment*/",
		b: "//This is a comment",
		c: "#This is a comment",
		d: "!This is a comment",
		answer: "b",
	},
	{
		id: 8,
		title: "Which is odd to javascript",
		a: "class Pig:",
		b: "if (a == b){}",
		c: "for (i=0; i<=10; i++){}",
		d: "while (a != b){}",
		answer: "a",
	},
	{
		id: 9,
		title: "Who created javascript",
		a: "Guido van Rossum",
		b: "Bjarne Stroustrup",
		c: "Brendan Eich",
		d: "James Goling",
		answer: "c",
	},
	{
		id: 10,
		title: "When was javascript created",
		a: "2009",
		b: "1995",
		c: "1972",
		d: "1985",
		answer: "b",
	}
];

const colors = [
	{
		id: 1,
		color: "#FF6666",
	},
	{
		id: 2,
		color: "#FFBD66",
	},
	{
		id: 3,
		color: "#66A6FF",
	},
	{
		id: 4,
		color: "#6AEA6C",
	},
];

let score = 0;
let scoreText = document.getElementById("score-ques");
let Questions = document.getElementById("total-ques").innerHTML = "Questions : " + questions.length;
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");
let current = 0;
let selected = "";
let options = ["","","","","","","","","",""];
let submit = document.getElementById("submit");

scoreText.innerHTML = "Score : " + score + "/100";

function clearQuestion() {
	document.getElementById("ques-con").removeChild();
}

function generateOptions() {
	const tileCon = document.getElementById("ques-tiles");
	for (i = 1; i <= questions.length; i++) {
		let tile = document.createElement("button");
		tile.className = "ques-tile-sub";
		tile.innerHTML = `<p class="ques-tile-sub-num ${i}">${i}<label class="ques-tile-sub-opt">${selected}</label></p>`
		tileCon.append(tile);
		if (i == 1) {
			tile.style.borderRadius = "2vw 0vw 0vw 0vw";
		} else if (i == 4) {
			tile.style.borderRadius = "0vw 2vw 0vw 0vw"
		} else if (i == (questions.length - (questions.length % 4) + 1)) {
			tile.style.borderRadius = "0vw 0vw 0vw 2vw"
		} else if (i == questions.length && (questions.length % 2) == 1) {
			tile.style.borderRadius = "0vw 0vw 2vw 0vw"
		}
		let currTile = document.getElementsByClassName("ques-tile-sub")[current];
		currTile.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
	}
	for (let tile of document.getElementsByClassName("ques-tile-sub")) {
		tile.onclick = () =>{
			reset(tile.innerText);
		}
	}
}

function reset(pos){
	let currTile = document.getElementsByClassName("ques-tile-sub")[current];
	currTile.style.backgroundColor = "rgba(0, 0, 0, 0)";
	current = pos - 1;
	currTile = document.getElementsByClassName("ques-tile-sub")[current];
	currTile.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
	document.getElementById("ques").remove();
	generateQuestion(questions[current]);
}

function generateQuestion(ques) {
	const quesCon = document.getElementById("ques-con");
	let question = document.createElement("div");
	question.id = "ques";
	question.innerHTML = `<div style="background-color:${colors[((ques.id) % colors.length)].color}">
				<label id="ques-no">${ques.id}.</label>
				<label id="ques-name">${ques.title}</label>
			</div>
			<ul>
				<li>    
					<input type="radio" name="answer" id="a" class="radio" for="a"/>
					<label for="a" class="opt-name">a)</label>
					<label for="a">${ques.a}</label>
				</li>
				<li>
					<input type="radio" name="answer" id="b" class="radio" for="b"/>
					<label for="b" class="opt-name">b)</label>
					<label for="b">${ques.b}</label>
				</li>
				<li>
					<input type="radio" name="answer" id="c" class="radio" for="c">
					<label for="c" class="opt-name">c)</label>
					<label for="c">${ques.c}</label>
				</li>
				<li>
					<input type="radio" name="answer" id="d" class="radio" for="d">
					<label for="d" class="opt-name">d)</label>
					<label for="d">${ques.d}</label>
				</li>
			</ul>`;
	quesCon.append(question);
	let radio = document.getElementsByClassName("radio");
	for (let i of radio){
		if (options[current] != "" && i.id == options[current]){
			i.checked = true
		}
		i.onclick = () =>{
			options[current] = i.id
			i.checked = true
		}
	}
}

function checkScore(){
	let rawScore = 0;
	score = 0
	for (i = 0; i <= questions.length - 1; i++){
		if (options[i] == questions[i].answer){
			rawScore += 1
			score += (1/questions.length)*100;
		}else {
			rawScore += 0
			score += 0;
		}
	}
	document.getElementById("score").innerText = score;
	document.getElementsByClassName("per").innerText = "%";
	document.getElementById("scoreBoard").style.marginTop = "-21.25vw";
}

submit.onclick = () =>{
	let position = 0
	for(let x of options){
		if (x == ""){
			alert("You have to finish all questions!");
			break;
		}
		else{
			position += 1;
		}
	}
	if (position == questions.length){
		checkScore();
	}
}

nextBtn.onclick = () =>{
	if (current == questions.length-1){
		reset(1)
	}else {
		reset(((current) % questions.length) + 2)
	}
}

prevBtn.onclick = () =>{
	if (current == 0){
		reset(questions.length)
	} else {
		reset(((current - 1) % questions.length) + 1)
	}
}

generateOptions();
generateQuestion(questions[current]);