var Joc = { //Objecte on estaran totes les variables y funcions del Joc
    tauler: [[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Tauler de Joc, de moment en blanc menys una part d'abaix per frenar les peces
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
    puntuacioMax: 0,
    pieza: null, //Aqui anirà l'objecte peça
    nextPieza: null, //Aquí anirà la peça següent
    nivell: 1, //Nivell del Joc, augmenta cada cop que cauen 10 peces
    comptaNivell: 0, //Cada cop que arriba a 10, l'interval es redueix i puga un nivell, per tant les peçes cauen mes rapid
    interval: 500, //Velocitat en que cauen les peces
    c:0,
    posOriginal: 0, //S'utilitza per a la funció rotarPeça
    
    inicialitzarJoc: function () { // Funció que inicialitza el joc, creant dues peces i col·locant la primera en el tauler
        var pInicial = GeneraPecaAleatoria();
        Joc.pieza = new Pieza(pInicial,3,3);
        var pNext = GeneraPecaAleatoria();
        Joc.nextPieza = new Pieza(pNext,3,3); 
        
        Joc.colocarPieza()
        
    },
    
    dibuixarPeça: function(){ //Aquesta funció dibuixa la peça en cada interval i renova la posició d'aquesta
        for(var y=0;y<Joc.pieza.forma.length;y++){
            for(var x=0;x<4;x++){
                if(Joc.pieza.forma[y][x] != 0){
                    Joc.tauler[Joc.pieza.y - y][Joc.pieza.x + x]= Joc.pieza.forma[y][x];
                }
            }
        }
    },
    colocarPieza: function (){ //Aquesta funció col·loca la peça adalt de tot del tauler
        Joc.posOriginal = Joc.pieza.forma;
        var comp=0;
        for(var c=0; c<4; c++){ //amb això fem que la peça no aparegui amb un espai en blanc a sobre seu
            if (Joc.pieza.forma[3][c] == 0){comp ++}
        }
        if(comp == 4){
            Joc.c=1;
            Joc.pieza.y --;
        }
        for(var y=0;y<4;y++){
            for(var x=0;x<4;x++){
                if(Joc.pieza.forma[y][x] != 0){
                    if(Joc.tauler[y][x + 3] == 1){
                        Joc.derrota();
                    }
                    Joc.tauler[Joc.pieza.y - y][Joc.pieza.x + x]= Joc.pieza.forma[y][x];   
                }
            }
        }
    },
    
    derrota: function(){ //Aquesta funció s'activa quan perds una partida
        document.getElementById("derrota").innerHTML = "HAS PERDUT";
		clearInterval(joc);
    },
    
    mostrarTaula: function() { //Funció que mostra el tauler i tota la informació sobre el Joc
        document.getElementById("puntuacio").innerHTML = "Puntuació: " + Joc.puntuacio;
        document.getElementById("puntuacioMax").innerHTML = "Puntuació màxima: " + Joc.puntuacioMax;
        document.getElementById("nivell").innerHTML = "Nivell: " + Joc.nivell;
        document.getElementById("comp").innerHTML = "Contador: " + Joc.comptaNivell;
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
        var col=0;
        for (y=3;y>=0;y--){
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
                var dibuix = pieza.getContext("2d").drawImage(img, x*20, col*20, 20, 20 );
                
            }
            col ++;
        }
        var nextPieza = document.getElementById("nextpeca");
        var col=0;
        for (y=3;y>=0;y--){
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
                var dibuix = nextPieza.getContext("2d").drawImage(img, x*20, col*20, 20, 20 );
            }
            col ++;
        }
    },
    
    seguentNivell: function(comptaNivell){ //Funció que s'activa quan han caigut 10 peces
        if (Joc.interval > 50){ //Les peces cauen més ràpid a cada nivell, pero hi ha un tope
            if (Joc.comptaNivell==10){
                Joc.nivell +=1;
                Joc.comptaNivell = 0;
                var percentatge = Joc.interval / 100 * 10;
                Joc.interval -= percentatge;
            }
        }
    },     
    
    esborrar: function(){ //Aquesta funció esborra tot el tauler, menys les peces piontades de gris. Això serveix per a que no hi hagi rastre per sobre de les peces quan cauen
        for(var y=0;y<Joc.tauler.length-1;y++) {
            for(var x=0;x<Joc.tauler[0].length;x++){
                if(Joc.tauler[y][x] !=0 && Joc.tauler[y][x] !=1){
                    Joc.tauler[y][x] =0;
                }
            }
        }   
    },    
    
    teclat: function (e) { //Per cada fletxa presionada, s'activa una funció diferent
        var key = document.all ? e.which : e.key;
        if (key == "ArrowRight"){ //depenent de quina fletxa s'ha pulsat, s'assignarà una direcció
            Joc.pieza.moureDreta(); //dreta
            Joc.comprovarPeca('right');
        }
        else if (key == "ArrowLeft"){
            Joc.pieza.moureEsquerra(); //esquerra
            Joc.comprovarPeca('left');
        }
        else if (key=="ArrowDown"){
            Joc.baixar();
        }
        else if (key=="ArrowUp"){
            Joc.pieza.rotar(); //Rotar
            var comp = Joc.comprovarPeca('rotar');
            if (comp != false){
                Joc.posOriginal = Joc.pieza.forma;
            }
        }
    },
    
    comprovarPeca: function (d){ //Comprova si les peces estahn a dins del tauler correctament
        for (var y=0;y<4;y++){ //dreta
            for(var x=0; x<4;x++){
                if (Joc.pieza.forma[y][x] !=0){
                    if ( (Joc.pieza.x + x) > Joc.tauler[0].length ){
                        Joc.pieza.x --;
                        break;
                    }
                }
            }   
        }

        for (var y=0;y<4;y++){ //esquerra
            for(var x=0; x<4;x++){
                if (Joc.pieza.forma[y][x] !=0){
                    if ( Joc.pieza.x + x < 0 ){
                        Joc.pieza.x ++;
                        break;
                    }
                }

            }   
        }

    },
    
    baixar: function (){ //Funció que fa baixar la peça
        Joc.pieza.y ++;  
        Joc.puntuacio += 1;
    },
    
    colisio: function (){ //Detecta si una peça xoca i la pinta de gris
        for(var y=0;y<4; y++){
            for (var x=0;x<4; x++){
                if(Joc.pieza.forma[y][x] != 0){
                    if(Joc.tauler[Joc.pieza.y -y + 1][Joc.pieza.x +x] ==1){
                        Joc.pintarGris();
                        Joc.seguent();
                    }
                }
            }
        }
    },

    pintarGris : function(){ //Funció que pintar de gris les peces que s'han xocat
        for(var y=0;y<4; y++){
            for (var x=0;x<4; x++){
                if(Joc.tauler[Joc.pieza.y -y][Joc.pieza.x + x ] != 0){
                    Joc.tauler[Joc.pieza.y -y][Joc.pieza.x + x ] = 1;
                }
            }
        }
    },
    seguent: function(){ //Truca a la següent peça i la torna a col·locar a dalt de tot 
        Joc.comptaNivell +=1;
        Joc.pieza=new Pieza(Joc.nextPieza.forma, 3,3);
        var pNext = GeneraPecaAleatoria();
        Joc.nextPieza = new Pieza(pNext,3,3); 
        
        Joc.colocarPieza();
    },
    comprovarLinia: function () { //Comprova que una linia està plena de 1, si es així s'esborra i les demés cauen una posició
        var comprovant = 0;
        for (var y=0;y<25;y++){
            for (x=0;x<Joc.tauler[0].length;x++){  
                if(Joc.tauler[y][x] == 1){
                    comprovant ++;
                }
                
            }
            if (comprovant == 10){
                Joc.puntuacio +=50;
                var pos = y;
                for (var y=pos;y>=0;y--){
                    for (x=0;x<Joc.tauler[0].length;x++){
                        Joc.tauler[y][x] = Joc.tauler[y-1][x];
                        if (y != 0){
                            Joc.tauler[y-1][x] = 0;
                        }
                    }
                }
            }
            else{
                comprovant = 0;
            }
        }
    }, 
        
    main : function (){ //Funció on es desarrolla tot el Joc
        Joc.mostrarTaula();
        
        Joc.colisio();
        
        Joc.comprovarLinia();
        
        var element = document.getElementById("all");  
	    document.onkeydown = Joc.teclat;
        
        Joc.esborrar();
        
        Joc.baixar();
        
        Joc.dibuixarPeça()
        
        Joc.seguentNivell();
    },
};

var Pieza = function(forma, x, y) //Objecte peça
        { this.forma = forma;
          this.x = x;
          this.y = y;
          };
 
function GeneraPecaAleatoria() //Genera una peca aleatòria quan és trucada
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
Pieza.prototype.moureDreta = function(){ //Funció per moure a la dreta una peça
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


Pieza.prototype.moureEsquerra = function() //Funció per moure a l'esquerra una peça
         { if ((Joc.pieza.x)>=0) { Joc.pieza.x--;
                           }};
 
Pieza.prototype.rotar = function () { //Funció per rotar una peça
            var formaNova = new Array();
            for (var i=0;i<Joc.pieza.forma.length;i++) {
                formaNova[i]=new Array();
                for (var j=0;j<Joc.pieza.forma[i].length;j++) {
                    formaNova[i][j]=Joc.pieza.forma[Joc.pieza.forma[i].length-1-j][i];
                }
            }
            Joc.pieza.forma = formaNova;
            } 

Joc.inicialitzarJoc(); 
var joc = setInterval(Joc.main, Joc.interval);