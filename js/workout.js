const workoutData = {
  "weight-loss": [
    { title: "HIIT Cardio", videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI" },
    { title: "Fat Burn Dance", videoUrl: "https://www.youtube.com/embed/bOOHLHcGM3s" }
  ],
  "muscle-gain": [
    { title: "Full Body Dumbbell", videoUrl: "https://www.youtube.com/embed/vc1E5CfRfos" },
    { title: "Push Day Workout", videoUrl: "https://www.youtube.com/embed/vcBig73ojpE" }
  ],
  "flexibility": [
    { title: "Beginner Yoga", videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE" },
    { title: "Stretch & Relax", videoUrl: "https://www.youtube.com/embed/8BcPHWGQO44" }
  ]
};

const buttons = document.querySelectorAll(".goal-buttons button");
const workoutList = document.getElementById("workoutList");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const goal = btn.dataset.goal;
    showWorkouts(goal);
  });
});

function showWorkouts(goal) {
  workoutList.innerHTML = "";
  const workouts = workoutData[goal];

  workouts.forEach((workout) => {
    const card = document.createElement("div");
    card.className = "workout-card";
    card.innerHTML = `
      <iframe src="${workout.videoUrl}" frameborder="0" allowfullscreen></iframe>
      <h3>${workout.title}</h3>
      <button class="complete-btn">Mark Complete</button>
    `;
    workoutList.appendChild(card);

    // Save to localStorage when complete
    card.querySelector(".complete-btn").addEventListener("click", () => {
      let completed = JSON.parse(localStorage.getItem("completedWorkouts")) || [];
      if (!completed.includes(workout.title)) {
        completed.push(workout.title);
        localStorage.setItem("completedWorkouts", JSON.stringify(completed));
      }
      alert(`✅ "${workout.title}" marked as complete!`);
    });
  });
}
