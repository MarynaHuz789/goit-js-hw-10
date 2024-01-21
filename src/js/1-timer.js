import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector("#datetime-picker")
const startBtn = document.querySelector('[data-start]')
const daysElem = document.querySelector('[data-days]')
const hoursElem = document.querySelector('[data-hours]')
const minutesElem = document.querySelector('[data-minutes]')
const secondsElem = document.querySelector('[data-seconds]')

let userSelectedDate 


function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function convertMs(ms) {
 const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    
}

function upateCountDown() {
    const currentTime = new Date().getTime()
    const timeDifference = userSelectedDate - currentTime
    if (timeDifference <= 0) {
        daysElem.textContent = "00"
        hoursElem.textContent = "00"
        minutesElem.textContent = "00"
        secondsElem.textContent = "00"
        return
    }
    const { days, hours, minutes, seconds } = convertMs(timeDifference)
    
 daysElem.textContent = addLeadingZero(days)
 hoursElem.textContent = addLeadingZero(hours)
 minutesElem.textContent = addLeadingZero(minutes)
 secondsElem.textContent = addLeadingZero(seconds)
}

function startTimer() {
    setInterval(upateCountDown, 1000)
}

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate.getTime() <= new Date().getTime()){
          iziToast.error({
              title: "Error",
              message: "Please choose a date in the future"
          })
          startBtn.setAttribute("disabled", "true")
        }
      else {
          startBtn.removeAttribute("disabled")
        }
  },
})

startBtn.addEventListener("click", () => {
    startTimer()
})

