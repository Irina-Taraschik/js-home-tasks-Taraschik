"use strict";

var canv = document.getElementById('wrapper'),
	context = canv.getContext("2d"),
	canvCenterX = canv.offsetWidth / 2, // узнаем центр canvas по X
	canvCenterY = canv.offsetHeight / 2, // узнаем центр canvas по Y
	radius = 120,
	angleValue = 0,
	distance = 30,
	// для электронных часов
	digitalWatch,
	digitalWatchText,
	digitalWatchWidth = 90,
	digitalWatchHeight = 25,
	digitalWatchRadius = 70,
	// (для стрелки часов)
	hourArrow,
	hourArrowHeight = 50,
	hourArrowWidth = 9,
	// для стрелки минут
	minuteArrow,
	minuteArrowHeight = 110,
	minuteArrowWidth = 5,
	// для стрелки секунд
	secondArrow,
	secondArrowHeight = 135,
	secondArrowWidth = 2,
	hoursDeg,
	minutesDeg,
	secondsDeg,
	hourDigits = 12;

function bigWatch() {
	context.fillStyle = "#F2F2F2";
	context.beginPath();
	context.arc(canvCenterX,canvCenterY,150,0,Math.PI*2, false);
	context.fill();

	for (var i = 1; i <= hourDigits; i++) {
		var smallCircleCX,
			smallCircleCY,
			smallCircleRadius = 20,
			smallCircleColor = "#F9F9F9",
			angle;

		angleValue += distance;
		angle = angleValue / 180 * Math.PI;

		smallCircleCX = Math.round(canvCenterX + radius * Math.sin(angle));
		smallCircleCY = Math.round(canvCenterY - radius * Math.cos(angle));

		context.beginPath();
		context.fillStyle = smallCircleColor;
		context.arc(smallCircleCX,smallCircleCY,smallCircleRadius,0,Math.PI*2, false);
		context.fill();

		context.fillStyle ='black';
		context.font ="normal normal 20px 'Times New Roman'";
		context.textAlign='center';
		context.textBaseline='middle';
		context.fillText(i,smallCircleCX, smallCircleCY);
	}
}

function digitalWatch() {
	var time = new Date();
	context.globalCompositeOperation = "source-over";
	context.fillStyle = "#F9F9F9";
	context.beginPath();
	context.fillRect(canvCenterX - digitalWatchWidth/2, canvCenterY - digitalWatchRadius - digitalWatchHeight/2, 100, 25);
	context.fill();
	
	context.fillStyle = "black";
	digitalWatchText = time.toLocaleTimeString();
	context.font ="normal normal 25px 'Times New Roman'";
	context.textAlign='center';
	context.textBaseline='middle';
	context.fillText(digitalWatchText, canvCenterX, canvCenterY - digitalWatchRadius);	
	context.fill();
}

function hoursArrow() {
	var time = new Date();
	hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
	context.strokeStyle = "black";
	context.lineWidth = hourArrowWidth;
	context.lineCap = "round";
	context.beginPath();
	context.moveTo(canvCenterX, canvCenterY);
	context.lineTo(canvCenterX + hourArrowHeight * Math.sin(hoursDeg/180*Math.PI), canvCenterY - hourArrowHeight * Math.cos(hoursDeg/180*Math.PI));
	context.stroke();
}

function minutesArrow() {
	var time = new Date();
	minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
	context.strokeStyle = "black";
	context.lineWidth = minuteArrowWidth;
	context.lineCap = "round";
	context.beginPath();
	context.moveTo(canvCenterX, canvCenterY);
	context.lineTo(canvCenterX + minuteArrowHeight * Math.sin(minutesDeg/180*Math.PI), canvCenterY - minuteArrowHeight * Math.cos(minutesDeg/180*Math.PI));
	context.stroke();
}

function secondsArrow() {
	var time = new Date();
	secondsDeg = 6 * time.getSeconds();
	context.strokeStyle = "red";
	context.lineWidth = secondArrowWidth;
	context.lineCap = "round";
	context.beginPath();
	context.moveTo(canvCenterX, canvCenterY);
	context.lineTo(canvCenterX + secondArrowHeight * Math.sin(secondsDeg/180*Math.PI), canvCenterY - secondArrowHeight * Math.cos(secondsDeg/180*Math.PI));
	context.stroke();
}

function arrows() {
	bigWatch();
	digitalWatch();
	hoursArrow();
	minutesArrow();
	secondsArrow();
}
window.onload = arrows();
window.setInterval (arrows, 1000);