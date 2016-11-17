/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */
var pos_pacman = {
    x:0,
    y:0
};
const nombre_erables1 = 10;
var nombre_rangees = 14;
var nombre_colonnes = 20;
var i,j
var destroyed =0 ;
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
    var increase_x = largeur_div*(position.x);
    var increase_y = hauteur_div *(position.y);
    $pacman.css("left" , increase_x);
    $pacman.css("top" , increase_y);
}
function Dessinererable(nombre_erables){
    var data_erables = [];

    for (i=0 ; i< nombre_erables ; i++) {

        do {
            var random_x =(Math.floor(Math.random()*20));
            var random_y =(Math.floor(Math.random()*14));
        } while (map_niveau1[random_y][random_x] == 1 || (random_x ==0 && random_y==0) ); // Pour la map les x et les y sont inversés

        document.getElementById("gamebox").innerHTML += "<div class='erable' data-x='"+random_x+"' data-y='"+random_y+"'id='" + i + "' ></div>";
        var erable = $('.erable#'+i);
        erable.css("left" , largeur_div*(random_x));
        erable.css("top" , hauteur_div *(random_y));
        data_erables[i]= {
            x:random_x,
            y:random_y
        };
    }
      return data_erables;
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
    if (e.keyCode == '38' && map_niveau1[pos_pacman.y-1][pos_pacman.x] != 1) { // Pour la map les x et les y sont inversés
        vers_le_haut();
    }
    else if (e.keyCode == '40' && map_niveau1[pos_pacman.y+1][pos_pacman.x] != 1) {
        vers_le_bas();
    }
    else if (e.keyCode == '37' && map_niveau1[pos_pacman.y][pos_pacman.x-1]!= 1) {
        vers_la_gauche();
    }
    else if (e.keyCode == '39' && map_niveau1[pos_pacman.y][pos_pacman.x+1] !=1) {
        vers_la_droite();
    }
    Controle_erables();
}

function Controle_erables() {
    for (i=0 ; i<nombre_erables1-destroyed ; i++){
        if(pos_pacman.x == data_erables[i].x && pos_pacman.y == data_erables[i].y ) {
            $('.erable[data-x="'+pos_pacman.x+'"][data-y="'+pos_pacman.y+'"]').remove();
            data_erables.splice(i,1);
            destroyed++;
            console.log("Removed");
        }
    }
}


// Le code débute ici !!!
Dessinermap(map_niveau1);
var div_info = $("#r1c1");
var largeur_div = div_info.width();
var hauteur_div = div_info.height();


Dessinerpacman(pos_pacman);
var data_erables = Dessinererable(nombre_erables1);
document.onkeydown = Mouvement;


console.log(data_erables); // Je n'arrive pas à accéder à l'information en dehors de la fonction


$("label").click(function(){
    $(this).slideUp();
});






