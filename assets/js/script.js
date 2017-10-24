/*document.onkeydown = function( event) {
	console.log(event.keyCode);;
}*/

function move(event) {
    console.log(ship.getBoundingClientRect().left);

    /*    Touche droite*/
    if ((event.keyCode == 39 || event.keyCode == 68) && pos < (document.body.clientWidth - ship.getBoundingClientRect().width)) {
        pos += 10;
        ship.style.left = pos + "px";
    }

    /*Touche gauche*/
    if ((event.keyCode == 37 || event.keyCode == 81) && pos > 0) {
        pos -= 10;
        ship.style.left = pos + "px";
    }
}
//On défini notre fonction objet pour les aliens 
/*function Sprite(file, left, top, alienClass) {

    var alienContainer = document.querySelector(".AlienDiv");
    this._node = document.createElement("div");
    this._node.src = file;
    this._node.className = alienClass;
    alienContainer.appendChild(this._node);

    Object.defineProperty(this, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
            this._node.style.left = value + "px";
        }
    });
    Object.defineProperty(this, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
            this._node.style.top = value + "px";
        }
    });
    Object.defineProperty(this, "display", {
        get: function () {
            return this._node.style.display;
        },
        set: function (value) {
            return this._node.style.display = value;
        }
    });

    this.left = left;
    this.top = top;

}*/

/*Génération des aliens*/
function createAlien() {
    for (i = 1; i < 56; i++) {
        

        var gameContainer = document.querySelector("#gameContainer");
        
        var alien = document.createElement("img");
        alien.src = "assets/img/sprites/alien_1.svg";
        alien.className = "alienX alien"+i;
        gameContainer.appendChild(alien);
    }
}

var ship = document.querySelector('#ship');
var shipBase = window.getComputedStyle(ship, null).getPropertyValue('left');
var droite = 10;
var gauche = -10;
var pos = ship.getBoundingClientRect().left;

document.addEventListener('keydown', move);
createAlien();

