lista = [2,19,18,20,32];

let menorAteAgr = lista[0];
    
for (let idade of lista) {  
    if(idade >= 18){
        if(idade <= menorAteAgr){
            menorAteAgr = idade;
        }else if(menorAteAgr < 18){
            menorAteAgr = idade;
        }
    }
}

if(menorAteAgr >= 18){
    console.log(menorAteAgr);
}else{
    console.log("CRESCA E APARECA");
}
