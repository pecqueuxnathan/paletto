'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    /*  var paletto =
     [["black", "green", "white", "blue", "red","white" ]]
     [["yellow", "white", "green", "red", "yellow", "bleu"]]
     [["blue", "yellow", "blue", "white", "black", "red"]]
     [["red", "black", "red", "green", "blue", "white"]]
     [["white", "green", "yellow", "black", "yellow", "green"]]
     [["yellow", "blue","black", "red", "green", "black"]];

     */

    var paletto = initPaletto();
    assertTrue(paletto[0] == ["black", "green", "white", "blue", "red", "white"]);
    assertTrue(paletto[1] == ["yellow", "white", "green", "red", "yellow", "bleu"]);
    assertTrue(paletto[2] == ["blue", "yellow", "blue", "white", "black", "red"]);
    assertTrue(paletto[3] == ["red", "black", "red", "green", "blue", "white"]);
    assertTrue(paletto[4] == ["white", "green", "yellow", "black", "yellow", "green"]);
    assertTrue(paletto[5] == ["yellow", "blue","black", "red", "green", "black"]);

};