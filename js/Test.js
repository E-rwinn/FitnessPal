let totalTime = 60;
let currentTime = totalTime;
let isRunning = false;
let timerInterval;

const timerBox = document.getElementById("timerBox");

timerBox.addEventListener("click", () => {
	if (isRunning) return;

	isRunning = true;
	startTimer();
});

function startTimer() {
	updateDisplay();
	timerInterval = setInterval(() => {
		currentTime--;
		updateDisplay();

		if (currentTime <= 0) {
			clearInterval(timerInterval);
			isRunning = false;
			timerBox.textContent = "Done";
		}
	}, 1000);
}

function updateDisplay() {
	const minutes = Math.floor(currentTime / 60);
	const seconds = currentTime % 60;
	timerBox.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
	return num.toString().padStart(2, "0");
}
