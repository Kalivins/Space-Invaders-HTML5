/*document.onkeydown = function( event) {

	console.log(event.keyCode);;

}*/

var ship = document.querySelector('#ship');
var droite = 10;
var gauche = -10;
var pos = ship.getBoundingClientRect().left; // X VAISSEAU
var posY = ship.getBoundingClientRect().top; // Y VAISSEAU



document.addEventListener('keydown', move);
document.addEventListener('keydown', tir);
createAlien();
moveAlien();



function createMissile() {

    
    var gameContainer = document.querySelector("#gameContainer");
    var elMissile = document.createElement("img");
    elMissile.src = "assets/img/sprites/bomb.svg";
    elMissile.className = "missile";
    elMissile.width = "40";
    elMissile.height = "40";
    gameContainer.appendChild(elMissile);

}





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

function tir(event) {
    
       if (event.keyCode == 32 || event.keyCode == 90 || event.keyCode == 38) {
        createMissile();
        var missile = document.querySelector('.missile');
        var gameContainer = document.querySelector("#gameContainer");
        var missY = missile.getBoundingClientRect().top;
        var miss = missile.getBoundingClientRect().left;
        missY = posY;
        miss = pos;
        missile.style.left = miss + "px";
        missile.style.display = "block";
        missile.style.top = missY + "px";
        
        var LOL = posY;
        var id = setInterval(frame, 1);
        function frame() {
            if (LOL == 0) {
                clearInterval(id);
                gameContainer.removeChild(missile);
                document.addEventListener("keydown", tir);
            } else {
                LOL--;
                document.removeEventListener("keydown", tir);
                missile.style.top = LOL + 'px';
            }

        }

    }
}
/*

	window.setInterval(function missile(){

		

			for (i = 0 ; i < 10 ; i++){

				missY -= 5; 

				missile.style.top = missY + "px";

				console.log(i);

				console.log(missY);

				}

								}, 300);

		

		

	

		for (i = 0 ; i < 10 ; i++){

				

				window.setInterval (function(){

					

			 		missY -= 5;

					missile.style.top = missY + "px";

					var vitesse = getComputedStyle(missile);

					console.log(missY);

					console.log(i);

					

					if (vitesse.top == -100){

						window.clearInterval;

					}

					

					

				 		

		}, 300)

	}

		

			*/









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

        alien.className = "alienX alien" + i;

        gameContainer.appendChild(alien);

    }

}



function moveAlien() {

    var tabAlien = document.querySelectorAll(".alienX");

    console.log(tabAlien);



}
