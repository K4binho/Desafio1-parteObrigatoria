
function solucao(texto) {
    let txtSemEspaco = texto.trim();
    let txtArrays = txtSemEspaco.split(" ");
    let txtFormatado = txtArrays;
    
    let frases = 0;
    let espaco = 0;
        
    for(let i of txtFormatado){
        if(i !== ""){
            frases++;
        }else if(i == " "){
            espaco++;
        }
    }console.log(frases - espaco);
    }
    
    function processData(input) {
        solucao(input)
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