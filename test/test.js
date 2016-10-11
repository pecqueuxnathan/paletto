"use strict";

var PalettoTestCase = TestCase("PalettoTestCase");

var engine = new Engine();

PalettoTestCase.prototype.testStory1 = function () {
    /*  var paletto =
     [["black", "green", "white", "blue", "red","white" ]]
     [["yellow", "white", "green", "red", "yellow", "blue"]]
     [["blue", "yellow", "blue", "white", "black", "red"]]
     [["red", "black", "red", "green", "blue", "white"]]
     [["white", "green", "yellow", "black", "yellow", "green"]]
     [["yellow", "blue","black", "red", "green", "black"]];

     */

    var paletto = engine.initPaletto();

    assertTrue(paletto[0][0] == "black");

    assertTrue(paletto[0].equals(["black", "green", "white", "blue", "red", "white"]));
    assertTrue(paletto[1].equals(["yellow", "white", "green", "red", "yellow", "blue"]));
    assertTrue(paletto[2].equals(["blue", "yellow", "blue", "white", "black", "red"]));
    assertTrue(paletto[3].equals(["red", "black", "red", "green", "blue", "white"]));
    assertTrue(paletto[4].equals(["white", "green", "yellow", "black", "yellow", "green"]));
    assertTrue(paletto[5].equals(["yellow", "blue","black", "red", "green", "black"]));

};