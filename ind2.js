'use strict';
(function() {
  var clockFace = document.getElementById('clock-face').createElementNS("http://www.w3.org/2000/svg", "clockFace");
  var clockFaceClone = clockFace.cloneNode();

  var arrows = document.createElementNS("http://www.w3.org/2000/svg", "arrows");
  var arrows = [secondsArrow, minutesArrow, hoursArrow];
  
  var secondsArrow = document.getElementById('secondsArrow').createElementNS("http://www.w3.org/2000/svg", "secondsArrow");
  secondsArrow.setAttribute('style', 'border: 1px solid black');
  secondsArrow.setAttribute('width', '2');
  secondsArrow.setAttribute('height', '140');
  secondsArrow.setAttribute('top', '20');
  secondsArrow.setAttribute('x1', '0');
  secondsArrow.setAttribute('y1', '12');
  secondsArrow.setAttribute('x2', '0');
  secondsArrow.setAttribute('y2', '-130');
  secondsArrow.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  document.getElementById("secondsArrow").appendChild(secondsArrow);

  var minutesArrow = document.getElementById('minutesArrow').createElementNS("http://www.w3.org/2000/svg", "minutesArrow");
  minutesArrow.setAttribute('width', '5');
  minutesArrow.setAttribute('height', '120');
  minutesArrow.setAttribute('top', '40');
  var hoursArrow = document.getElementById('hoursArrow').createElementNS("http://www.w3.org/2000/svg", "hoursArrow");
  hoursArrow.setAttribute('width', '10');
  hoursArrow.setAttribute('height', '90');
  hoursArrow.setAttribute('top', '70');
  
  var DIGIT_TIME_WRAP_W = 100;
  var LITTLE_CIRCLE_H = 40;
  var LITTLE_CIRCLE_W = 40;
  var CLOCK_HEIGHT = 300;
  var CLOCK_WIDTH = 300;
  var digitalTimeWrap;
  var secondsArrow;
  var minutesArrow;
  var hoursArrow;

  function createClockCircles(clockWidth, clockFaceClone, radiusLittleCircle, w, h) {
    for (var i = 1; i <=12; i++) {
      var littleCircle = document.createElement('div');
      var clockCircleText = document.createTextNode(i);
      var angle = (30 * i) / 180 * Math.PI;
      var radius = clockWidth / 2 - radiusLittleCircle * 1.5;
      var littleCircleX = clockWidth / 2 + radius * Math.sin(angle);
      var littleCircleY = clockWidth / 2 - radius * Math.cos(angle);
      littleCircle.style.left = Math.round(littleCircleX - radiusLittleCircle) + 'px';
      littleCircle.style.top = Math.round(littleCircleY - radiusLittleCircle) + 'px';
      littleCircle.style.width = w + 'px';
      littleCircle.style.height = h + 'px';
      littleCircle.className = 'little-circle';
      littleCircle.appendChild(clockCircleText);
      clockFaceClone.appendChild(littleCircle);
    }
  }

  function createDigitalTime(clockWidth, clockFaceClone, date, w) {
    var digitalTimeWrap = document.createElement('div');
    var time = date.toLocaleString('ru-RU', {hour: 'numeric', minute: 'numeric', second: 'numeric'});
    digitalTimeWrap.textContent = time;
    clockFaceClone.appendChild(digitalTimeWrap);
    digitalTimeWrap.style.top = clockWidth / 4 + 'px';
    digitalTimeWrap.style.left = 0;
    digitalTimeWrap.style.right = 0;
    digitalTimeWrap.style.width = w + 'px';
    digitalTimeWrap.id = 'digital-time-wrap';
  }

  function createArrows(clockWidth, clockFaceClone, arrows) {
    for (var i = 0; i < arrows.length; i++) {
      var arrow = document.createElement('div');
      arrow.style.width = arrows[i].width + 'px';
      arrow.style.height = arrows[i].height + 'px';
      arrow.style.borderRadius = arrows[i].width / 2 + 'px';
      arrow.style.transformOrigin = '50% ' + (arrows[i].height - 10) + 'px';
      arrow.style.top = arrows[i].top + 'px';
      arrow.style.left = clockWidth / 2 - arrows[i].width / 2 + 'px';
      arrow.className = 'arrow';
      arrow.id = arrows[i].id;
      clockFaceClone.appendChild(arrow);
    }
  }

  function updateDigitalTime(digitalTimeWrap, date) {
    var time = date.toLocaleString('ru-RU', {hour: 'numeric', minute: 'numeric', second: 'numeric'});
    digitalTimeWrap.textContent = time;
  }

  function rotateArrow(arrow, angle) {
    arrow.style.transform = 'rotate(' + angle + 'deg)';
  }

  function getTime() {
    var date = new Date();
    return {
      lastDate: date,
      seconds: date.getSeconds(),
      minutes: date.getMinutes() + date.getSeconds() / 60,
      hours: date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600
    };
  }

  function showClock() {
    clearTimeout(timer);
    rotateArrow(secondsArrow, getTime().seconds * 6);
    rotateArrow(minutesArrow, getTime().minutes * 6);
    rotateArrow(hoursArrow, getTime().hours * 30);
    updateDigitalTime(digitalTimeWrap, getTime().lastDate);
    var timer = setTimeout(showClock, 1000);
  }

  function startShowClock() {
    createClockCircles(CLOCK_WIDTH, clockFaceClone, LITTLE_CIRCLE_W / 2, LITTLE_CIRCLE_W, LITTLE_CIRCLE_H);
    createDigitalTime(CLOCK_WIDTH, clockFaceClone, getTime().lastDate, DIGIT_TIME_WRAP_W);
    createArrows(CLOCK_WIDTH, clockFaceClone, arrows);
    document.body.replaceChild(clockFaceClone, clockFace);
    secondsArrow = document.getElementById('secondsArrow');
    minutesArrow = document.getElementById('minutesArrow');
    hoursArrow = document.getElementById('hoursArrow');
    digitalTimeWrap = document.getElementById('digital-time-wrap');
    showClock();
  }

  startShowClock();
}());