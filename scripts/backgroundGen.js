// JavaScript Document
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

function genHex() {
    var file = location.pathname.split("/").slice(-1)[0].split(".")[0];
    var result = "";
    for (var i = 0; i < file.length; i++) {
        result += toHex(file.substring(i, i + 1).charCodeAt()) + " ";
    }
    return result + "20 ";
}

function genBackground() {
    var key = genHex();
    var set = "";
    for (i = 0; i < 10; i++) {
        set += key;
    }
    document.getElementById("bgCode").innerHTML = set;
    for (i = 0; i < 1000; i++) {
        document.getElementById("bgCode").innerHTML += set;
    }
}