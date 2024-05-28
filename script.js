
let timer;
let time = 0;

function startStop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
}

function updateTime() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.getElementById("display").innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function lapReset() {
    clearInterval(timer);
    timer = null;
    time = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    const lapTime = document.getElementById("display").innerText;
    const lapItem = document.createElement("li");
    lapItem.innerText = lapTime;
    document.getElementById("laps").appendChild(lapItem);
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("lapReset").addEventListener("click", lapReset);
document.getElementById("lapButton").addEventListener("click", lap);
