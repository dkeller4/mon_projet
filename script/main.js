/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */

var nombre_rangees = 14;
var nombre_colonnes = 20;
var i,j ;
var map_niveau1 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function Inittableau() {
    for (i=1; i<=nombre_rangees ; i++) {
        for (j = 1; j <= nombre_colonnes; j++) {
            document.getElementById("gamebox").innerHTML += "<div id=r" + i + "\c" + j + ' class="img1"></div>';
        }
    }
}

function Dessinerimg (positionx,positiony, numero_img) { //position x pour les rangées, position y pour les colonnes
    var div= document.getElementById("r"+positionx+"c"+positiony);
    div.outerHTML=div.outerHTML.replace("img1","img" + numero_img);
}

function Dessinermap (map) { // la map introduite doit être un tableau à deux dimensions
    Inittableau();
    for (i=1; i<=nombre_rangees ; i++) {
        for (j = 1; j <= nombre_colonnes; j++) {
            Dessinerimg (i,j,map[i-1][j-1]);
        }
    }
}


Dessinermap(map_niveau1);

