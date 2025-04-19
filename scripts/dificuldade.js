import { gerarSudokuDificil, gerarSudokuFacil, gerarSudokuMedio } from "./geradorDeJogos.js";

const facil = document.getElementById('facil');
  const medio = document.getElementById('medio');
  const dificil = document.getElementById('dificil');
  
  export let  jogoAtual = null;
  
  facil.addEventListener('click',(evento) =>{
        jogoAtual = gerarSudokuFacil();
      
  })
  medio.addEventListener('click',(evento) =>{
       jogoMedio = gerarSudokuMedio();
      
     
  })
  dificil.addEventListener('click',(evento) =>{
       jogoAtual = gerarSudokuDificil();
     
  })  

  export function getJogoAtual() {
    return jogoAtual;
  }


