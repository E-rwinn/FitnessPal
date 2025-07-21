const startBtn = document.getElementById('startBtn');
const minutesInput = document.getElementById('minutesInput');
const countdownDisplay = document.getElementById('countdownDisplay');
let timerInterval;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
  
    let totalSeconds = parseInt(minutesInput.value) * 60;
  
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
      minutesInput.value = "";
      return;
    }
  
    minutesInput.readOnly = true;
    minutesInput.value = formatTime(totalSeconds);
  
    timerInterval = setInterval(() => {
      totalSeconds--;
  
      if (totalSeconds < 0) {
        clearInterval(timerInterval);
        minutesInput.value = '';
        minutesInput.readOnly = false;
        return;
      }
  
      minutesInput.value = formatTime(totalSeconds);
    }, 1000);
  });