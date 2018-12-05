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
    inicialitzarJoc: function () {
        for (y=0;y<Joc.tauler.length;y++){
            for (x=0;x<Joc.tauler[0].length;x++){
                document.write(Joc.tauler[y][x] +" ");
            }
            document.write("<br>");
        }
        document.write(Joc.puntuacio+"<br>");
        document.write(Joc.punctuacioMax+"<br>");
    },
    seguentPeca: function () {return math.floor(math.random() * 7);},
    teclat: function () {},
    moviment: function () {},
    comprovarLinia: function () {}, //Comprovem que comprova si una linia està plena de peçes
    esborrarLinia: function () {}, //Funcio per esborrar una linea que esta plena i baixar les demes peçes
};

Joc.inicialitzarJoc()