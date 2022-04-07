"use strict";

var wrapper = document.getElementById('wrapper'),
  gameWidth = '750px',
  gameHeight = '450px';

var startButton = document.createElement('input');
startButton.type = 'button';
startButton.value = 'Start!';
startButton.classList.add('startButton');
// кнопку startButton делаем дочерным элементом body
startButton = document.body.insertBefore(startButton, document.body.children[0]);
startButton.onclick = start;

var scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreBoard');
// функция, чтобы на табло высветились очки игроков
scoreBoardShow();
// scoreBoard делаем дочерным элементом body
scoreBoard = document.body.insertBefore(scoreBoard, document.body.children[1]);



var score1 = 0;
var score2 = 0;

var racket1 = document.createElement('div');
racket1.classList.add('racket1');
racket1 = wrapper.appendChild(racket1);

var racket2 = document.createElement('div');
racket2.classList.add('racket2');
racket2 = wrapper.appendChild(racket2);

var rackets = {
  racket1PosX: wrapper.getBoundingClientRect().left,
  racket1PosY: wrapper.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racket1.getBoundingClientRect().height/2,
  racket1Speed: 0,

};
var racketsArea;

var ball = document.createElement('div');
var ballWork;
var ballArea;
var setTimeout = null;
var goalMessage = document.createElement('div');


goalMessage.innerHTML = 'Goal',
// goalMessageText = 'Goal',
goalMessage.classList.add('goalMessage');
goalMessage = wrapper.appendChild(goalMessage);
wrapper.style.width = gameWidth;
wrapper.style.height = gameHeight;

requestAnimationFrame(tick);

// window.requestAnimFrame = (function(){ 
//   return  window.requestAnimationFrame       || 
//           window.webkitRequestAnimationFrame || 
//           window.mozRequestAnimationFrame    || 
//           window.oRequestAnimationFrame      || 
//           window.msRequestAnimationFrame     || 
//           function( callback ){ 
//             window.setTimeout(callback, 1000 / 60); 
//           }; 
// })();
