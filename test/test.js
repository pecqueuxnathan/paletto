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

    engine.chooseColor("black", 1);
    engine.chooseColor("green", 2);
    engine.chooseColor("yellow", 1);
    engine.chooseColor("blue", 2);
    engine.chooseColor("white", 1);
    engine.chooseColor("red", 2);
    engine.chooseColor("blue", 1);
    engine.chooseColor("yellow", 2);
    engine.chooseColor("black", 1);

    assertTrue(win() == 1);
};