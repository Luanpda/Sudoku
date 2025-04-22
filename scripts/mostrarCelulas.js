import { gerarSudoku,gerarSudokuFacil,gerarSudokuMedio,gerarSudokuDificil } from "./geradorDeJogos.js";
import { setJogoAtual,setErros } from "./estadoJogo.js";
import { resetarErros } from "./resetarErros.js";


 function  preencherTabuleiro(sudoku){
  
  for (let i = 0; i < 81; i++) {
    const celula = document.getElementById('cell-'+ i);
    
    let coluna = i % 9;
    const linha  = Math.floor(i/9);
    const valor = sudoku[linha][coluna];
    if (valor === 0 ){
      celula.textContent = '';  
    }else{
      celula.textContent = valor;
    }
    
    
    
  }
}
  document.addEventListener("DOMContentLoaded", () => {
    const jogoAleatorio = gerarSudoku();
    setJogoAtual(jogoAleatorio);
    preencherTabuleiro(jogoAleatorio.sudoku);
  });


  const facil = document.getElementById('facil');
  const medio = document.getElementById('medio');
  const dificil = document.getElementById('dificil');
  
  facil.addEventListener('click', () => {
    resetarErros()
    const jogo = gerarSudokuFacil();
    setJogoAtual(jogo);
    preencherTabuleiro(jogo.sudoku);
  });
  
  medio.addEventListener('click', () => {
    resetarErros()
    const jogo = gerarSudokuMedio();
    setJogoAtual(jogo);
    preencherTabuleiro(jogo.sudoku);
  });
  
  dificil.addEventListener('click', () => {
    resetarErros()
    const jogo = gerarSudokuDificil();
    setJogoAtual(jogo);
    preencherTabuleiro(jogo.sudoku);
  });
