let elapsedTime = 0;
let timer = null;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateTime() {
    elapsedTime += 10;

    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime / 100) % 60);
    const milliseconds = elapsedTime % 1000;

    timeDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(3, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (!timer) {
        timer = setInterval(updateTime, 10);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00";
});
