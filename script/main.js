/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */
var pos_pacman = {
    x:0,
    y:0
};
const NOMBRE_ERABLES1 = 30;
var nombre_rangees = 14;
var nombre_colonnes = 20;
var i,j,random_x,random_y;
var s = 0;
var m = 0;
var destroyed =0 ;
var data_erables = [];
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

/**
 * Dessine une case de l'arriere-plan en fonction de sa position x,y et de son numéro
 * @param x
 * @param y
 */
function dessiner_case(x,y, numero_img) {
    document.getElementById("gamebox").innerHTML += "<div id=r" + x + "\c" + y + ' class="img' + numero_img+ '"></div>';
}

/**
 * la map introduite doit être un tableau à deux dimensions
 * @param map
 * @constructor
 */
function inittableau(map) {
    for (i=1; i<=nombre_rangees ; i++) {
        for (j = 1; j <= nombre_colonnes; j++) {
            dessiner_case(i,j,map[i-1][j-1]);
        }
    }
}

function creer_pacman(){
    document.getElementById("gamebox").innerHTML += "<div id='pacman' ></div>";
}

/**
 * Positionner pacman en fonction de sa position (objet)
 * @param position
 */
function positionner_pacman(position){
    var $pacman =$('#pacman');
    $pacman.css("left" , largeur_div*(position.x));
    $pacman.css("top" , hauteur_div *(position.y));
}

/** Creer un erable à la position x,y et lui donner un id (numéro)
 *
 * @param x
 * @param y
 * @param id
 */
function creer_erable(x, y , id){
    document.getElementById("gamebox").innerHTML += "<div class='erable' data-x='"+x+"' data-y='"+y+"'id='" + id + "' ></div>";
}

function positionner_erable(x,y,id){
    var erable = $('.erable#'+id);
    erable.css("left" , largeur_div*(x));
    erable.css("top" , hauteur_div *(y));
}

function dessinererable(nombre_erables) {

    for (i = 0; i < nombre_erables; i++) {
        // Pour la map les x et les y sont inversés
        random_x_y();
        creer_erable(random_x, random_y, i);
        positionner_erable(random_x, random_y, i);
        data_erables[i] = {
            x: random_x,
            y: random_y
        }
    }
}

function random_x_y(){
    do {
        random_x = (Math.floor(Math.random() * 20));
        random_y = (Math.floor(Math.random() * 14));
    } while (map_niveau1[random_y][random_x] == 1 || (random_x == 0 && random_y == 0) || double_erable()==true);

}

    /**
     * Cette fonction renvoie le boolean TRUE lorsque les coordonnées x et y ,générées aléatoirement, correspondent déjà à un érable
     * @param positionx
     * @param positiony
     * @returns {boolean}
     */
    function double_erable(){
        for (i=0;i<data_erables.length ; i++){
            if(random_x == data_erables[i].x && random_y == data_erables[i].y){
                return true
            }
        }
        return false
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
            positionner_pacman(pos_pacman);
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
            positionner_pacman(pos_pacman);
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
            positionner_pacman(pos_pacman);
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
            positionner_pacman(pos_pacman);
        }
    }
}
function Mouvement(e) {

    e = e || window.event;
    if (e.keyCode == '38' && map_niveau1[pos_pacman.y-1][pos_pacman.x] == 0) { // Pour la map les x et les y sont inversés
        vers_le_haut();
    }
    else if (e.keyCode == '40' && map_niveau1[pos_pacman.y+1][pos_pacman.x] == 0) {
        vers_le_bas();
    }
    else if (e.keyCode == '37' && map_niveau1[pos_pacman.y][pos_pacman.x-1] == 0) {
        vers_la_gauche();
    }
    else if (e.keyCode == '39' && map_niveau1[pos_pacman.y][pos_pacman.x+1] == 0) {
        vers_la_droite();
    }
    pacman_vs_erables();
}

/**
 * Cette fonction compare la position du pacman avec les positions des érables
 * @constructor
 */
function pacman_vs_erables() {
    for (i=0 ; i<NOMBRE_ERABLES1-destroyed ; i++){
        if(pos_pacman.x == data_erables[i].x && pos_pacman.y == data_erables[i].y ) {

            $('.erable[data-x="'+pos_pacman.x+'"][data-y="'+pos_pacman.y+'"]').remove();
            data_erables.splice(i,1);
            destroyed++;

            score();
            son(point);

            if (destroyed == NOMBRE_ERABLES1){
                ion.sound.stop("mario_theme");
                $('#gamebox').fadeOut("slow");
                ion.sound.play("level_win");
            }
        }
    }
}

function score(){
    $('<p>+1point</p>').appendTo($('#stats_score'));
    var stats =  $('#black_box');
    stats.find('p').remove();
    $('<p>'+destroyed+'</p>').appendTo($(stats));
    stats.find('p').fadeIn(500);
}
function son(text){
    switch (text)
        case "point":  switch (destroyed % 2) {
            case 0: ion.sound.play("point");
                break;
            case 1: ion.sound.play("small_item");
                break;
            case "text" :
        }

}

function init_son (){
    ion.sound({
        sounds: [
            {
                name: "point",
                volume:1.5
            },
            {
                name: "small_item"
            },
            {
                name: "start"
            },
            {
                name: "mario_theme",
                volume:0.2,
                loop: true
            },
            {
                name: "level_win"
            }
        ],
        volume: 0.5,
        path: "sounds/",
        preload: true
    });
    ion.sound.play("start");
    ion.sound.play("mario_theme");
}
function startTime() {
    s++;
    if (s==60){s=0; m+=1}
    $('#black_box2').find('p').text("Timer : " + m + ":" + s);
    var t = setTimeout(startTime, 1000);
}

// Le code débute ici !!!

init_son();startTime();
inittableau(map_niveau1);
var div_info = $("#r1c1");
var largeur_div = div_info.width();
var hauteur_div = div_info.height();

creer_pacman();
positionner_pacman(pos_pacman);

dessinererable(NOMBRE_ERABLES1);
document.onkeydown = Mouvement;

$("label").click(function(){
    $(this).slideUp();
});


