const mealData = {
  "weight-loss": [
    { 
      title: "Grilled Chicken Salad", 
      img: "../assests/images/SaladMeal.jpg",
      desc: "A light, nutrient-dense salad made with lean grilled chicken breast, fresh lettuce, cherry tomatoes, cucumber, and a drizzle of olive oil.",
      calories: "350 kcal",
      protein: "28g"
    },
    { 
      title: "Berry Smoothie Bowl", 
      img: "../assests/images/StrawberryMeal.jpg",
      desc: "A refreshing smoothie bowl made with blueberries, strawberries, banana, and almond milk, topped with chia seeds and granola.",
      calories: "250 kcal",
      protein: "10g"
    }
  ],
  "muscle-gain": [
    { 
      title: "Steak & Sweet Potato", 
      img: "../assests/images/SteakMeal.jpeg",
      desc: "Juicy grilled beef steak served with roasted sweet potatoes and steamed vegetables.",
      calories: "550 kcal",
      protein: "40g"
    },
    { 
      title: "Protein Pancakes", 
      img: "../assests/images/PancakeMeal.jpg",
      desc: "Fluffy oat pancakes enriched with whey protein powder, served with peanut butter and banana slices.",
      calories: "420 kcal",
      protein: "35g"
    }
  ],
  "flexibility": [
    { 
      title: "Quinoa Veggie Bowl", 
      img: "../assests/images/VeggieMeal.jpg",
      desc: "A colorful bowl with fluffy quinoa, steamed broccoli, roasted carrots, chickpeas, and tahini dressing.",
      calories: "400 kcal",
      protein: "15g"
    },
    { 
      title: "Avocado Toast", 
      img: "../assests/images/AvacadoMeal.webp",
      desc: "Whole grain toast topped with mashed avocado, cherry tomatoes, and pumpkin seeds.",
      calories: "320 kcal",
      protein: "12g"
    }
  ]
};

const mealList = document.getElementById("mealList");
const goalButtons = document.querySelectorAll(".goal-buttons button");

function renderMeals(goal) {
  mealList.innerHTML = "";
  mealData[goal].forEach(meal => {
    const card = document.createElement("div");
    card.classList.add("meal-card");
    card.innerHTML = `
      <img src="${meal.img}" alt="${meal.title}">
      <div class="meal-card-content">
        <div class="meal-title">${meal.title}</div>
        <div class="meal-desc">${meal.desc}</div>
        <div class="meal-info">
          <span><i class="fas fa-fire"></i> ${meal.calories}</span>
          <span><i class="fas fa-dumbbell"></i> ${meal.protein}</span>
        </div>
      </div>
    `;
    mealList.appendChild(card);
  });
}

goalButtons.forEach(btn => {
  btn.addEventListener("click", () => renderMeals(btn.dataset.goal));
});

// Default load
renderMeals("weight-loss");
