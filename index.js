'use strict';

const digits = document.querySelectorAll('.digit'),
pad = num => [Math.floor(num / 10), num % 10],

updateTime = () => {
  const date = new Date(),
  h = date.getHours(),
  m = date.getMinutes(),
  s = date.getSeconds(),

  data = [
    ...pad(h), ...pad(m), ...pad(s)
  ];

  digits.forEach((e, i) => e.innerText = data[i]);
};

updateTime();
setInterval(updateTime, 1000)