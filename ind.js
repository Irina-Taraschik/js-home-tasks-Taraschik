'use strict';
// var draw = SVG().addTo('#drawing');
// var rect = draw.rect(100, 100).fill('#333');

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute('style', 'border: 1px solid black');
svg.setAttribute('width', '600');
svg.setAttribute('height', '250');
svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
document.body.appendChild(svg);  

const path = document.createElement("path");
path.setAttribute("d", "M105,72 C105,100 105,100 173,100");
path.setAttribute("fill", "none");
path.setAttribute("stroke-width", "2px");
path.setAttribute("stroke", "rgba(207, 219, 230, 1)");
path.setAttribute("marker-end", "url(#markerArrow)");
document.getElementById("svg").appendChild(path);