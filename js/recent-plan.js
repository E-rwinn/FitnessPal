let savedPlans = []; // store recent plans

// Update the recent plan slots after a new plan is created
function saveRecentPlan(routineName, workoutList) {
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const recentImgs = document.querySelectorAll(".recent-img");
  const recentDates = document.querySelectorAll(".recent-date");

  // Find empty slot OR overwrite the first one if all full
  let slotIndex = -1;
  for (let i = 0; i < recentImgs.length; i++) {
    if (!recentImgs[i].dataset.plan) {
      slotIndex = i;
      break;
    }
  }
  if (slotIndex === -1) {
    slotIndex = 0; // overwrite the oldest (first)
  }

  // Save the plan data in dataset
  recentImgs[slotIndex].dataset.plan = JSON.stringify({ routineName, workoutList });
  recentDates[slotIndex].textContent = dateStr;

  // Add click listener for restoring
  recentImgs[slotIndex].onclick = () => restorePlan(slotIndex);

  // Save in memory + localStorage
  savedPlans[slotIndex] = { routineName, workoutList, date: dateStr };
  localStorage.setItem("recentPlans", JSON.stringify(savedPlans));
}

// Restore a plan when its recent image is clicked
function restorePlan(index) {
  const recentImgs = document.querySelectorAll(".recent-img");
  const planData = recentImgs[index].dataset.plan;
  if (!planData) return;

  const { routineName, workoutList } = JSON.parse(planData);

  // Load into current workout UI
  window.workoutList = workoutList;
  window.currentWorkoutIndex = 0;

  document.getElementById("weight").textContent = routineName;
  document.getElementById("lower").textContent = workoutList[0];
  document.getElementById("workout").textContent = `Workout 1 of ${workoutList.length}`;
}

// Load saved plans when the page starts
document.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("recentPlans")) || [];
  const recentImgs = document.querySelectorAll(".recent-img");
  const recentDates = document.querySelectorAll(".recent-date");

  savedPlans = saved;

  saved.forEach((plan, i) => {
    if (recentImgs[i]) {
      recentImgs[i].dataset.plan = JSON.stringify(plan);
      recentDates[i].textContent = plan.date;
      recentImgs[i].onclick = () => restorePlan(i);
    }
  });
});