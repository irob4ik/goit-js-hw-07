const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', nameOutputOnType);

function nameOutputOnType(event) {
    event.currentTarget.value === '' ?
        refs.outputName.textContent = 'незнакомец' :
        refs.outputName.textContent = event.currentTarget.value;
}