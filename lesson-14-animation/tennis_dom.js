"use strict";

var wrapper = document.getElementById('wrapper'),
  gameWidth = '800px',
  gameHeight = '500px';

var startButton = document.createElement('input');
startButton.type = 'button';
startButton.value = 'Start!';
startButton.classList.add('startButton');
// кнопку startButton делаем дочерным элементом body
startButton = document.body.insertBefore(startButton, document.body.children[0]);
startButton.onclick = start;

var scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreBoard');

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
  racket1PosY: wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height / 2 - racket1.getBoundingClientRect().height / 2,
  racket1Speed: 0,
  racket2PosX: wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - racket2.getBoundingClientRect().width / 1.2,
  racket2PosY: wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height / 2 - racket1.getBoundingClientRect().height / 0,
  racket2Speed: 0,
	width: 10,
	height: 120,

  update: function() {
    var racket1Obj = racket1;
    var racket2Obj = racket2;

    racket1Obj.style.left = this.racket1PosX + "px";
    racket1Obj.style.top = this.racket1PosY + "px";

    racket2Obj.style.left = this.racket2PosX + "px";
    racket2Obj.style.top = this.racket2PosY + "px";					
  }
};

var racketsArea = {
  width: 10,
  height: wrapper.getBoundingClientRect().height
};

rackets.update();

var ball = document.createElement('div');
ball.classList.add('ball'); 
ball = wrapper.appendChild(ball);

var ballWork = {
	posX: wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width / 2,
	posY: wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height / 2 - ball.getBoundingClientRect().height / 2,
	speedX: 0,
	speedY: 0,
	width: 30,
	height: 30,

	update: function() {
    var ballObj = ball;
		ballObj.style.left = this.posX + "px";
		ballObj.style.top = this.posY + "px";
  }
};

var ballArea = {
  width: wrapper.getBoundingClientRect().width,
	height: wrapper.getBoundingClientRect().height
};

ballWork.update();

var settimeout;
var goalMessage = document.createElement('div');

goalMessage.innerHTML = 'Goal',

goalMessage.classList.add('goalMessage');
goalMessage = wrapper.appendChild(goalMessage);
wrapper.style.width = gameWidth;
wrapper.style.height = gameHeight;

requestAnimationFrame(tick);

window.requestAnimFrame = (function(){ 
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){ 
            window.setTimeout(callback, 1000 / 60); 
          }; 
})();

window.addEventListener("keydown", function(EO) {
	EO = EO || window.event;
    EO.preventDefault();

    if (EO.keyCode === 17) {
   		rackets.racket1Speed = 5;
   	}

   	if (EO.keyCode === 16) {
   		rackets.racket1Speed = -5;
   	}

   	if (EO.keyCode === 40) {
   		rackets.racket2Speed = 5;
   	}

   	if (EO.keyCode === 38) {
   		rackets.racket2Speed = -5;
   	}
});

window.addEventListener("keyup", function(EO) {
	EO = EO || window.event;
    EO.preventDefault();

    if (EO.keyCode === 17) {
   		rackets.racket1Speed = 0;
   	}

   	if (EO.keyCode === 16) {
   		rackets.racket1Speed = 0;
   	}

   	if (EO.keyCode === 40) {
   		rackets.racket2Speed = 0;
   	}

   	if (EO.keyCode === 38) {
   		rackets.racket2Speed = 0;
   	}
});

// функция, чтобы на табло высветились очки игроков
function scoreBoardShow() {
	scoreBoard.innerHTML = score1 + ":" + score2;
}
scoreBoardShow();

function start() {
	ballWork.speedX = 3;
	ballWork.speedY = 1;
}

