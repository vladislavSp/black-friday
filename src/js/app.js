const daysFields = document.querySelectorAll('*[data-days]');
const hoursFields = document.querySelectorAll('*[data-hours]');
const minutesFields = document.querySelectorAll('*[data-minutes]');
const timerDelimetrs = document.querySelectorAll('*[data-delimetr]');
const text = document.querySelector('.sale__text');

// Return Left Time to input date
const getLeftTime = (year = 2100, month = 1, day = 1) => {
  const dateFuture = new Date(year, month, day);
  const dateNow = Date.now();
  const delta = dateFuture.getTime() - dateNow;

  const days = delta / (60000 * 60 * 24);
  const hours = (days % 1) * 24;
  const minutes = (hours % 1) * 60;
  const seconds = (minutes % 1) * 60;

  return {
    days: Math.floor(days),
    hours: Math.floor(hours),
    minutes: Math.floor(minutes),
    seconds: Math.floor(seconds),
    delta,
  };
}


function insertData(data, fields) {
  if (data < 10) {
    fields[0].textContent = 0;
    fields[1].textContent = data;
  } else {
    fields[0].textContent = parseInt(data / 10);
    fields[1].textContent = (data % 10);
  }
}

let firstData = getLeftTime(2020, 10, 27);
let endData = getLeftTime(2020, 10, 31);
let data;

if (firstData.delta > 0) {
  data = firstData;
  text.textContent = `До начала предложения осталось:`;
} else {
  data = endData;
  text.textContent = `До конца действия предложения осталось:`;
}


let timer = () => {
  insertData(data.days, daysFields);
  insertData(data.hours, hoursFields);
  insertData(data.minutes, minutesFields);
};

// let tick = () => {
//   timerDelimetrs.forEach(el => el.classList.toggle('timer__delimetr--opacity'));
// };

setInterval(timer, 1000);
// setInterval(tick, 1000);
