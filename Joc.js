var Joc = {
    tauler: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    
    puntuacio: 0,
    punctuacioMax: 0,
    pieza: null,
    nextPieza: null,
    nivell: 1,
    comptaNivell: 0, //Cada cop que arriba a 10, l'interval es redueix i puga un nivell, per tant les peçes cauen mes rapid
    comptadorI: 0,
    comptadorJ: 0,
    comptadorL: 0,
    comptadorO: 0,
    comptadorS: 0,
    comptadorT: 0,
    comptadorZ: 0,
    interval: 1000,
    
    pos:0,
    main : function (){

        Joc.colocarPieza()
      
        
        Joc.mostrarTaula();
        Joc.comptaNivell += 1;
        
    },
    
    inicialitzarJoc: function () {
        var pInicial = GeneraPecaAleatoria();
        Joc.pieza = new Pieza(pInicial[0],pInicial[1]);
        var pNext = GeneraPecaAleatoria();
        Joc.nextPieza = new Pieza(pNext[0],pNext[1]);
        console.log(Joc.pieza);
        console.log(Joc.nextPieza);  
    },
    
    
    
    colocarPieza: function (){
        n=0;
        console.log(Joc.pieza.forma[0])
        comp=0
        
        for (x=0;x<4;x++){
            if (Joc.pieza.forma[0][x] == 0)
            {comp ++}
        }
        
        if (comp == 4){n=1;}
        for(y=0;y<4-n;y++){
                for(x=0;x<4;x++){
                    Joc.tauler[y][x+4]= Joc.pieza.forma[y+n][x];
                    
                }
            }
    },
    
    mostrarTaula: function() {
        var canvas = document.getElementById("tauler");
        for (y=0;y<Joc.tauler.length;y++){
            for (x=0;x<Joc.tauler[0].length;x++){
                if (Joc.tauler[y][x] == 'A'){
                    img = document.getElementById("groc");
                }
                else if (Joc.tauler[y][x] == 'B'){
                    img = document.getElementById("lila");
                }
                else if (Joc.tauler[y][x] == 'C'){
                    img = document.getElementById("verd");
                }
                else if (Joc.tauler[y][x] == 'D'){
                    img = document.getElementById("roig");
                }
                else if (Joc.tauler[y][x] == 'E'){
                    img = document.getElementById("blau");
                }
                else if (Joc.tauler[y][x] == 'F'){
                    img = document.getElementById("taronga");
                }
                else if (Joc.tauler[y][x] == 'G'){
                    img = document.getElementById("blanc");
                }
                else if (Joc.tauler[y][x] == '1'){
                    img = document.getElementById("gris");
                }
                else{
                    img = document.getElementById("negre");
                }
                var ctx = canvas.getContext("2d").drawImage(img, x*20, y*20, 20, 20 );
            }

        }
    },
    
    seguentNivell: function(comptaNivell){
        if (comptaNivell==10){
            Joc.nivell +=1;
            Joc.comptaNivell == 0;
            Joc.interval -= 50;
        }
    },     
        
    teclat: function () {},
    
    baixar: function () {
        for(y=25;y<0;y--){
            for(x=0;x<Joc.tauler[0].length;x++){
                if(Joc.tauler[y][x] != 0 && Joc.tauler[y][x] != 1 ){
                    
                }
            }
        }
    },
    
    comprovarLinia: function () {}, //Comprovem que comprova si una linia està plena de peçes
    
    esborrarLinia: function () {}, //Funcio per esborrar una linea que esta plena i baixar les demes peçes
};

var Pieza = function(forma, color)
        { this.forma = forma;
          this.color = color;
          };
 
function GeneraPecaAleatoria()
         { var peces = [
                 [[ [0,0,0,0],
                    [0,'A','A',0],
                    [0,'A','A',0],
                    [0,0,0,0]],"groc"],
             
                 [[ [0,'B',0,0],
                    [0,'B',0,0],
                    [0,'B',0,0],
                    [0,'B',0,0]],"lila"],
             
                 [[ [0,0,0,0],
                    [0,'C','C',0],
                    ['C','C',0,0],
                    [0,0,0,0]],"verd"],
             
                 [[ [0,0,0,0],
                    [0,'D','D',0],
                    [0,0,'D','D'],
                    [0,0,0,0]],"roig"],
             
                 [[ [0,'E',0,0],
                    [0,'E',0,0],
                    [0,'E','E',0],
                    [0,0,0,0]],"blau"],
             
                 [[ [0,'F','F',0],
                    [0,'F',0,0],
                    [0,'F',0,0],
                    [0,0,0,0]],"taronga"],
             
                 [[ [0,0,0,0],
                    ['G','G','G',0],
                    [0,'G',0,0],
                    [0,0,0,0]],"blanc"] ]
         
           var numeroAleatori = Math.round(Math.random()*6);                      
           return peces[numeroAleatori];     
       }         
Pieza.prototype.moureDreta = function()
         { if ((x-1)>0) { x--;
                          return true;
                          }
           else { return false; }
           };


Pieza.prototype.moureEsquerra = function()
         { if ((x+1)<14) { x++;
                           return true;
                           }
           else { return false; }
           }; 

Pieza.prototype.rotarDreta = function () {
            var formaNova = new Array();
            for (var i=0;i<this.forma.length;i++) {
                formaNova[i]=new Array();
                for (var j=0;j<this.forma[i].length;j++) {
                    formaNova[i][j]=this.forma[this.forma[i].length-1-j][i];
                }
            }
            this.forma = formaNova;
            } 

Joc.inicialitzarJoc();
setInterval(Joc.main, Joc.interval);