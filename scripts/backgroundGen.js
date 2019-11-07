// JavaScript Document
/*$(document).ready(function(){
	var randomizer = document.getElementById("backgroundNum").value;
	
});*/
function toBinary(inDec) {
    var bin = [];
    while (inDec > 0) {
        bin.push(inDec % 2);
        inDec = (inDec - (inDec % 2)) / 2;
    }
    bin.reverse();
    return bin.join("");
}

function genBackground() {
    var r = Math.floor(Math.random() * 1000000000000);
    var randomize = toBinary(r).toString().split("");
    var set = "";
    for (i = 0; i < randomize.length; i++) {
        set += randomize[i] + " ";
    }
    console.log(set);
    document.getElementById("bgCode").innerHTML = set;
    for (i = 0; i < 1000; i++) {
        document.getElementById("bgCode").innerHTML += set;
    }
    //$("#background").append(randomize);
    //$("#background").html("<p>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p>");

}
