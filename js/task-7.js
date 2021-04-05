const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.setAttribute('min', 8);
fontSizeControl.setAttribute('max', 32);
fontSizeControl.setAttribute('step', 2);
fontSizeControl.setAttribute('value', 16);

fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    textSpan.style.fontSize = `${event.currentTarget.value}px`;
}