var Joc = {
    tauler: [[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    
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
        Joc.pieza = new Pieza(pInicial,3,3);
        var pNext = GeneraPecaAleatoria();
        Joc.nextPieza = new Pieza(pNext,3,3); 
        
        Joc.colocarPieza()
        
    },
    
    dibuixarPeça(){
        for(var y=0;y<Joc.pieza.forma.length;y++){
            for(var x=0;x<4;x++){
                if(Joc.pieza.forma[y][x] != '0'){
                    Joc.tauler[Joc.pieza.y - y][Joc.pieza.x + x]= Joc.pieza.forma[y][x];
                }
            }
        }
    },
    colocarPieza: function (){
        var comp = 0;
        for (var x=0;x<4; x++){
            if (Joc.pieza.forma[0][x] == 0){comp ++}
        }
        if (comp == 4){Joc.pieza.y --}
        var n=0;
        var comp=0;
        for (var x=0;x<4;x++){
            if (Joc.pieza.forma[0][x] == 0)
            {comp ++}
        }
        if (comp == 4){n=1;}
        for(var y=0+n;y<4;y++){
            for(var x=0;x<4;x++){
                if(Joc.pieza.forma[y][x] != '0'){
                    Joc.tauler[Joc.pieza.y - y][Joc.pieza.x + x]= Joc.pieza.forma[y][x];
                }
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
                if (Joc.pieza.forma[y][x-1] == 'A'){
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
                var dibuix = pieza.getContext("2d").drawImage(img, (x)*20, y*20, 20, 20 );
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
    esborrar: function(){
        for(var y=0;y<Joc.tauler.length-1;y++) {
            for(var x=0;x<Joc.tauler[0].length;x++){
                if(Joc.tauler[y][x] !=0 && Joc.tauler[y][x] !=1){
                    Joc.tauler[y][x] =0;
                }
            }
        }   
    },    
    teclat: function (e) {
        var key = document.all ? e.which : e.key;
        if (key == "ArrowRight"){ //depenent de quina fletxa s'ha pulsat, s'assignarà una direcció
            Joc.pieza.moureDreta(); //dreta
        }
        else if (key == "ArrowLeft"){
            Joc.pieza.moureEsquerra(); //esquerra
        }
        else if (key=="ArrowUp"){
            movimentFixe = 2; //Amunt
        }
    },
    
    baixar: function (){
        /*for (var y=0;y<4;y++){
            for(var x=0;x<4;x++){
                if(Joc.pieza.forma[y][x] != '0'){
                    Joc.tauler[Joc.pieza.y - y][Joc.pieza.x + x] = 0;
                }
            }
        }*/
        Joc.pieza.y ++;         
    },
        
    colisio: function (){
        for(var y=0;y<4; y++){
            for (var x=0;x<4; x++){
                if(Joc.pieza.forma[y][x] != 0){
                    if(Joc.tauler[Joc.pieza.y -y + 1][Joc.pieza.x +x] ==1){
                        Joc.pintarGris();
                        Joc.seguent();
                        return true;
                    }
                }
            }
        }
        
        /*for(var c=0; c<4;c++){
            if(Joc.tauler[Joc.pieza.y][Joc.pieza.x + c ] == 1 ||(Joc.tauler[Joc.pieza.y + 1][Joc.pieza.x + c ] == 1 && Joc.pieza.forma[3][c] != 0)){
                for(var y=0;y<4; y++){
                    for (var x=0;x<4; x++){
                        if(Joc.tauler[Joc.pieza.y -y][Joc.pieza.x + x ] != 0){
                            Joc.tauler[Joc.pieza.y -y][Joc.pieza.x + x ] = 1;
                        }
                    }
                }
                Joc.seguent();
                break;
            }
        }*/
    },
    pintarGris : function(){
        for(var y=0;y<4; y++){
            for (var x=0;x<4; x++){
                if(Joc.tauler[Joc.pieza.y -y][Joc.pieza.x + x ] != 0){
                    Joc.tauler[Joc.pieza.y -y][Joc.pieza.x + x ] = 1;
                }
            }
        }
    },
    seguent: function(){
        Joc.pieza=new Pieza(Joc.nextPieza.forma, 3,3);
        var pNext = GeneraPecaAleatoria();
        Joc.nextPieza = new Pieza(pNext,3,3); 
        
        Joc.colocarPieza();
    },
    comprovarLinia: function () {}, //Comprovem que comprova si una linia està plena de peçes
    
    esborrarLinia: function () {}, //Funcio per esborrar una linea que esta plena i baixar les demes peçes
    
    main : function (){
        Joc.mostrarTaula();
        Joc.colisio();
        
        var element = document.getElementById("all");  
	    document.onkeydown = Joc.teclat;
        
        Joc.esborrar();
        
        

        Joc.baixar();
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
Pieza.prototype.moureDreta = function(){ 
    for(var y=0; y<4 ;y++){
        for(var x=0; x<4 ;x++){
            if(Joc.tauler[Joc.pieza.y -y][Joc.pieza.x + 3 - x] != 0){
                if((Joc.pieza.x + 3 - x + 1) < Joc.tauler[0].length ){
                    Joc.pieza.x ++;
                    return true;

                }
            }
        }
    }
};


Pieza.prototype.moureEsquerra = function()
         { if ((Joc.pieza.x)>=0) { Joc.pieza.x--;
                           }};

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