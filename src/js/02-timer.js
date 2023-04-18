import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let endDate = '';
let leftTime = '';
let intervalID = '';
let timeDifference = 0;
const dateNow = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    endDate = selectedDates[0];
  },
};

const dateTime = document.querySelector('#datetime-picker');
const picker = flatpickr(dateTime, options);

const buttonStart = document.querySelector('button[data-start]');
buttonStart.disabled = 'disabled';

const daysText = document.querySelector('.value[data-days]');
const hoursText = document.querySelector('.value[data-hours]');
const minutesText = document.querySelector('.value[data-minutes]');
const secondsText = document.querySelector('.value[data-seconds]');

dateTime.addEventListener('input', inputDate);
buttonStart.addEventListener('click', onStart);

function inputDate() {
  if (intervalID) {
    clearInterval(intervalID);
  }

  timeDifference = 0;

  timeDifference = picker.selectedDates[0].getTime() - dateNow;
  if (timeDifference < 0) {
    return window.alert('Please choose a date in the future');
  }
  buttonStart.disabled = '';
}

function onStart() {
  timeDifference = picker.selectedDates[0].getTime() - dateNow;
  buttonStart.disabled = 'disabled';

  intervalID = setInterval(() => {
    if (timeDifference > 1000) {
      timeDifference -= 1000;
      leftTime = convertMs(timeDifference);
      daysText.textContent = leftTime.days;
      hoursText.textContent = leftTime.hours;
      minutesText.textContent = leftTime.minutes;
      secondsText.textContent = leftTime.seconds;
    } else {
      clearInterval(intervalID);
    }
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
