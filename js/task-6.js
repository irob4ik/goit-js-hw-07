const inputValidation = document.querySelector('#validation-input');
const checkNumber = inputValidation.getAttribute('data-length');

inputValidation.addEventListener('blur', checkValidationOnBlur);
inputValidation.addEventListener('focus', removeValidation);

function checkValidationOnBlur(event) {
    let simNumber = event.currentTarget.value.length;    
    simNumber > checkNumber ? inputValidation.classList.add('invalid') : inputValidation.classList.add('valid');  
}

function removeValidation() {
    inputValidation.classList.remove('invalid', 'valid')
}