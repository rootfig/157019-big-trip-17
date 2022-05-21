import * as dayjs from 'dayjs';
const duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

// Источник https://learn.javascript.ru/task/random-int-min-max
const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const formatingToDate = (dueDate) => dayjs(dueDate).format('MMM D');
const formatingToTime = (dueDate) => dayjs(dueDate).format('HH:MM');

const differenceTime = (dayTo, dayFrom) => dayjs(dayTo).diff(dayFrom, 'hour');


export { randomInteger, formatingToDate, formatingToTime, differenceTime };
