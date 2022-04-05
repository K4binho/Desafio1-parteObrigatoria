let jogadores= [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
]
let jogadorUnicoUm = jogadores[0].nome;
let jogadorUnicoZero = jogadores[0].nome;
let qtdZero = 0;
let qtdUm = 0;

for (let i = 0; i < jogadores.length; i++) {
    const element = jogadores[i];

    if(jogadores[i].jogada == 1){
        qtdUm++;
        if(qtdUm == 1){
            jogadorUnicoUm = element.nome;
        }

    }  
    if(jogadores[i].jogada == 0){
        qtdZero++;
        if(qtdZero == 1){
            jogadorUnicoZero = element.nome;
        }

    }  
}

if(qtdUm == 1 && qtdZero !== 1){
    console.log(jogadorUnicoUm);
}else if(qtdUm !== 1 && qtdZero == 1){
    console.log(jogadorUnicoZero);
}else{
    console.log("NINGUEM")
}