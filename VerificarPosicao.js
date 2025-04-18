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
    let venceu = true;
    for(let i = 0; i<81 ;i++){
        const cell = document.getElementById('cell-'+i);
        if( cell.classList.contains('errado') || cell.textContent.trim() === ''){
            venceu = false;
            break;
        }   
    }
    if (venceu){
        const ganhou = document.createElement('p');
        ganhou.textContent = 'Ganhou';
        const container = document.getElementById('container');
        container.appendChild(ganhou);
        console.log('Ganhou');
        
        
    } 
    
}