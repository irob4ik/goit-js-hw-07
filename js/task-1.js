// searching for categories in a list
// for each category shows number of items 

const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории`);

categories.forEach(category => {
    console.log(`Категория: ${category.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${category.querySelectorAll('li').length}`)
});