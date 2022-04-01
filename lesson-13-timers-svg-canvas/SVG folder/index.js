'use strict';
const baseRadius = 300; //радиус циферблата
const numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
const circleRadius = 30; // радиус кружков с цифрами
const dotSize = 14; //размер точки в центре часов
const svg = document.getElementById('wrapper');
let clockFace;
let svgCenterX;
let svgCenterY;

svg.appendChild(createWatch());
setInterval(tickTimer, 1000);

// UI
function createWatch() {
  let base = document.createElement('div');
  base.id = 'base';
  base.style.width = baseRadius + 'px';
  base.style.height = baseRadius + 'px';
  base.appendChild(createClockFace());
  base.appendChild(createDigitalWatch());
  base.appendChild(createArrow('hours', 6));
  base.appendChild(createArrow('minutes', 4));
  base.appendChild(createArrow('seconds', 2));
  base.appendChild(createDecorativeDot(dotSize));
  return base;
}

function createClockFace() {
  /// пр изменении clockface на svg - пропадают цифры с кружками
  clockFace = document.createElementNS('http://www.w3.org/2000/svg', "circle");
  // clockFace.setAttribute("cx", 150);
  // clockFace.setAttribute("cy", 150);
  // clockFace.setAttribute("r", 150);
  clockFace.setAttribute("fill", "black");
  svg.appendChild(clockFace);
  svgCenterX = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width / 2; //узнаем центр svg по X
  svgCenterY = svg.getBoundingClientRect().top + svg.getBoundingClientRect().height / 2; //узнаем центр svg по Y

  for (let number = 1; number <= 12; number++) {
    let angle = number * 30 / 180 * Math.PI;
    let x = ((baseRadius - circleRadius) / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
    let y = ((baseRadius - circleRadius) / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
    clockFace.appendChild(createHourCircle(x, y, number));
  }
  return clockFace;
}

function createHourCircle(circleX, circleY, number) {
  let circle = document.createElement('div');
  circle.className = "number";
  circle.style.top = circleY + 'px';
  circle.style.left = circleX + 'px';
  circle.appendChild(document.createTextNode(number));
  return circle;
}

function createDigitalWatch() {
  let textClock = document.createElement('div');
  textClock.className = 'textclock';
  textClock.style.top = baseRadius / 2 + baseRadius / 10 + 'px';
  textClock.style.left = baseRadius / 2 - 50 + 'px';
  ['hourstext', 'minutestext', 'secondstext'].map(watchDigits => {
    let digits = document.createElement('span');
    digits.className = watchDigits;
    textClock.appendChild(digits);
  });
  return textClock;
}

function createArrow(arrowType, arrowWidth) {
  let arrow = document.createElement('div');
  arrow.className = arrowType + ' arrow';
  arrow.style.top = baseRadius / 2 - (arrowWidth / 2) + 'px';
  arrow.style.left = baseRadius / 2 + 'px';
  arrow.style.transformOrigin = `0% ${arrowWidth / 2}px`;
  return arrow;
}

////////////////////////////////////////////////////////////////
function createHourArrow() {
  let hourArrow = document.createElementNS('http://www.w3.org/2000/svg', "line");
  hourArrow.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
  hourArrow.setAttribute("y1", svgCenterY - 50 - svg.getBoundingClientRect().top);
  hourArrow.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
  hourArrow.setAttribute("y2", svgCenterY);
  hourArrow.setAttribute("stroke", "black");
  hourArrow.setAttribute("stroke-width", 9);
  hourArrow.setAttribute("stroke-linecap", "round");
  svg.appendChild(hourArrow);
}
createHourArrow();

function createMinuteArrow() {
  minuteArrow = document.createElementNS('http://www.w3.org/2000/svg', "line");
  minuteArrow.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
  minuteArrow.setAttribute("y1", svgCenterY - 110 - svg.getBoundingClientRect().top);
  minuteArrow.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
  minuteArrow.setAttribute("y2", svgCenterY);
  minuteArrow.setAttribute("stroke", "black");
  minuteArrow.setAttribute("stroke-width", 5);
  minuteArrow.setAttribute("stroke-linecap", "round");
  svg.appendChild(minuteArrow);
}

function createSecondArrow() {
  let secondArrow = document.createElementNS('http://www.w3.org/2000/svg', "line");
  secondArrow.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
  secondArrow.setAttribute("y1", svgCenterY - 135 - svg.getBoundingClientRect().top);
  secondArrow.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
  secondArrow.setAttribute("y2", svgCenterY);
  secondArrow.setAttribute("stroke", "red");
  secondArrow.setAttribute("stroke-width", 2);
  secondArrow.setAttribute("stroke-linecap", "round");
  svg.appendChild(secondArrow);

}
////////////////////////////////////////////////////////////////

function createDecorativeDot(size) {
  let dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.width = size + 'px';
  dot.style.height = size + 'px';
  dot.style.top = baseRadius / 2 - size / 2 + 'px';
  dot.style.left = baseRadius / 2 - size / 2 + 'px';
  return dot;
}

// Logic

function tickTimer() {
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  let thisSecondRotate = (second / 60) * 360 - 90;
  let thisMinuteRotate = (minute) / 60 * 360 - 90;
  let thisHourRotate = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate);
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  let arrow = document.querySelector(`.${handle}`);
  arrow.style.transform = `rotate(${degree}deg)`;
}

function updateDigitalWatch(hour, minute, second) {
  let digitalWatchSeconds = document.querySelector('.secondstext');
  let digitalWatchMinutes = document.querySelector('.minutestext');
  let digitalWatchHours = document.querySelector('.hourstext');
  digitalWatchSeconds.textContent = addZeroToNumber(second);
  digitalWatchMinutes.textContent = addZeroToNumber(minute);
  digitalWatchHours.textContent = addZeroToNumber(hour);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}