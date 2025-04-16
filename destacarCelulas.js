const quadrantes = [
    [0, 1, 2, 9, 10, 11, 18, 19, 20],  
    [3, 4, 5, 12, 13, 14, 21, 22, 23],
    [6, 7, 8, 15, 16, 17, 24, 25, 26], 
    [27, 28, 29, 36, 37, 38, 45, 46, 47], 
    [30, 31, 32, 39, 40, 41, 48, 49, 50], 
    [33, 34, 35, 42, 43, 44, 51, 52, 53], 
    [54, 55, 56, 63, 64, 65, 72, 73, 74], 
    [57, 58, 59, 66, 67, 68, 75, 76, 77],
    [60, 61, 62, 69, 70, 71, 78, 79, 80]  
  ];
  
  const colunas = [
    [0, 9, 18, 27, 36, 45, 54, 63, 72],  
    [1, 10, 19, 28, 37, 46, 55, 64, 73], 
    [2, 11, 20, 29, 38, 47, 56, 65, 74], 
    [3, 12, 21, 30, 39, 48, 57, 66, 75], 
    [4, 13, 22, 31, 40, 49, 58, 67, 76], 
    [5, 14, 23, 32, 41, 50, 59, 68, 77], 
    [6, 15, 24, 33, 42, 51, 60, 69, 78], 
    [7, 16, 25, 34, 43, 52, 61, 70, 79], 
    [8, 17, 26, 35, 44, 53, 62, 71, 80]  
  ];

const linhas = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],     
    [9, 10, 11, 12, 13, 14, 15, 16, 17], 
    [18, 19, 20, 21, 22, 23, 24, 25, 26], 
    [27, 28, 29, 30, 31, 32, 33, 34, 35], 
    [36, 37, 38, 39, 40, 41, 42, 43, 44], 
    [45, 46, 47, 48, 49, 50, 51, 52, 53], 
    [54, 55, 56, 57, 58, 59, 60, 61, 62], 
    [63, 64, 65, 66, 67, 68, 69, 70, 71], 
    [72, 73, 74, 75, 76, 77, 78, 79, 80]  
  ];


export function destacarCelulas(evento){
    const celula = evento.target.id;

    if (!celula.id || !celula.id.startsWith('cell-')) return;
    document.querySelectorAll('.foco').forEach(cell => cell.classList.remove('foco'));

    const celulasMarcadas = document.querySelectorAll('.marcada');
    celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));

    

    const celulaFoco = document.getElementById(celula);
    celulaFoco.classList.add('foco');

    const nuemeroID = parseInt(celula.split('-')[1]);

    for(let i = 0; i < 9;i++){
        if(quadrantes[i].includes(nuemeroID)){
            for(let j = 0; j <9;j++){
                const celulamarcada = document.getElementById('cell-'+quadrantes[i][j]);
                if (celulamarcada) {
                    celulamarcada.classList.add('marcada');
                }

            }
        }   
    }

    for(let i = 0; i < 9;i++){
        if(colunas[i].includes(nuemeroID)){
            for(let j = 0; j < 9;j++){
                const celulamarcada = document.getElementById('cell-'+colunas[i][j]);
                if (celulamarcada) {
                    celulamarcada.classList.add('marcada');
                }
            }
        }
    }
    for(let i = 0; i < 9;i++){
        if(linhas[i].includes(nuemeroID)){
            for(let j = 0; j < 9;j++){
                const celulamarcada = document.getElementById('cell-'+linhas[i][j]);
                if (celulamarcada) {
                    celulamarcada.classList.add('marcada');
                }
            }
        }
    }
}
