'use strict';
(function() {
  var clockFace = document.getElementById('clock-face');
  var clockFaceClone = clockFace.cloneNode();
  var arrows = [{id: 'seconds-arrow', width: 2, height: 140, top: 20},
                {id: 'minutes-arrow', width: 5, height: 120, top: 40},
                {id: 'hours-arrow', width: 10, height: 90, top: 70,}];
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
    secondsArrow = document.getElementById('seconds-arrow');
    minutesArrow = document.getElementById('minutes-arrow');
    hoursArrow = document.getElementById('hours-arrow');
    digitalTimeWrap = document.getElementById('digital-time-wrap');
    showClock();
  }

  startShowClock();
}());
