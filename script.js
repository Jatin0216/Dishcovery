// script.js — Dishcovery interactivity and demo recipe generator

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
    setTimeout(() => ingredientsInput?.focus(), 120);
  }

  function hideModal() {
    modal.classList.add('hidden');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  openBtn?.addEventListener('click', showModal);
  closeBtn?.addEventListener('click', hideModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideModal(); });

  function populateList(container, items) {
    container.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      container.appendChild(li);
    });
  }

  function showResults(data) {
    dishTitle.textContent = data.title;
    dishMeta.textContent = `${data.cuisine} • ${data.time} • Serves ${data.serves}`;
    populateList(ingredientsList, data.ingredients);
    populateList(instructionsList, data.instructions);
    culturalNote.textContent = data.note;
    results.classList.remove('hidden');
    hideModal();
    setTimeout(() => results.scrollIntoView({ behavior: 'smooth' }), 120);
  }

  function demoGenerate(ingredientsText, cuisine) {
    const raw = (ingredientsText || '').split(',').map(s => s.trim()).filter(Boolean);
    const ingredients = raw.length ? raw : ['pantry basics'];
    const primary = ingredients[0] || 'Pan';
    const title = `${primary.charAt(0).toUpperCase() + primary.slice(1)} Skillet`;
    const time = '25–35 min';
    const serves = 2;
    const instructions = [
      `Prepare ingredients: chop ${ingredients.join(', ')}.`,
      'Heat oil in a pan and sauté aromatics.',
      'Add main ingredients and cook until tender.',
      'Season and serve hot with garnish.'
    ];
    const note = cuisine ? `${cuisine}-inspired flavors.` : 'Flexible home-style recipe.';
    return { title, cuisine: cuisine || 'Fusion', time, serves, ingredients, instructions, note };
  }

  generateBtn?.addEventListener('click', () => {
    const ing = ingredientsInput?.value || '';
    const cuisine = cuisineSelect?.value || '';
    const data = demoGenerate(ing, cuisine);
    showResults(data);
  });

  quickBtn?.addEventListener('click', () => {
    ingredientsInput.value = 'tomato, garlic, pasta';
    cuisineSelect.value = 'Italian';
    generateBtn.click();
  });

  surpriseBtn?.addEventListener('click', () => {
    const examples = [
      ['chicken, turmeric, yogurt', 'Indian'],
      ['corn, black beans, cilantro', 'Mexican'],
      ['egg, rice, scallion', 'Chinese']
    ];
    const pick = examples[Math.floor(Math.random() * examples.length)];
    ingredientsInput.value = pick[0];
    cuisineSelect.value = pick[1];
    generateBtn.click();
  });

  const saveBtn = document.getElementById('saveBtn');
  saveBtn?.addEventListener('click', () => {
    saveBtn.textContent = 'Saved';
    setTimeout(() => saveBtn.textContent = 'Save', 1800);
  });
});
