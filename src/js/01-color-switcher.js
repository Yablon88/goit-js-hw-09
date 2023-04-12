function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

buttonStop.disabled = 'disabled';
let changeColor = '';

function onStart() {
  buttonStart.disabled = 'disabled';
  buttonStop.disabled = '';
  console.log('старт');

  changeColor = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function onStop() {
  console.log('stop');
  buttonStart.disabled = '';
  buttonStop.disabled = 'disabled';
  clearInterval(changeColor);
}
