"use strict";

var svg = document.getElementById("wrapper"),
	widthOfSvg = 300,
	heightOfSvg = 300,
	svgCenterX,
	svgCenterY,
	bigCircleForWatch,
	// для электронных часов
	digitalWatch,
	digitalWatchText,
	digitalWatchRadius = 70,
	radius = 120,
	angleValue = 0,
	distanceOfDigits = 30,
	time = new Date(),
	// для стрелок часов
	hourArrow,
	elemForArrowHoursWidth = 9,
	minuteArrow,
	elemForArrowMinutesHeight = 110,
	elemForArrowMinutesWidth = 5,
	secondArrow,
	elemForArrowSecondsHeight = 135,
	elemForArrowSecondsWidth = 2,
	hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()),
	minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()),
	secondsDeg = 6 * time.getSeconds() - 6,
	hourDigits = 12;

svg.style.width = widthOfSvg;
svg.style.height = heightOfSvg;
svg.style.xmlns = 'http://www.w3.org/2000/svg';

// для большого круга часов 
bigCircleForWatch = document.createElementNS('http://www.w3.org/2000/svg', "circle");
bigCircleForWatch.setAttribute("cx", 150);
bigCircleForWatch.setAttribute("cy", 150);
bigCircleForWatch.setAttribute("r", 150);
bigCircleForWatch.setAttribute("fill", '#F2F2F2');
svg.appendChild(bigCircleForWatch);

// размер svg и его позиция относительно окна
svgCenterX = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width / 2;
svgCenterY = svg.getBoundingClientRect().top + svg.getBoundingClientRect().height / 2;

for (var i = 1; i <= hourDigits; i++) {
	var svgChildElem = document.createElementNS('http://www.w3.org/2000/svg', "circle"),// создаем кружочик для номеров часов
		svgChildElemText = document.createElementNS('http://www.w3.org/2000/svg', "text"),// создаем цифры для кружочков
		angle,
		smallCircleCX,
		smallCircleCY,
		smallCircleRadius = 20,
    smallCircleColor = "#F9F9F9";

	angleValue += distanceOfDigits;
	angle = angleValue / 180 * Math.PI;

	smallCircleCX = Math.round(svgCenterX + radius * Math.sin(angle) - svg.getBoundingClientRect().left);
	smallCircleCY = Math.round(svgCenterY - radius * Math.cos(angle) - svg.getBoundingClientRect().top);

	// работа над кружочками
	svgChildElem.setAttribute("cx", smallCircleCX);
	svgChildElem.setAttribute("cy", smallCircleCY);
	svgChildElem.setAttribute("r", 20);
	svgChildElem.setAttribute("fill", '#F9F9F9');
	svgChildElem = svg.appendChild(svgChildElem);

	// работа над тексток(т.е цифры)
	svgChildElemText.innerHTML = i;
	svgChildElemText.setAttribute("x", smallCircleCX);
	svgChildElemText.setAttribute("y", smallCircleCY);
	svgChildElemText.setAttribute("text-anchor", "middle");
	svgChildElemText.setAttribute("dominant-baseline", "central");
	svgChildElemText.style.fontSize = 20;
	svgChildElemText = svg.appendChild(svgChildElemText);
}

// для электронных часов
digitalWatch = document.createElementNS('http://www.w3.org/2000/svg', "rect");
svg.appendChild(digitalWatch);
digitalWatch.setAttribute("x", (svgCenterX - digitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
digitalWatch.setAttribute("y", (svgCenterY - digitalWatchRadius) - svg.getBoundingClientRect().left);
digitalWatch.setAttribute("fill", "none");
digitalWatchText = document.createElementNS('http://www.w3.org/2000/svg', "text");
digitalWatchText.setAttribute("x", (svgCenterX - digitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
digitalWatchText.setAttribute("y", (svgCenterY - digitalWatchRadius) - svg.getBoundingClientRect().top);
digitalWatchText.setAttribute("text-anchor", "middle");
digitalWatchText.setAttribute("dominant-baseline", "central");
digitalWatchText.style.fontSize = 25;
digitalWatchText = svg.appendChild(digitalWatchText);

// для стрелок часов
hourArrow = document.createElementNS('http://www.w3.org/2000/svg', "line");
hourArrow.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
hourArrow.setAttribute("y1", svgCenterY - 50 - svg.getBoundingClientRect().top);
hourArrow.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
hourArrow.setAttribute("y2", svgCenterY);
hourArrow.setAttribute("stroke", "black");
hourArrow.setAttribute("stroke-width", elemForArrowHoursWidth);
hourArrow.setAttribute("stroke-linecap", "round");
svg.appendChild(hourArrow);

// для стрелок минут
minuteArrow = document.createElementNS('http://www.w3.org/2000/svg', "line");
minuteArrow.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
minuteArrow.setAttribute("y1", svgCenterY - elemForArrowMinutesHeight - svg.getBoundingClientRect().top);
minuteArrow.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
minuteArrow.setAttribute("y2", svgCenterY);
minuteArrow.setAttribute("stroke", "black");
minuteArrow.setAttribute("stroke-width", elemForArrowMinutesWidth);
minuteArrow.setAttribute("stroke-linecap", "round");
svg.appendChild(minuteArrow);

// для стрелок секунд
secondArrow = document.createElementNS('http://www.w3.org/2000/svg', "line");
secondArrow.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
secondArrow.setAttribute("y1", svgCenterY - elemForArrowSecondsHeight - svg.getBoundingClientRect().top);
secondArrow.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
secondArrow.setAttribute("y2", svgCenterY);
secondArrow.setAttribute("stroke", "red");
secondArrow.setAttribute("stroke-width", elemForArrowSecondsWidth);
secondArrow.setAttribute("stroke-linecap", "round");
svg.appendChild(secondArrow);

// определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
hourArrow.style.transformOrigin = "center 150px";
minuteArrow.style.transformOrigin = "center 150px";
secondArrow.style.transformOrigin = "center 150px";

// функция для определения положение электронных часов и стрелок для часов, минут, секунд
function arrows() {
		// электронные часы
		var time = new Date(); //текущее время
	    digitalWatchText.innerHTML = time.toLocaleTimeString();
		// секундные стрелки
		secondsDeg += 6; //каждую секунду стрелка секунда будет двигать на 6 градусов
	    secondArrow.style.transform = "rotate(" + secondsDeg + "deg)";
	    // минутныеные стрелки
	    minutesDeg += 6 * (1/60); //каждую секунду стрелка минута будет двигать на 6*(1/60) градусов
	    minuteArrow.style.transform = "rotate(" + minutesDeg + "deg)";
	    // часовые стрелки
	    hoursDeg += 6 * (1/360); //каждую секунду стрелка часа будет двигать на 6*(1/360) градусов
	    hourArrow.style.transform = "rotate(" + hoursDeg + "deg)";
	}

window.onload = arrows(); // вызываем функцию arrows на момент загрузки страницы
window.setInterval (arrows, 1000); // устанавливаем setInterval на 1 секунду и выполняем код каждую секунду чтоб стрелки часов, минут и секунд обновляли положени каждую секунду