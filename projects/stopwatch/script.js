let startBtn = document.getElementById("start");
let lapBtn = document.getElementById("lap");
let stopBtn = document.getElementById("stop");
let delLapBtn = document.getElementById("delete-lap");
let timeTxt = document.getElementById("time");
let total = document.getElementById("total");
let hour = 0;
let min = 0;
let sec = 0;
let millisec = 0;
let h = 0;
let m = 0;
let s = 0;
let mill = 0;
let stopPressed = 1;
let timer;
let lapTimer;
let lapTime;
let lapsCreated = [];

function updateTime(){
    hour = parseInt(hour);
    min = parseInt(min);
    sec = parseInt(sec);
    millisec = parseInt(millisec);

    millisec += 1;
    if (millisec >= 100){
        sec += 1;
        millisec = millisec % 100;
    }else if (sec >= 60){
        min += 1;
        sec = sec % 60;
    }else if (min >= 60){
        hour += 1;
        min = min % 60;
    }

    if (millisec < 10){
        millisec = "0"+millisec.toString();
    }
    if (sec < 10){
        sec = "0"+ sec.toString();
    }
    if (min < 10){
        min = "0"+ min.toString();
    }
    if (hour < 10){
        hour = "0"+ hour.toString();
    }

    timeTxt.innerHTML = `${hour}:${min}:${sec}.${millisec}`;
    total.innerHTML = `Total <label>${hour}:${min}:${sec}.${millisec}</label>`;
    let allLaps = document.getElementsByClassName("lap");
    if (allLaps.length == 1){
        allLaps[allLaps.length-1].innerHTML = `Lap${allLaps.length}<label>${timeTxt.innerHTML}</label>`;
    }
}

function updateLapTime() {
    h = parseInt(h);
    m = parseInt(m);
    s= parseInt(s);
    mill = parseInt(mill);

    mill += 1;
    if (mill >= 100){
        s += 1;
        mill = mill % 100;
    }else if (sec >= 60){
        m += 1;
        s = s % 60;
    }else if (m >= 60){
        h += 1;
        m = m % 60;
    }

    if (mill < 10){
        mill = "0"+mill.toString();
    }
    if (sec < 10){
        s = "0"+ s.toString();
    }
    if (m < 10){
        m = "0"+ m.toString();
    }
    if (hour < 10){
        h = "0"+ h.toString();
    }

    let lapTime = `${h}:${m}:${s}.${mill}`;
    allLaps = document.getElementsByClassName("lap");
    allLaps[allLaps.length-1].innerHTML = `Lap${allLaps.length+1}<label>${`${h}:${m}:${s}.${mill}`}</label>`;
}

function createLap(){
    let timeLaps = document.getElementById("time-laps");
    let allLaps = document.getElementsByClassName("lap");
    let lap = document.createElement("li");
    lap.className = "lap";
    lap.innerHTML = `Lap${allLaps.length+1}<label>${timeTxt.innerHTML}</label>`;
    timeLaps.append(lap);
    timeLaps.append(document.createElement("hr"));
    lapTimer = setInterval(updateLapTime, 10);
}

startBtn.onclick = () =>{
    if(stopPressed != 0){
        stopPressed = 0;
        if (document.getElementsByClassName("lap").length < 1){
            createLap();
        }
        timer = setInterval(updateTime, 10);
    }
}   

stopBtn.onclick = () => {
    stopPressed = 1;
    clearInterval(timer);
    clearInterval(lapTimer);
}

lapBtn.onclick = () =>{
    if (document.getElementsByClassName("lap").length == 1){
        lapsCreated.push({
            id : document.getElementsByClassName("lap").length,
            millisec: millisec,
            sec : sec,
            min : min,
            hour: hour,
        });
        clearInterval(lapTimer);
        createLap();
    }else if (document.getElementsByClassName("lap").length > 1){
        lapsCreated.push({
            id : document.getElementsByClassName("lap").length,
            millisec: mill,
            sec : s,
            min : m,
            hour: h,
        });
        clearInterval(lapTimer);
        mill = "00";
        s = "00";
        m = "00";
        h = "00";
        createLap();
    }
}