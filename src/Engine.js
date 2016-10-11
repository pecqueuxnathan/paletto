"use strict";

var Engine = function () {

// private attributes and methods
    var paletto;
    var player1Pieces= [];

    function grantChooseColor(arrayPosition, player) {
        player1Pieces.push(arrayPosition);
        arrayPosition = "";
        return true;
    }

// public methods

    this.initPaletto = function() {
        this.paletto =
            [
                ["black", "green", "white", "blue", "red","white" ],
                ["yellow", "white", "green", "red", "yellow", "blue"],
                ["blue", "yellow", "blue", "white", "black", "red"],
                ["red", "black", "red", "green", "blue", "white"],
                ["white", "green", "yellow", "black", "yellow", "green"],
                ["yellow", "blue","black", "red", "green", "black"]
                ];
        return this.paletto;
    }

    this.chooseColor = function(color,player){
        if(this.paletto[0][0] == color) {
            player1Pieces.push(this.paletto[0][0]);
            this.paletto[0][0] = "";
        }
        if(this.paletto[0][5] == color) {
            player1Pieces.push(this.paletto[0][5]);
            this.paletto[0][5] = "";
            return true;
        }
        if(this.paletto[5][0] == color) {
            player1Pieces.push(this.paletto[5][0]);
            this.paletto[5][0] = "";
            return true;
        }
        if(this.paletto[5][5] == color) {
            player1Pieces.push(this.paletto[5][5]);
            this.paletto[5][5] = "";
            return true;
        }
        return false;
    }



    this.getPlatePiecesCount = function(){
        var count = 0;
        for (var i = 0 ; i < this.paletto.length ; i++){
            for (var j = 0 ; j < this.paletto[i].length ; j++){
                if (this.paletto[i][j] != "") {
                    count++;
                }
            }
        }
        return count;
    }

    this.getPlayerPieces = function(player){
        if (player){
            return player1Pieces;
        }
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
