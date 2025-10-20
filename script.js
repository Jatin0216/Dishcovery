// =======================
// RECIPE GENERATOR (Animated Demo)
// =======================
const recipeForm = document.getElementById('recipeForm');
if (recipeForm) {
  recipeForm.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.form-card').style.display = 'none';
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');
    loading.style.display = 'block';
    result.style.display = 'none';

    const loadQuotes = [
      "Good food takes time...",
      "Adding a pinch of love...",
      "Simmering ideas into flavor...",
      "Whisking up something tasty...",
      "Cooking is an art, plating is poetry..."
    ];
    let qi = 0;
    const quoteEl = document.getElementById('loadingQuote');
    const interval = setInterval(() => {
      quoteEl.textContent = loadQuotes[qi % loadQuotes.length];
      qi++;
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
      loading.style.display = 'none';
      result.style.display = 'block';

      // Mock AI output (later connect to API)
      document.getElementById('dishName').textContent = "Spicy Tomato Chicken Curry";
      document.getElementById('dishImage').src = "https://www.themealdb.com/images/media/meals/1529446352.jpg";

      document.getElementById('ingredientsList').innerHTML = `
        <li>Chicken - 500g</li>
        <li>Tomatoes - 3</li>
        <li>Onions - 2</li>
        <li>Spices - as per taste</li>
      `;
      document.getElementById('toolsList').innerHTML = `
        <li>Pan</li><li>Knife</li><li>Spatula</li>
      `;
      document.getElementById('stepsList').innerHTML = `
        <li>Chop onions and tomatoes</li>
        <li>Sauté onions, add spices</li>
        <li>Add chicken and tomatoes</li>
        <li>Simmer until cooked</li>
      `;
      document.getElementById('checklist').innerHTML = `
        <li>Wash chicken</li><li>Keep spices ready</li><li>Prepare chopping board</li>
      `;
      document.getElementById('nutrition').innerHTML = `
        <p>Calories: 450 kcal</p><p>Protein: 35g</p><p>Carbs: 20g</p><p>Fat: 18g</p>
      `;
    }, 4000