function tick() {
	rackets.update();
	rackets.racket1PosY += rackets.racket1Speed;
	// узнаем, вылетела ли ракетка ниже пола
	if (rackets.racket1PosY + rackets.height > (wrapper.getBoundingClientRect().top + racketsArea.height)) {
		rackets.racket1PosY = wrapper.getBoundingClientRect().top + racketsArea.height - rackets.height;
	}
  // узнаем, вылетела ли ракетка выше потолка
	if (rackets.racket1PosY < wrapper.getBoundingClientRect().top) {
		rackets.racket1PosY = wrapper.getBoundingClientRect().top;
	}
   	rackets.racket2PosY += rackets.racket2Speed;
  // узнаем, вылетела ли ракетка ниже пола
	if (rackets.racket2PosY + rackets.height > (wrapper.getBoundingClientRect().top + racketsArea.height)) {
		rackets.racket2PosY = wrapper.getBoundingClientRect().top + racketsArea.height - rackets.height;
	}
  // узнаем, вылетела ли ракетка выше потолка
	if (rackets.racket2PosY < wrapper.getBoundingClientRect().top) {
		rackets.racket2PosY = wrapper.getBoundingClientRect().top;
	}

	ballWork.posX -= ballWork.speedX;
	// вылетел ли мяч правее стены
	if ((ballWork.posY + ballWork.height < rackets.racket2PosY || ballWork.posY > (rackets.racket2PosY + rackets.height)) && ballWork.posX+ballWork.width >= (wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width)) {
		
		score1 += 1;
		scoreBoardInnerHTML();
		ballWork.speedX = 0;
		ballWork.speedY = 0;
		goalMessage.innerHTML = messageGoalText;

		ballWork.posX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - ballWork.width - 1;
		
		settimeout = window.setTimeout(function () {
			goalMessage.innerHTML = "";
			ballWork.posX = wrapper.getBoundingClientRect().left + rackets.width;
			ballWork.posY = rackets.racket1PosY + rackets.height/2;
			start();
		}, 2000);

	} else if (!(ballWork.posY + ballWork.height < rackets.racket2PosY || ballWork.posY > (rackets.racket2PosY + rackets.height)) && ballWork.posX+ballWork.width > (rackets.racket2PosX)) {
		ballWork.speedX =- ballWork.speedX;
        ballWork.posX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - rackets.width - ballWork.width;
	}

    // вылетел ли мяч левее стены
	if ((ballWork.posY + ballWork.height < rackets.racket1PosY || ballWork.posY > (rackets.racket1PosY + rackets.height)) && ballWork.posX <= (wrapper.getBoundingClientRect().left)) {
		
		score2 += 1;
		scoreBoardInnerHTML();
		ballWork.speedX = 0;
		ballWork.speedY = 0;
		goalMessage.innerHTML = messageGoalText;

		ballWork.posX = wrapper.getBoundingClientRect().left + 1;

		settimeout = window.setTimeout(function () {
			goalMessage.innerHTML = "";
			ballWork.posX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - rackets.width;
			ballWork.posY = rackets.racket2PosY + rackets.height/2;
			start();
		}, 2000);

	} else if (!(ballWork.posY + ballWork.height < rackets.racket1PosY || ballWork.posY > (rackets.racket1PosY + rackets.height)) && ballWork.posX < (rackets.width + rackets.racket1PosX)) {
		ballWork.speedX =- ballWork.speedX;
        ballWork.posX = wrapper.getBoundingClientRect().left + rackets.width;
	}
	
    ballWork.posY -= ballWork.speedY;
    // вылетел ли мяч ниже пола
    if (ballWork.posY + ballWork.height > (wrapper.getBoundingClientRect().top + ballArea.height)) {
        ballWork.speedY =- ballWork.speedY;
        ballWork.posY = wrapper.getBoundingClientRect().top + ballArea.height - ballWork.height;
    }
    // вылетел ли мяч выше потолка
    if (ballWork.posY < wrapper.getBoundingClientRect().top) {
        ballWork.speedY =- ballWork.speedY;
        ballWork.posY = wrapper.getBoundingClientRect().top;
    }

    ballWork.update();
    requestAnimationFrame(tick);
}