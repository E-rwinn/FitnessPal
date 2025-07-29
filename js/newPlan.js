let workoutCount = 0;
let currentWorkoutIndex = 0;
let workoutList = [];

function toggleNewPlan() {
  const planUI = document.getElementById("planUI");
  planUI.classList.toggle("visible");
}

function addWorkout() {
  workoutCount++;
  const container = document.getElementById("workoutContainer");

  const workoutDiv = document.createElement("div");
  workoutDiv.className = "workout-block";
  workoutDiv.innerHTML = `
    <h3>Workout ${workoutCount}</h3>
    <input type="text" placeholder="Workout Name" class="workout-name" />
  `;

  container.appendChild(workoutDiv);
}

function submitPlan() {
  const routineName = document.getElementById("routineInput").value;
  const workoutNames = document.querySelectorAll(".workout-name");

  if (!routineName || workoutNames.length === 0) {
    alert("Please enter a routine name and at least one workout.");
    return;
  }

  const mainTitle = document.getElementById("weight");
  const nextExercise = document.getElementById("lower");
  const workoutText = document.getElementById("workout");
  
  mainTitle.textContent = routineName;


  workoutList = Array.from(workoutNames).map(input => input.value || "Unnamed Workout");
  currentWorkoutIndex = 0; 


  nextExercise.textContent = workoutList[currentWorkoutIndex];
  workoutText.textContent = `Workout ${currentWorkoutIndex + 1} of ${workoutList.length}`;


  document.getElementById("planUI").classList.remove("visible");
  document.getElementById("routineInput").value = "";
  document.getElementById("workoutContainer").innerHTML = "";
  workoutCount = 0;
}

function nextWorkout() {
  if (workoutList.length === 0) return;
  
  currentWorkoutIndex++;
  if (currentWorkoutIndex >= workoutList.length) {
    currentWorkoutIndex = 0;
  }
  
  document.getElementById("lower").textContent = workoutList[currentWorkoutIndex];
  document.getElementById("workout").textContent = `Workout ${currentWorkoutIndex + 1} of ${workoutList.length}`;
}