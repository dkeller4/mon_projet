/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */

var nombre_rangees = 14;
var nombre_colonnes = 20;
var i,j ;

function Inittableau() {
    for (i=1; i<=nombre_rangees ; i++) {
        for (j = 1; j <= nombre_colonnes; j++) {
            var text = "<div id=r" + i + "c" + j + ' class="img1"></div>';
            document.getElementById("gamebox").innerHTML += text;
        }
    }
}

function Dessinerimg (positionx,positiony, numero_img) { //position x pour les rangées, position y pour les colonnes
    var div= document.getElementById("r"+positionx+"c"+positiony);
    div.outerHTML=div.outerHTML.replace("img1","img" + numero_img);
}

Inittableau();
Dessinerimg (10,20, 0);
Dessinerimg (11,20, 0);

