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
    document.getElementById("gamebox").innerHTML += "<div class='pacman' data-position=r"+positionx+"\c"+positiony+'></div>';
    var increase_x = largeur_div*(positionx-1);
    var increase_y = hauteur_div *(positiony-1);
    $(".pacman").css("left" , increase_x);
    $(".pacman").css("top" , increase_y);
    return document.getElementsByClassName("pacman")[0];
}

function movedown(object) {
    var top_init = parseFloat(object.style.top); // Le problème est ici !!!
    var top = parseFloat(object.style.top);
    var id = setInterval(frame, 10);
    function frame() {
        if (parseFloat(object.style.top) > top_init+hauteur_div) {
            clearInterval(id);
            console.log(object.style.top);
            console.log(top_init);
            console.log('On arrete');
        } else {
            top++;
            object.style.top = top + 'px';
        }
    }
}
// Le code débute ici !!!

Dessinermap(map_niveau1);
var largeur_div = $("#r1c1").width();
var hauteur_div = $("#r1c1").height();

var pacman = Dessinerpacman(13,3);


movedown(pacman);
movedown(pacman);
movedown(pacman);





$("label").click(function(){
    $(this).slideUp();
});




