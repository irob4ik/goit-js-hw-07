const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
};

let counter = 0;

refs.increment.addEventListener('click', incrementOnClick);
refs.decrement.addEventListener('click', decrementOnClick);

function incrementOnClick() {
    counter += 1;
    refs.counterValue.textContent = counter;
}

function decrementOnClick() {
    counter -= 1;
    refs.counterValue.textContent = counter;
}