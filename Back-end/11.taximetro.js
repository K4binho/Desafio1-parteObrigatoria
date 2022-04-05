let km = 11.5;
let min = 25;

let precoKm = 70;  
let totalKm = 0;

let precoMin = 50; 
let totalMin = 0;

let total = 0;   

if(km <= 10){
    totalKm =  precoKm * km;//km for igual a 10 = 700

}      
if(km > 10){
    totalKm = 70*10
    precoKm = 50;  
    totalKm = totalKm + ((km-10) * precoKm);//75
   
} 

if(min <= 20){
    totalMin =  precoMin * min;//km for igual a 10 = 700

}      
if(min> 20){
    totalMin = 50*20
    precoMin = 30;  
    totalMin = totalMin + ((min-20) * precoMin);//75
   
} 
console.log(totalKm + totalMin)