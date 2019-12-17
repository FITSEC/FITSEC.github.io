// JavaScript Document
/**
 * Takes in an integer and returns a string of the hex value of the decimal
 * @param {int} inDec the integer to be converted to hex
 * @returns {string} this is the hex value of the decimal
 */
function toHex(inDec) {
    var result = "";
    while (inDec > 0) {
        switch (inDec % 16) {
            case 10:
                result = "A" + result;
                break;
            case 11:
                result = "B" + result;
                break;
            case 12:
                result = "C" + result;
                break;
            case 13:
                result = "D" + result;
                break;
            case 14:
                result = "E" + result;
                break;
            case 15:
                result = "F" + result;
            default:
                result = (inDec % 16) + result;
                break;
        }
        inDec = (inDec - (inDec % 16)) / 16;
    }
    return result;
}

/**
 * A function that should only be run once. It takes the name of the page running the function and gives a string for the background
 * @returns {string} The pages name in ascii hex
 */
function genHex() {
    var file = location.pathname.split("/").slice(-1)[0].split(".")[0]; // this gets the name of the page without the path and without the file extension
    if (file === "") { // this is here for the main page which shows no file name
        file = "FITSEC";
    }
    var result = "";
    for (var i = 0; i < file.length; i++) {
        result += toHex(file.substring(i, i + 1).charCodeAt()) + " ";
    }
    return result + "20 "; // add hex space to final result
}


var key = genHex();
var background = document.getElementById("bgCode");

/**
 * The function that is run to add numbers to the pages background
 */
function genBackground() {
    background.innerHTML += key; // add the key so that I have a frame of reference for filling the background
    var width = screen.width / background.innerHTML.length; // gets the width based on users screen and length of letters
    var height = screen.height / background.clientHeight; // gets the height based off pixel height of first placement
    for (var i = 0; i < width * height - 1; i++) { // fill based on multiples subtrace the first placement
        background.innerHTML += key;
    }
}
$(document).on("load resize", function() {
    while (background.clientHeight < screen.height || background.clientWidth < screen.width) {
        background.innerHTML += key; // adds more lines if user expands or zooms out
    }
});