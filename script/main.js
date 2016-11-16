/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */
var pos_pacman = {
    x:1,
    y:1
};
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

function Dessinerpacman(position){
    $('#pacman').remove();

    document.getElementById("gamebox").innerHTML += "<div id='pacman' ></div>";
    var $pacman =$('#pacman');
    var increase_x = largeur_div*(position.x-1);
    var increase_y = hauteur_div *(position.y-1);
    $pacman.css("left" , increase_x);
    $pacman.css("top" , increase_y);
}

function movedown(position) {
    var from_top = parseFloat(object.style.top);
    var to_top = parseFloat(object.style.top)+hauteur_div; // Le problème est ici !!!

    var id = setInterval(frame, 10);
    function frame() {
        if (from_top > to_top) {
            clearInterval(id);
            id=null;
        } else {
            from_top++;
            object.style.top = from_top + 'px';
        }
    }
}

function vers_le_bas() {
    var to_top = pos_pacman.y+1;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos_pacman.y == to_top) {
            clearInterval(id);
            id=null;
        } else {
            pos_pacman.y+=0.25;
            Dessinerpacman(pos_pacman);
        }
    }
}

function vers_le_haut() {
    var to_top = pos_pacman.y-1;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos_pacman.y == to_top) {
            clearInterval(id);
            id=null;
        } else {
            pos_pacman.y-=0.25;
            Dessinerpacman(pos_pacman);
        }
    }
}
function vers_la_gauche() {
    var to_top = pos_pacman.x-1;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos_pacman.x == to_top) {
            clearInterval(id);
            id=null;
        } else {
            pos_pacman.x-=0.25;
            Dessinerpacman(pos_pacman);
        }
    }
}
function vers_la_droite() {
    var to_top = pos_pacman.x+1;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos_pacman.x == to_top) {
            clearInterval(id);
            id=null;
        } else {
            pos_pacman.x+=0.25;
            Dessinerpacman(pos_pacman);
        }
    }
}
function Mouvement(e) {

    e = e || window.event;
    if (e.keyCode == '38') {
        vers_le_haut();
    }
    else if (e.keyCode == '40') {
        vers_le_bas();
    }
    else if (e.keyCode == '37') {
        vers_la_gauche();
    }
    else if (e.keyCode == '39') {
        vers_la_droite();
    }
}


// Le code débute ici !!!
Dessinermap(map_niveau1);
var div_info = $("#r1c1");
var largeur_div = div_info.width();
var hauteur_div = div_info.height();



Dessinerpacman(pos_pacman);
document.onkeydown = Mouvement;






$("label").click(function(){
    $(this).slideUp();
});






