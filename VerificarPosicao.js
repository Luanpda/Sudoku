import { mostrarErros } from "./mostrarErros.js";
import { jogoSorteado } from "./mostrarCelulas.js";


const respostaSudoku = jogoSorteado.respostaSudoku;


  


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

    }

    
    
}