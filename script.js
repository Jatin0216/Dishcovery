// script.js
// UI wiring and demo recipe generator for Dishcovery

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openIngredients');
  const closeBtn = document.getElementById('closeModal');
  const generateBtn = document.getElementById('generateBtn');
  const quickBtn = document.getElementById('quickOpen');
  const surpriseBtn = document.getElementById('surprise');

  const results = document.getElementById('results');
  const dishTitle = document.getElementById('dishTitle');
  const dishMeta = document.getElementById('dishMeta');
  const ingredientsList = document.getElementById('ingredientsList');
  const instructionsList = document.getElementById('instructions');
  const culturalNote = document.getElementById('culturalNote');

  const ingredientsInput = document.getElementById('ingredientsInput');
  const cuisineSelect = document.getElementById('cuisine');

  function showModal() {
    modal.classList.remove('hidden');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    const ta = ingredientsInput;
    setTimeout(() => ta && ta.focus(), 120);
  }

  function hideModal() {
    modal.classList.add('hidden');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  openBtn && openBtn.addEventListener('click', showModal);
  closeBtn && closeBtn.addEventListener('click', hideModal);

  // Close modal on backdrop click
  modal && modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
  });

  function populateList(container, items) {
    container.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      container.appendChild(li);
    });
  }

  function showResults(object) {
    dishTitle.textContent = object.title;
    dishMeta.textContent = `${object.cuisine} • ${object.time} • Serves ${object.serves}`;
    populateList(ingredientsList, object.ingredients);
    populateList(instructionsList, object.instructions);
    culturalNote.textContent = object.note;
    results.classList.remove('hidden');
    hideModal();
    // smooth scroll to results
    setTimeout(() => {
      results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  }

  // Simple deterministic demo generator (no external API)
  function demoGenerate(ingredientsText, cuisine) {
    const raw = (ingredientsText || '').split(',').map(s => s.trim()).filter(Boolean);
    const ingredients = raw.length ? raw : ['pantry basics'];
    const primary = ingredients[0] || 'Pan';
    const title = `${primary.charAt(0).toUpperCase() + primary.slice(1)} Skillet`;
    const time = '25-35 min';
    const serves = 2;
    const instructions = [
      `Prepare ingredients: chop ${ingredients.join(', ')}.`,
      'Heat 1 tbsp oil in a pan over medium heat; add aromatics and sauté until fragrant.',
      'Add main ingredients and cook until tender, stirring occasionally.',
      'Season to taste and finish with fresh herbs or a squeeze of lemon, serve hot.'
    ];
    const note = cuisine ? `${cuisine}-inspired flavors.` : 'Flexible home-style recipe.';
    return { title, cuisine: cuisine || 'Fusion', time, serves, ingredients, instructions, note };
  }

  generateBtn && generateBtn.addEventListener('click', () => {
    const ing = ingredientsInput ? ingredientsInput.value : '';
    const cuisine = cuisineSelect ? cuisineSelect.value : '';
    const data = demoGenerate(ing, cuisine);
    showResults(data);
  });

  quickBtn && quickBtn.addEventListener('click', () => {
    if (ingredientsInput) ingredientsInput.value = 'tomato, garlic, pasta';
    if (cuisineSelect) cuisineSelect.value = 'Italian';
    generateBtn && generateBtn.click();
  });

  surpriseBtn && surpriseBtn.addEventListener('click', () => {
    const examples = [
      ['chicken, turmeric, yogurt', 'Indian'],
      ['corn, black beans, cilantro', 'Mexican'],
      ['egg, rice, scallion', 'Chinese'],
      ['potato, mustard seeds, curry leaves', 'Indian']
    ];
    const pick = examples[Math.floor(Math.random() * examples.length)];
    if (ingredientsInput) ingredientsInput.value = pick[0];
    if (cuisineSelect) cuisineSelect.value = pick[1];
    generateBtn && generateBtn.click();
  });

  // Optional: Save button behavior placeholder (no backend)
  const saveBtn = document.getElementById('saveBtn');
  saveBtn && saveBtn.addEventListener('click', () => {
    saveBtn.textContent = 'Saved';
    setTimeout(() => saveBtn.textContent = 'Save', 1800);
  });
});
