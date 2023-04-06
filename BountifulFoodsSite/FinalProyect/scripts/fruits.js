const fruitDataUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
   
fetch(fruitDataUrl)
  .then(response => response.json())
  .then(data => {
  
  const fruits = data;
  
  
  const fruitOptions = ['<option value="" selected>Select Fruit</option>'].concat(
    fruits.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`)
    );

    const fruitSelects = document.querySelectorAll('select[id^="fruit"]');
    fruitSelects.forEach(select => {
    select.innerHTML = fruitOptions.join('');
    });

  
 
  const form = document.querySelector('#drink-form');
  form.addEventListener('submit', event => {
    event.preventDefault();

    
    const firstName = document.querySelector('#first-name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const fruit1 = document.querySelector('#fruit-1 option:checked').text;
    const fruit2 = document.querySelector('#fruit-2 option:checked').text;
    const fruit3 = document.querySelector('#fruit-3 option:checked').text;
    const specialInstructions = document.querySelector('#special-instructions').value;

    
    const selectedFruits = [fruit1, fruit2, fruit3];
    const nutritionalValues = {
      carbohydrates: 0,
      protein: 0,
      fat: 0,
      sugar: 0,
      calories: 0
    };
    selectedFruits.forEach(selectedFruit => {
      const fruitData = fruits.find(fruit => fruit.name === selectedFruit);
      nutritionalValues.carbohydrates += fruitData.nutritions.carbohydrates;
      nutritionalValues.protein += fruitData.nutritions.protein;
      nutritionalValues.fat += fruitData.nutritions.fat;
      nutritionalValues.sugar += fruitData.nutritions.sugar;
      nutritionalValues.calories += fruitData.nutritions.calories;
    });

    
    const currentDate = new Date().toLocaleDateString();

    
    const output = `
      <p><strong>Order Details:</strong></p>
      <p>First Name: ${firstName}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Fruit 1: ${fruit1}</p>
      <p>Fruit 2: ${fruit2}</p>
      <p>Fruit 3: ${fruit3}</p>
      <p>Special Instructions: ${specialInstructions}</p>
      <p>Order Date: ${currentDate}</p>
      <br>
      <p><strong>Nutritional Information:</strong></p>
      <p>Carbohydrates: ${nutritionalValues.carbohydrates.toFixed(2)} g</p>
      <p>Protein: ${nutritionalValues.protein.toFixed(2)} g</p>
      <p>Fat: ${nutritionalValues.fat.toFixed(2)} g</p>
      <p>Sugar: ${nutritionalValues.sugar.toFixed(2)} g</p>
      <p>Calories: ${nutritionalValues.calories.toFixed(2)} kcal</p>
      `;
          
          const outputContainer = document.querySelector('#output');
          outputContainer.innerHTML = output;

          
          form.reset();
        });
      })
      .catch(error => console.log(error));