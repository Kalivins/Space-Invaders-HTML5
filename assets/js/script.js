/*document.onkeydown = function( event) {
	console.log(event.keyCode);;
}*/

var ship = document.querySelector('#ship');
var shipBase = window.getComputedStyle(ship, null).getPropertyValue('left');
var droite = 10;
var gauche = -10;
var pos = ship.getBoundingClientRect().left;

document.addEventListener('keydown', move);

function move() {
console.log(ship.getBoundingClientRect().left);
	
/*    Touche droite*/
    if ((event.keyCode == 39) && pos < (document.body.clientWidth - ship.getBoundingClientRect().width)) {
        pos +=10;
        ship.style.left = pos + "px";
    }
	
/*Touche gauche*/
    if ((event.keyCode == 37) && pos > 0){
         pos -=10;
        ship.style.left = pos + "px";
    }
}




