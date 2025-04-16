import { mostrarErros } from "./mostrarErros.js";

const respostaSudoku = [
    [8, 1, 2, 7, 5, 3, 6, 4, 9],
    [9, 4, 3, 6, 8, 2, 1, 7, 5],
    [6, 7, 5, 4, 9, 1, 2, 8, 3],
    [1, 5, 4, 2, 3, 7, 8, 9, 6],
    [3, 6, 9, 8, 4, 5, 7, 2, 1],
    [2, 8, 7, 1, 6, 9, 5, 3, 4],
    [5, 2, 1, 9, 7, 4, 3, 6, 8],
    [4, 3, 8, 5, 2, 6, 9, 1, 7],
    [7, 9, 6, 3, 1, 8, 4, 5, 2]
  ];
let erros = 0;
  

export function verificarPosicao(evento,tecla){
    const celulaID = evento.target.id;
    const celula = document.getElementById(celulaID);
    
    const nuemeroID = parseInt(celulaID.split('-')[1]);
    const linha  = Math.floor(nuemeroID/9);
    const coluna = nuemeroID % 9;
    const resposta = respostaSudoku[linha][coluna];
    if (parseInt(tecla) === resposta){
        celula.classList.remove('errado');
        
    }else{
        celula.classList.add('errado');
        erros++;
        mostrarErros(erros)
        console.log('era pra ir');

    }

    
}