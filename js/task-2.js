const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liElements = ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.classList.add('ingredient');
    element.textContent = ingredient;
    return element;        
});

const ulList = document.querySelector('#ingredients');
ulList.append(...liElements);
  