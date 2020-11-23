const daysFields = document.querySelectorAll('*[data-days]');
const hoursFields = document.querySelectorAll('*[data-hours]');
const minutesFields = document.querySelectorAll('*[data-minutes]');

// Return Left Time to input date
const getLeftTime = (year = 2100, month = 1, day = 1) => {
  const dateFuture = new Date(year, month, day);
  const dateNow = Date.now();
  const delta = dateFuture.getTime() - dateNow;

  const deltaDiff = delta % 1000;

  const days = delta / (60000 * 60 * 24);
  const hours = (days % 1) * 24;
  const minutes = (hours % 1) * 60;

  return {
    days: Math.floor(days),
    hours: Math.floor(hours),
    minutes: Math.floor(minutes),
    delta: deltaDiff,
  };
}


function insertData(data, fields) {
  if (data.days < 10) {
    fields[0].textContent = 0;
    fields[1].textContent = data;
  } else {
    fields[0].textContent = parseInt(data / 10);
    fields[1].textContent = (data % 10);
  }
}

let timer = () => {
  let data = getLeftTime(2020, 10, 27);

  insertData(data.days, daysFields);
  insertData(data.hours, hoursFields);
  insertData(data.minutes, minutesFields);
};

setInterval(timer, 1000);
