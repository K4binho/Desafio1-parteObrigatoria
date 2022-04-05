precos = [150, 50]
let menorAteAgr = precos[0];
let valorTotalSemDesconto = 0;

for (let i = 0; i < precos.length; i++) {
    if(menorAteAgr > precos[i]){
        menorAteAgr = precos[i];
    }
    valorTotalSemDesconto = valorTotalSemDesconto + precos[i];
}
if(precos.length >= 3){
    menorAteAgr = menorAteAgr/2;
    console.log(valorTotalSemDesconto - menorAteAgr);
    }else{
    console.log(valorTotalSemDesconto)
}