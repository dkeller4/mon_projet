/*** Created by dkeller on 2016-10-27.*/
"use strict"; /* Exiger la déclaration */

var i;

for ( i=1 ; i<=99 ; i=i+1){
    if ( i % 2 == 1 ) {
        document.write( i , ", "); //impairs
    }
    else {
        document.write("<em>" , i , "</em>, "); //pairs
    }

}
document.write(100); //dernier nombre 100 sans virgule



