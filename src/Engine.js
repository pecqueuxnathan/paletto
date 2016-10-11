"use strict";

var Engine = function () {

// private attributes and methods

// public methods

    this.initPaletto = function() {
        var paletto =
            [
                ["black", "green", "white", "blue", "red","white" ],
                ["yellow", "white", "green", "red", "yellow", "blue"],
                ["blue", "yellow", "blue", "white", "black", "red"],
                ["red", "black", "red", "green", "blue", "white"],
                ["white", "green", "yellow", "black", "yellow", "green"],
                ["yellow", "blue","black", "red", "green", "black"]
                ];
        return paletto;
    }







    /*
        DO NOT TOUCH THIS FUCKING CODE BUDDY !!! Thanks =)
     */




    // Warn if overriding existing method
    if(Array.prototype.equals)
        console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
    Array.prototype.equals = function (array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;

        // compare lengths - can save a lot of time
        if (this.length != array.length)
            return false;

        for (var i = 0, l=this.length; i < l; i++) {
            // Check if we have nested arrays
            if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i]))
                    return false;
            }
            else if (this[i] != array[i]) {
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;
            }
        }
        return true;
    }
// Hide method from for-in loops
    Object.defineProperty(Array.prototype, "equals", {enumerable: false});
};
