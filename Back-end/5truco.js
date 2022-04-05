

function solucao(carta) {
    if(carta === "Q" || carta === "q"){
 console.log("J");
 }
    else if(carta === "J" || carta === "j"){
 console.log("K");
 }
    else if(carta === "K" || carta === "k"){
 console.log("A");
 }
    else if(carta === "A" || carta === "a"){
 console.log("2");
 }
    else if(carta === "2"){
 console.log("3");
 }
    else if(carta === "3"){
 console.log("Q");
 }
}

function processData(input) {
 solucao(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
 _input += input;
});

process.stdin.on("end", function () {
processData(_input);
});