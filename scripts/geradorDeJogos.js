function criarTabuleiroVazio() {
    return Array.from({ length: 9 }, () => Array(9).fill(0));
  }
  
  function éSeguro(tabuleiro, linha, col, num) {
    for (let x = 0; x < 9; x++) {
      if (tabuleiro[linha][x] === num || tabuleiro[x][col] === num) return false;
      const blocoLinha = 3 * Math.floor(linha / 3) + Math.floor(x / 3);
      const blocoCol = 3 * Math.floor(col / 3) + x % 3;
      if (tabuleiro[blocoLinha][blocoCol] === num) return false;
    }
    return true;
  }
  
  function preencher(tabuleiro) {
    for (let linha = 0; linha < 9; linha++) {
      for (let col = 0; col < 9; col++) {
        if (tabuleiro[linha][col] === 0) {
          const nums = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);
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
  
  function removerNumeros(tabuleiroCompleto, dificuldade) {
    const sudoku = tabuleiroCompleto.map(linha => [...linha]);
    let totalRemover;
  
    if (dificuldade === "fácil") totalRemover = 35;
    else if (dificuldade === "médio") totalRemover = 45;
    else totalRemover = 55;
  
    while (totalRemover > 0) {
      const linha = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (sudoku[linha][col] !== 0) {
        sudoku[linha][col] = 0;
        totalRemover--;
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


  
 
  
  