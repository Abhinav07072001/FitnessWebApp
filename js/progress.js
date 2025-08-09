document.addEventListener("DOMContentLoaded", () => {
  const progressList = document.getElementById("progressList");
  let completed = JSON.parse(localStorage.getItem("completedWorkouts")) || [];

  if (completed.length === 0) {
    progressList.innerHTML = `<p class="no-progress">No workouts completed yet.</p>`;
    return;
  }

  completed.forEach(title => {
    const item = document.createElement("div");
    item.className = "progress-item";
    item.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <div class="progress-info">
        <h3>${title}</h3>
      </div>
    `;
    progressList.appendChild(item);
  });
});
