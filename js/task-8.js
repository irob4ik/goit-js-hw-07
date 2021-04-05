const refs = {
    inputControls: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

let boxesToCreate = 0;

refs.inputControls.addEventListener('input', numberOfBoxes);
refs.renderBtn.addEventListener('click', letsMakeSomeMagic);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function numberOfBoxes(event) {
    boxesToCreate = event.currentTarget.value;
}

function letsMakeSomeMagic() {
    createBoxes(boxesToCreate);
}

function createBoxes(amount) {
    const divElements = [];
    let size = 30;

    for (let i = 1; i <= amount; i += 1) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
                
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = '#' + randomColor;
        divEl.style.width = size + 'px';
        divEl.style.height = size + 'px';
        divEl.style.display = 'inline-block';
        divEl.style.margin = '1px';
        divElements.push(divEl);
        size += 10;
    }
    boxes.append(...divElements);
}

function destroyBoxes() {
    boxes.innerHTML = '';
}
