let savedPlans = []; // store recent plans

function saveRecentPlan(routineName, workoutList) {
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const recentImgs = document.querySelectorAll(".recent-img");
  const recentDates = document.querySelectorAll(".recent-date");

  let slotIndex = -1;
  for (let i = 0; i < recentImgs.length; i++) {
    if (!recentImgs[i].dataset.plan) {
      slotIndex = i;
      break;
    }
  }
  if (slotIndex === -1) {
    slotIndex = 0;
  }


  recentImgs[slotIndex].dataset.plan = JSON.stringify({ routineName, workoutList });
  recentDates[slotIndex].textContent = dateStr;


  recentImgs[slotIndex].onclick = () => restorePlan(slotIndex);


  savedPlans[slotIndex] = { routineName, workoutList, date: dateStr };
  localStorage.setItem("recentPlans", JSON.stringify(savedPlans));
}


function restorePlan(index) {
  const recentImgs = document.querySelectorAll(".recent-img");
  const planData = recentImgs[index].dataset.plan;
  if (!planData) return;

  const { routineName, workoutList } = JSON.parse(planData);


  window.workoutList = workoutList;
  window.currentWorkoutIndex = 0;

  document.getElementById("weight").textContent = routineName;
  document.getElementById("lower").textContent = workoutList[0];
  document.getElementById("workout").textContent = `Workout 1 of ${workoutList.length}`;
}


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