let circleElement, timeElement, totalTime, currentTime, timerInterval;
const PI = Math.PI;

window.addEventListener("load", function() {
    initializeTimer();
});

function initializeTimer() {
    circleElement = document.querySelector('.c1');
    timeElement = document.querySelector('.time');
    
    if (!circleElement || !timeElement) {
        console.error('Required elements not found');
        return;
    }

    totalTime = 20; // Total time in seconds
    currentTime = totalTime;
    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (currentTime <= 0) {
        clearInterval(timerInterval);
        return;
    }

    updateTimerDisplay();
    updateCircleProgress();
    currentTime--;
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    timeElement.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

function updateCircleProgress() {
    const radius = parseInt(circleElement.getAttribute('r'));
    const circumference = 2 * PI * radius;
    const progress = Math.ceil(circumference * (1 - currentTime / totalTime));
    circleElement.style.strokeDashoffset = progress.toString();
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}