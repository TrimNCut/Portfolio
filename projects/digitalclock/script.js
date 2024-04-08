let dateTxt = document.getElementById("date");
let timeTxt = document.getElementById("time");
let settingTxt = document.getElementById("setting");

function updateData() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let modHour = (hour % 12)
	if (hour >= 12) {
		settingTxt.innerText = "pm";
	}
	else if (hour >= 12) {
		settingTxt.innerText = "am";
	}
	timeTxt.innerText = modHour + ":" + min;
}

setInterval(updateData, 1000);