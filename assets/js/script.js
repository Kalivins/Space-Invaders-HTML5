/*document.onkeydown = function( event) {

	console.log(event.keyCode);;

}*/

var ship = document.querySelector('#ship');
var droite = 10;
var gauche = -10;

var point = 0;


var pos = ship.getBoundingClientRect().left; // X VAISSEAU
var posY = ship.getBoundingClientRect().top; // Y VAISSEAU



document.addEventListener('keydown', move);
document.addEventListener('keydown', tir);

createAlien();
moveAlien();


/*Génération des aliens*/
function createAlien() {

    /*Création des aliens*/
    for (i = 1; i < 56; i++) {

        var gameContainer = document.querySelector("#gameContainer");

        var alien = document.createElement("img");

        alien.src = "assets/img/sprites/alien_1.svg";
        alien.className = "alienX alien" + i;
		alien.setAttribute('id' , 'alien' + i)
        gameContainer.appendChild(alien);
    }

    /*Positionnement des aliens*/
    var tabAlien = document.querySelectorAll(".alienX");

    var topPos = 5;
    var leftPos = 0;

    for (i = 0; i < 55; i++) {

        var Alien = tabAlien[i];


        switch (true) {

            case (i < 11):
                Alien.style.left = leftPos + "em";
                leftPos += 5;
                break;
            case (i == 11):
                leftPos -= 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
            case (i > 11 && i < 22):
                leftPos -= 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
            case (i == 22):
                topPos += 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
            case (i > 22 && i < 33):
                leftPos += 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
            case (i == 33):
                topPos += 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
            case (i > 33 && i < 44):
                leftPos -= 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
            case (i == 44):
                topPos += 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
            case (i > 44 && i < 55):
                leftPos += 5;
                Alien.style.top = topPos + "em";
                Alien.style.left = leftPos + "em";
                break;
        }

    }

}

function moveAlien() {
    /*Récuperation de tout les aliens*/
    var tabAlien = document.querySelectorAll(".alienX");
    var lastAlien = document.querySelector(".alienX:last-child").getBoundingClientRect().left;
    var widthAlien = document.querySelector(".alienX:last-child").getBoundingClientRect().width;
    var widthBody = document.body.clientWidth - widthAlien;

    /*Gestion du deplacement des aliens*/
    var topPos = 0.3;
    var rightPos = 0.2;
    var leftPos = 1.2;
    var vitesse = 200;

    /*On lance l'animation*/
    var intervalRight = setInterval(frameRigth, vitesse);

    /*animation à droite*/
    function frameRigth() {

        var lastAlien = document.querySelector(".alienX:last-child").getBoundingClientRect().left;

        for (i = 0; i < tabAlien.length; i++) {
            var alienBase = tabAlien[i].getBoundingClientRect().left;
            tabAlien[i].style.left = "calc(" + alienBase + "px + " + rightPos + "em)";
        }
        if (lastAlien >= widthBody) {
            clearInterval(intervalRight);
            frameBottom();
            intervalLeft = setInterval(frameLeft, vitesse);
        }
    }
    
    /*animation à gauche*/
    function frameLeft() {
        var lastAlien = document.querySelector(".alienX:last-child").getBoundingClientRect().left;

        var firstAlien = document.querySelector(".alienX:first-child").getBoundingClientRect().left;

        for (i = 0; i < tabAlien.length; i++) {
            var alienBase = tabAlien[i].getBoundingClientRect().left;
            tabAlien[i].style.left = "calc(" + alienBase + "px - " + leftPos + "em)";

        }
        if (firstAlien <=0) {
            clearInterval(intervalLeft);
            frameBottom();
            intervalRight = setInterval(frameRigth, vitesse);
        }
    }
    
    /*Animation en bas et augmentation de la vitesse*/
    function frameBottom(){
        for (i = 0; i < tabAlien.length; i++) {
            var alienTop = tabAlien[i].getBoundingClientRect().top;
            tabAlien[i].style.top = "calc(" + alienTop + "px + " + topPos + "em)";

        }
        
        vitesse -= 20;
        console.log(vitesse);
        
    }

}


function createMissile() {

    
    var gameContainer = document.querySelector("#gameContainer");
    var elMissile = document.createElement("img");
    elMissile.src = "assets/img/sprites/bomb.svg";
    elMissile.className = "missile";
    elMissile.width = "40";
    elMissile.height = "40";
    gameContainer.appendChild(elMissile);
    var laser = document.createElement('audio');
    laser.src = '../sound/laser.mp3';
    laser.play();

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
		   var missLeft = missile.getBoundingClientRect().left;
        function frame() {
            if (LOL == 0) {
                clearInterval(id);
               
                document.addEventListener("keydown", tir);
            }
			else {
                LOL--;
				/*console.log(LOL);*/
				
				
                document.removeEventListener("keydown", tir);
                missile.style.top = LOL + 'px';
				var aliens = document.querySelectorAll('.alienX');
				
				var missPos =  missile.getBoundingClientRect();
				
				for(var i = 0; i < aliens.length; i++){
					
					
					var aliensPos = aliens[i].getBoundingClientRect();
			
					
					if(missPos.top < aliensPos.bottom){
						if((parseInt(missPos.left) > parseInt(aliensPos.left)) && (parseInt(missPos.right) < parseInt(aliensPos.right))){
							
							var alienTouch = aliens[i].id;
							console.log(aliens[i].id);
							var currentAlien = document.getElementById(aliens[i].id);
							gameContainer.removeChild(missile);
							gameContainer.removeChild(currentAlien);
							score();
							break;
			
							
						
						}else if(LOL == 0){
							gameContainer.removeChild(missile);
						}
					}	
					
				}
            }

        }				   

    }
}

function score(){
	
	point += 10;
	console.log(point);
	document.querySelector('#points').innerHTML = point;
	
	
}








		

