let numsRaw = document.getElementsByClassName("num");
let signsRaw = document.getElementsByClassName("sign");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let display = document.getElementById("text");
let nums = [];
let signs = [];
let num = "";
let group = [];
let question = "";
let ques = "";
let ans = 0;
let lastpress;

function setup() {
	for (i of numsRaw) {
		nums.push(i);
	}
	for (i of signsRaw) {
		signs.push(i);
	}
}

setup()

function getPressed() {
	nums.forEach((i) => {
		i.onclick = () => {
			if (display.innerHTML == 0) {
				display.innerHTML = i.innerHTML;
				num += i.innerHTML;
				lastpress = "num";
			}
			else {
				display.innerHTML += i.innerHTML;
				num += i.innerHTML;
				lastpress = "num";
			}
		}
	})
	signs.forEach((i) => {
		i.onclick = () => {
			if (i.innerHTML != "+/-" || i.innerHTML != "π" || i.innerHTML != "." || i.innerHTML != "%") {
				if (lastpress != "sign") {
					if (group[group.length - 1] != "+" || group[group.length - 1] != "-" || group[group.length - 1] != "*" || group[group.length - 1] != "/") {
						display.innerHTML += i.innerHTML;
						group.push(num);
						if (i.innerHTML == "×") {
							group.push("*");
						} else if (i.innerHTML == "÷") {
							group.push("/");
						} else {
							group.push(i.innerHTML);
						}
						num = "";
						lastpress = "sign";
					}
				}
			}
			if (group[group.length - 1] === "." && lastpress != "sign" && num.indexOf(".") === -1 && i.innerHTML === ".") {
				display.innerHTML += i.innerHTML;
				group.push(i.innerHTML);
				num += i.innerHTML;
				lastpress = "sign";
			}
			if (group[group.length - 1] != "3.142" && lastpress === "sign" && i.innerHTML === "π") {
				display.innerHTML += "3.142";
				group.push("3.142");
				lastpress = "num";
			}
			if (lastpress === "num" && i.innerHTML === "+/-") {
                console.log("Here");
				if(group[group.length - 1].indexOf("-") != -1){
					group[group.length - 1] = group[group.length - 1].replace("-","");
				}
				else if(group[group.length - 1].indexOf("+") != -1 || group[group.length - 1].indexOf("") != -1){
					group[group.length - 1] = group[group.length - 1].replace("+","-");
				}
					group[group.length - 1] = "";
				lastpress = "num";
			}
		}
	})
	equal.onclick = () => {
		if (lastpress != "sign") {
			if (display.innerHTML != 0 && (group.length > 2 || num != "")) {
				if (num != "") {
					group.push(num);
					num = "";
					for (let i = 0; i <= group.length; i++) {
						question += group[i];
					}
					ques = question.replace("undefined", '')
					console.log(ques);
					ans = eval(ques);
					display.innerHTML = ans;
					group = [];
					num += ans;
					question = "";
					ques = "";
				} else {
					num = "";
					for (let i = 0; i <= group.length; i++) {
						question += group[i];
					}
					ques = question.replace("undefined", '')
					console.log(ques);
					ans = eval(ques);
					display.innerHTML = ans;
					group = [];
					num += ans;
					question = "";
					ques = "";
				}
			}
		}
		else {
			alert("Cannot end with a sign");
		}
	}
	clear.onclick = () => {
		group = [];
		num = "";
		question = "";
		ques = "";
		ans = 0;
		display.innerHTML = ans;
	}
}

document.addEventListener("click", getPressed)