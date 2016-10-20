"use strict";

var Engine = function () {

// private attributes and methods
    var paletto;
    var player1Pieces = [];
    var player2Pieces = [];

    this.grantChooseColor = function (line, column) {
        var positionsString = this.getNeighborsPositions(line, column);
        var tempColor = this.paletto[line][column];

        this.paletto[line][column] = "";


        if (positionsString != false) {


            var neighbors = [];
            var neighborsNeighborhood = [];


            var positionsArray = positionsString.split("$");

            for (var i = 0; i < positionsArray.length; i++) {
                neighbors.push(positionsArray[i]);
                //console.log(positionsArray[i]);
            }

            for (var i = 0; i < neighbors.length; i++) {
                var nN = this.getNeighborsPositions(parseInt(neighbors[i].split(",")[0]), parseInt(neighbors[i].split(",")[1])).split("$");
                for (var j = 0; j < nN.length; j++) {
                    neighborsNeighborhood.push(nN[j]);
                    // console.log(nN[j]);
                }
            }

            var granted = false;

            for (var i = 0; i < neighborsNeighborhood.length; i++) {
                for (var j = 0; j < neighborsNeighborhood.length; j++) {
                    if (i != j && neighborsNeighborhood[i] == neighborsNeighborhood[j]) {
                        granted = true;
                    }
                }
            }
        }

        this.paletto[line][column] = tempColor;

        return granted;
    }

    this.getNeighborsPositions = function (line, column) {
        var neighborCount = 0;
        var neighborsPosition = "";

        if (this.paletto[line + 1] != undefined && this.paletto[line + 1][column] != "") {
            neighborCount++;
            if (neighborsPosition == "") {
                neighborsPosition += (line + 1) + "," + column;
            } else {
                neighborsPosition += "$" + (line + 1) + "," + column;
            }
        }
        if (this.paletto[line - 1] != undefined && this.paletto[line - 1][column] != "") {
            neighborCount++;
            if (neighborsPosition == "") {
                neighborsPosition += (line - 1) + "," + column;
            } else {
                neighborsPosition += "$" + (line - 1) + "," + column;
            }
        }
        if (this.paletto[line][column - 1] != undefined && this.paletto[line][column - 1] != "") {
            neighborCount++;
            if (neighborsPosition == "") {
                neighborsPosition += line + "," + (column - 1);
            } else {
                neighborsPosition += "$" + line + "," + (column - 1);
            }
        }

        if (this.paletto[line][column + 1] != undefined && this.paletto[line][column + 1] != "") {

            neighborCount++;
            if (neighborsPosition == "") {
                neighborsPosition += line + "," + (column + 1);
            } else {
                neighborsPosition += "$" + line + "," + (column + 1);
            }

        }

        return neighborsPosition;

    }

    this.hasOnlyTwoNeighbors = function (line, column) {
        var neighborCount = 0;

        if (this.paletto[line + 1] != undefined && this.paletto[line + 1][column] != "") {
            neighborCount++;
        }
        if (this.paletto[line - 1] != undefined && this.paletto[line - 1][column] != "") {
            neighborCount++;
        }
        if (this.paletto[line][column - 1] != undefined && this.paletto[line][column - 1] != "") {
            neighborCount++;
        }
        if (this.paletto[line][column + 1] != undefined && this.paletto[line][column + 1] != "") {
            neighborCount++;
        }

        // console.log(neighborCount);

        if (neighborCount == 2) {
            return true;
        } else {
            return false;
        }
    }

// public methods

    this.initPaletto = function () {
        this.paletto =
            [
                ["black", "green", "white", "blue", "red", "white"],
                ["yellow", "white", "green", "red", "yellow", "blue"],
                ["blue", "yellow", "blue", "white", "black", "red"],
                ["red", "black", "red", "green", "blue", "white"],
                ["white", "green", "yellow", "black", "yellow", "green"],
                ["yellow", "blue", "black", "red", "green", "black"]
            ];
        return this.paletto;
    }

    this.initStory5 = function () {
        this.paletto =
            [
                ["", "", "", "blue", "red", "white"],
                ["", "", "", "red", "yellow", ""],
                ["", "", "blue", "white", "black", ""],
                ["red", "black", "red", "", "", ""],
                ["", "green", "yellow", "", "", ""],
                ["", "", "black", "", "", ""]
            ];
        return this.paletto;
    }

    this.chooseColor = function (color, player) {
        console.log(color);
        var succeed = false;
        for (var line = 0; line < this.paletto.length; line++) {
            for (var column = 0; column < this.paletto[line].length; column++) {
                if (this.paletto[line][column] == color && this.hasOnlyTwoNeighbors(line, column) && this.grantChooseColor(line, column)) {
                    if (player == 1) {
                        player1Pieces.push(this.paletto[line][column]);
                        this.printSuppress(column, line);
                    } else {
                        player2Pieces.push(this.paletto[line][column]);
                        this.printSuppress(column, line);
                    }
                    this.paletto[line][column] = "";
                    succeed = true;
                }
            }
        }
        return succeed;
    }


    this.chooseColor2 = function (color, player, positionArray) {
        for (var i = 0; i < positionArray.length; i++) {
            var column = positionArray[i].charCodeAt(0) - 65;
            var line = positionArray[i].charCodeAt(1) - 49;
            console.log(color);
            var succeed = false;
            if (this.paletto[line][column] == color && this.hasOnlyTwoNeighbors(line, column) && this.grantChooseColor(line, column)) {
                if (player == 1) {
                    player1Pieces.push(this.paletto[line][column]);
                    this.printSuppress(column, line);
                } else {
                    player2Pieces.push(this.paletto[line][column]);
                    this.printSuppress(column, line);
                }
                this.paletto[line][column] = "";
                succeed = true;
            }
        }
        return succeed;
    }


    this.getPlatePiecesCount = function () {
        var count = 0;
        for (var i = 0; i < this.paletto.length; i++) {
            for (var j = 0; j < this.paletto[i].length; j++) {
                if (this.paletto[i][j] != "") {
                    count++;
                }
            }
        }
        return count;
    }

    this.getPlayerPieces = function (player) {
        if (player == 1) {
            return player1Pieces;
        } else {
            return player2Pieces;
        }
    }

    this.getPaletto = function () {
        return this.paletto;
    }

    this.printSuppress = function (column, line) {
        var columnPrintable = "";
        switch (column) {
            case 0:
                columnPrintable = "A";
                break;
            case 1:
                columnPrintable = "B";
                break;
            case 2:
                columnPrintable = "C";
                break;
            case 3:
                columnPrintable = "D";
                break;
            case 4:
                columnPrintable = "E";
                break;
            case 5:
                columnPrintable = "F";
                break;
        }
        console.log("Supprimé : " + columnPrintable + (line + 1));
    }

    this.printPaletto = function () {
        console.log("------------");
        for (var line = 0; line < 6; line++)
            console.log(this.paletto[line][0] + " ; " + this.paletto[line][1] + " ; " + this.paletto[line][2] + " ; " + this.paletto[line][3] + " ; " + this.paletto[line][4] + " ; " + this.paletto[line][5]);
        console.log("------------");
    }


    /*
     DO NOT TOUCH THIS FUCKING CODE BUDDY !!! Thanks =)
     */


    // Warn if overriding existing method
    if (Array.prototype.equals)
        console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
    Array.prototype.equals = function (array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;

        // compare lengths - can save a lot of time
        if (this.length != array.length)
            return false;

        for (var i = 0, l = this.length; i < l; i++) {
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
