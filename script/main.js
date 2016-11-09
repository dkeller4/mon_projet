/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */

var nombre_rangees = 14;
var nombre_colonnes = 20;
var i,j ;

function Dessinertableau() {
    for (i=1; i<=nombre_rangees ; i++) {
        for (j = 1; j <= nombre_colonnes; j++) {
            var text = "<div id=r" + i + "c" + j + "></div>";
            document.getElementById("gamebox").innerHTML += text;
        }
    }
}

Dessinertableau();

