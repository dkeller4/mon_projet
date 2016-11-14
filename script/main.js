/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */

var nombre_rangees = 14;
var nombre_colonnes = 20;
var i,j ;
var map_niveau1 = [
    [0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0],
    [0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0],
    [0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0],
    [0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0],
    [0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0],
    [0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0],
    [0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0],
    [0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0],
    [0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0],
    [0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0]
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
function Dessinerpacman(positionx,positiony){
    $(".pacman").remove(); // Détruire l'ancien Pacman
    document.getElementById("gamebox").innerHTML += "<div class='pacman' data-position=r"+positionx+"\c"+positiony+'></div>';
    var increase_x = $("#r1c1").width();
    var increase_y = $("#r1c1").height();

    increase_x = increase_x *(positionx-1);
    increase_y = increase_y *(positiony-1);
    $(".pacman").css("left" , increase_x);
    $(".pacman").css("top" , increase_y);
}

// Le code débute ici !!!

Dessinermap(map_niveau1);
Dessinerpacman(5,10);
Dessinerpacman(1,1);
Dessinerpacman(10,1);







$("label").click(function(){
    $(this).slideUp();
});




