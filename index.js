const timerButton = document.querySelector(".timer-button");
const timerDisplay = document.querySelector(".timer-display");

let seconds = 0;
let isOn = false;

timerButton.addEventListener("click", () => {
    if(!isOn) {
        isOn = !isOn;
        timerInterval = setInterval(() => {
            seconds++;
            timerDisplay.innerHTML = `it was ${seconds} seconds ago`;
        }, 1000);
    }
    else {
        isOn = !isOn;
        clearInterval(timerInterval);
        timerDisplay.innerHTML = "Click button to start the timer...";
        seconds = 0;
    }
});