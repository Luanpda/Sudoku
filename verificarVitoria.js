

export function verificarVitoria(){
let venceu = true;
    for(let i = 0; i<81 ;i++){
        const cell = document.getElementById('cell-'+i);
        console.log('Célula', i, 'conteúdo:', cell.textContent, 'classe errado:', cell.classList.contains('errado'));
        if( cell.classList.contains('errado') || cell.textContent.trim() === ''){
            venceu = false;
            break;
        }   
    }
    console.log('Verificação de vitória concluída. venceu=', venceu);
    if (venceu){
        const ganhou = document.querySelector('.vitoria')
        ganhou.style.visibility = 'visible';
        
        
        
        
    }
}