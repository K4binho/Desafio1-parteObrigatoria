min = 2
max = 10
valores = [0, 5, 6, 10, 11]
let passou = [];

for (let i = 0; i <= valores.length; i++) {
    if(valores[i]>= min && valores[i] <= max){
        passou.push(valores[i]);
    }   
   
} console.log(passou);