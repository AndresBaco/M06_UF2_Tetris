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
    interval: 300,
    
    pos:0,
    
    inicialitzarJoc: function () {
        var pInicial = GeneraPecaAleatoria();
        Joc.pieza = new Pieza(pInicial,3,0);
        var pNext = GeneraPecaAleatoria();
        Joc.nextPieza = new Pieza(pNext,3,0); 
        
        Joc.colocarPieza()
        
    },
    
    dibuixarPeça(){
        if(Joc.pieza.forma[3][0] == 'borrar'){var b=1}else{var b=0}
        for(var y=0;y<Joc.pieza.forma.length -b;y++){
            for(var x=0;x<4;x++){
                Joc.tauler[Joc.pieza.y+y][Joc.pieza.x + x]= Joc.pieza.forma[y][x];
            }
        }
    },
    colocarPieza: function (){
        Joc.pieza.x=3;
        Joc.pieza.y=0;
        var n=0;
        var comp=0;
        for (var x=0;x<4;x++){
            if (Joc.pieza.forma[0][x] == 0)
            {comp ++}
        }
        if (comp == 4){n=1;}
        for(var y=0+n;y<4;y++){
            for(var x=0;x<4;x++){
                Joc.tauler[Joc.pieza.y+y][Joc.pieza.x + x]= Joc.pieza.forma[y][x];
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
        var pieza = document.getElementById("peca");
        for (y=0;y<4;y++){
            for (x=0;x<4;x++){
                if (Joc.pieza.forma[y][x] == 'A'){
                    img = document.getElementById("groc");
                }
                else if (Joc.pieza.forma[y][x] == 'B'){
                    img = document.getElementById("lila");
                }
                else if (Joc.pieza.forma[y][x] == 'C'){
                    img = document.getElementById("verd");
                }
                else if (Joc.pieza.forma[y][x] == 'D'){
                    img = document.getElementById("roig");
                }
                else if (Joc.pieza.forma[y][x] == 'E'){
                    img = document.getElementById("blau");
                }
                else if (Joc.pieza.forma[y][x] == 'F'){
                    img = document.getElementById("taronga");
                }
                else if (Joc.pieza.forma[y][x] == 'G'){
                    img = document.getElementById("blanc");
                }
                else{
                    img = document.getElementById("negre");
                }
                var dibuix = pieza.getContext("2d").drawImage(img, x*20, y*20, 20, 20 );
            }
        }
        var nextPieza = document.getElementById("nextpeca");
        for (y=0;y<4;y++){
            for (x=0;x<4;x++){
                if (Joc.nextPieza.forma[y][x] == 'A'){
                    img = document.getElementById("groc");
                }
                else if (Joc.nextPieza.forma[y][x] == 'B'){
                    img = document.getElementById("lila");
                }
                else if (Joc.nextPieza.forma[y][x] == 'C'){
                    img = document.getElementById("verd");
                }
                else if (Joc.nextPieza.forma[y][x] == 'D'){
                    img = document.getElementById("roig");
                }
                else if (Joc.nextPieza.forma[y][x] == 'E'){
                    img = document.getElementById("blau");
                }
                else if (Joc.nextPieza.forma[y][x] == 'F'){
                    img = document.getElementById("taronga");
                }
                else if (Joc.nextPieza.forma[y][x] == 'G'){
                    img = document.getElementById("blanc");
                }
                else{
                    img = document.getElementById("negre");
                }
                var dibuix = nextPieza.getContext("2d").drawImage(img, x*20, y*20, 20, 20 );
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
    
    baixar: function (){
            if (Joc.tauler[3][0] != 'borrar'){
                for (var y=0;y<4;y++){
                    for(var x=0;x<4;x++){
                        Joc.tauler[Joc.pieza.y + y][Joc.pieza.x + x] = 0;
                    }
                }
                Joc.pieza.y ++;
            }  
    },
        
    colisio: function (){
        var comp=0;
        for (var x=0;x<4;x++){
            if (Joc.pieza.forma[3][x] == 0)
            {comp ++}
        }
        if (comp == 4){
            if(Joc.pieza.y +3 == 24){
                Joc.pieza.forma[3]== Joc.pieza.forma[3][0] == 'borrar';
                console.log(Joc.pieza.forma)
            }
        }
        else if(comp != 4 && Joc.pieza.y +2 == 24){
            Joc.pintarGris()
            Joc.seguent()
        }
    },
    pintarGris: function (){
        for (var y=0;y<Joc.pieza.forma.length;y++){
            for (var x=0;x<4;x++){
                if (Joc.pieza.forma[y][x] !=0 && Joc.pieza.forma[y][x] != 'borrar'){
                    Joc.tauler[Joc.pieza.y + y][Joc.pieza.x + x]= 1;
                }
                else{Joc.pieza.forma[y][x]=0}
            }
        }
    },
    seguent: function(){
        Joc.pieza=Joc.nextPieza;
        Joc.nextPieza= new Pieza(GeneraPecaAleatoria(),0,0)
        Joc.colocarPieza();
    },
    comprovarLinia: function () {}, //Comprovem que comprova si una linia està plena de peçes
    
    esborrarLinia: function () {}, //Funcio per esborrar una linea que esta plena i baixar les demes peçes
    
    main : function (){
        Joc.mostrarTaula();
        if(Joc.pieza.forma[3][0] != 'borrar'){
            Joc.baixar();
        }
        Joc.colisio();
        Joc.dibuixarPeça();
        Joc.comptaNivell += 1;
    },
};

var Pieza = function(forma, x, y)
        { this.forma = forma;
          this.x = x;
          this.y = y;
          };
 
function GeneraPecaAleatoria()
         { var peces = [
                 [  [0,0,0,0],
                    [0,'A','A',0],
                    [0,'A','A',0],
                    [0,0,0,0]],
             
                 [  [0,'B',0,0],
                    [0,'B',0,0],
                    [0,'B',0,0],
                    [0,'B',0,0]],
             
                 [ [0,0,0,0],
                    [0,'C','C',0],
                    ['C','C',0,0],
                    [0,0,0,0]],
             
                 [  [0,0,0,0],
                    [0,'D','D',0],
                    [0,0,'D','D'],
                    [0,0,0,0]],
             
                 [ [0,'E',0,0],
                    [0,'E',0,0],
                    [0,'E','E',0],
                    [0,0,0,0]],
             
                 [ [0,'F','F',0],
                    [0,'F',0,0],
                    [0,'F',0,0],
                    [0,0,0,0]],
             
                 [  [0,0,0,0],
                    ['G','G','G',0],
                    [0,'G',0,0],
                    [0,0,0,0]] ];
         
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