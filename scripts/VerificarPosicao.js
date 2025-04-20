import { mostrarErros } from "./mostrarErros.js";
import { getJogoAtual } from "./estadoJogo.js";
import { setErros,getErros } from "./estadoJogo.js";

  

export function verificarPosicao(evento,tecla){
    const celulaID = evento.target.id;
    const celula = document.getElementById(celulaID);
    
    const nuemeroID = parseInt(celulaID.split('-')[1]);
    const linha  = Math.floor(nuemeroID/9);
    const coluna = nuemeroID % 9;

    const jogo = getJogoAtual();
    if (!jogo) return;
    
    const resposta = jogo.respostaSudoku[linha][coluna];



    if (parseInt(tecla) === resposta){
        celula.classList.remove('errado');
        
    }else{
        celula.classList.add('errado');
        let errosAtuais = getErros();
        errosAtuais++;
        setErros(errosAtuais);
        mostrarErros(errosAtuais);

    }

    
    
}