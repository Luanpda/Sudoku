import { jogo } from "./geradorDeJogos.js";

export const jogoSorteado = jogo

const sudoku = jogoSorteado.sudoku
  

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


