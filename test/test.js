"use strict";

var PalettoTestCase = TestCase("PalettoTestCase");

var engine = new Engine();

PalettoTestCase.prototype.testStory1 = function () {
    var paletto = engine.initPaletto();

    assertTrue(paletto[0][0] == "black");

    assertTrue(paletto[0].equals(["black", "green", "white", "blue", "red", "white"]));
    assertTrue(paletto[1].equals(["yellow", "white", "green", "red", "yellow", "blue"]));
    assertTrue(paletto[2].equals(["blue", "yellow", "blue", "white", "black", "red"]));
    assertTrue(paletto[3].equals(["red", "black", "red", "green", "blue", "white"]));
    assertTrue(paletto[4].equals(["white", "green", "yellow", "black", "yellow", "green"]));
    assertTrue(paletto[5].equals(["yellow", "blue","black", "red", "green", "black"]));

};

PalettoTestCase.prototype.testStory2 = function () {
    assertTrue(engine.chooseColor("yellow", 1));
};

PalettoTestCase.prototype.testStory3 = function () {
    var piecesArray = engine.getPlayerPieces(1);
    assertTrue(engine.getPlatePiecesCount() == 35);
    assertTrue(piecesArray.length == 1);
    assertTrue(piecesArray[0] == "yellow");
};

PalettoTestCase.prototype.testStory4 = function () {
    engine.chooseColor("black", 2);
    var paletto = engine.getPaletto();
    var piecesArray = engine.getPlayerPieces(2);
    assertTrue(paletto[0][0] == "");
    assertTrue(paletto[5][5] == "");
    assertTrue(piecesArray[0] == "black");
    assertTrue(piecesArray[1] == "black");
};

PalettoTestCase.prototype.testStory5 = function () {
    var paletto = engine.initStory5();

    engine.chooseColor("blue", 1);

    assertTrue(paletto[0][3] == "");
    assertTrue(paletto[2][2] == "blue");
};

PalettoTestCase.prototype.testStory6 = function () {
    var paletto = engine.initPaletto();
    console.log(engine.getPaletto());
    engine.chooseColor2("black", 1,["A1","F6"]);
    engine.printPaletto();
    engine.chooseColor2("green", 2,["B1","E6","F5"]);
    engine.printPaletto();
    engine.chooseColor2("yellow", 1,["A2","A6"]);
    engine.printPaletto();
    engine.chooseColor2("blue", 2,["A3"]);
    engine.printPaletto();
    engine.chooseColor2("white", 1,["A5","F4","F1","C1"]);
    engine.printPaletto();
    engine.chooseColor2("red", 2,["E1","F3","D6","A4"]);
    engine.printPaletto();
    engine.chooseColor2("blue", 1,["D3","F2","B6"]);
    engine.printPaletto();
    engine.chooseColor2("yellow", 2,["B3","E2","E5"]);
    engine.printPaletto();
    engine.chooseColor2("black", 1,["B4","C6","D5","E3"]);
    engine.printPaletto();
    console.log(engine.getPaletto());

    assertTrue(win() == 1);
};