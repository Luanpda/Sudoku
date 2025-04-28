function criarTabuleiroVazio() {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
}

function éSeguro(tabuleiro, linha, col, num) {
  
  for (let x = 0; x < 9; x++) {
    if (tabuleiro[linha][x] === num || tabuleiro[x][col] === num) return false;
  }

  
  const blocoLinhaInicio = 3 * Math.floor(linha / 3);
  const blocoColInicio = 3 * Math.floor(col / 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[blocoLinhaInicio + i][blocoColInicio + j] === num) return false;
    }
  }

  return true;
}

function preencher(tabuleiro) {
  for (let linha = 0; linha < 9; linha++) {
    for (let col = 0; col < 9; col++) {
      if (tabuleiro[linha][col] === 0) {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
        for (const num of nums) {
          if (éSeguro(tabuleiro, linha, col, num)) {
            tabuleiro[linha][col] = num;
            if (preencher(tabuleiro)) return true;
            tabuleiro[linha][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function contarNumerosNoBloco(tabuleiro, blocLinha, blocCol) {
  let count = 0;
  const linhaInicio = blocLinha * 3;
  const colInicio = blocCol * 3;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[linhaInicio + i][colInicio + j] !== 0) {
        count++;
      }
    }
  }
  return count;
}

function removerNumeros(tabuleiroCompleto, dificuldade) {
  const sudoku = tabuleiroCompleto.map(linha => [...linha]);
  let totalRemover;

  
  if (dificuldade === "fácil") totalRemover = 35;    
  else if (dificuldade === "médio") totalRemover = 45; 
  else totalRemover = 50;  

  let removidos = 0;
  while (removidos < totalRemover) {
    const linha = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    const blocLinha = Math.floor(linha / 3);
    const blocCol = Math.floor(col / 3);
    const numerosNoBloco = contarNumerosNoBloco(sudoku, blocLinha, blocCol);
    
   
    if (sudoku[linha][col] !== 0 && numerosNoBloco > 3) {
      sudoku[linha][col] = 0;
      removidos++;
    }
  }

  return sudoku;
}

export function gerarSudoku() {
  const dificuldade = ["fácil", "médio", "difícil"][Math.floor(Math.random() * 3)];
  const tabuleiroCompleto = criarTabuleiroVazio();
  preencher(tabuleiroCompleto);
  const sudoku = removerNumeros(tabuleiroCompleto, dificuldade);

  return {
    dificuldade,
    respostaSudoku: tabuleiroCompleto,
    sudoku
  };
}
  export function gerarSudokuFacil() {
    const dificuldade = "fácil";
    const tabuleiroCompleto = criarTabuleiroVazio();
    preencher(tabuleiroCompleto);
    const sudoku = removerNumeros(tabuleiroCompleto, dificuldade);
  
    return {
      dificuldade,
      respostaSudoku: tabuleiroCompleto,
      sudoku
    };
  }
  export function gerarSudokuMedio() {
    const dificuldade = "médio";
    const tabuleiroCompleto = criarTabuleiroVazio();
    preencher(tabuleiroCompleto);
    const sudoku = removerNumeros(tabuleiroCompleto, dificuldade);
  
    return {
      dificuldade,
      respostaSudoku: tabuleiroCompleto,
      sudoku
    };
  }
  export function gerarSudokuDificil() {
    const dificuldade = "difícil";
    const tabuleiroCompleto = criarTabuleiroVazio();
    preencher(tabuleiroCompleto);
    const sudoku = removerNumeros(tabuleiroCompleto, dificuldade);
  
    return {
      dificuldade,
      respostaSudoku: tabuleiroCompleto,
      sudoku
    };
  }


  
 
  
  