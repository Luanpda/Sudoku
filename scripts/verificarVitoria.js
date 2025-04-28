

export function verificarVitoria(){
let venceu = true;
    for(let i = 0; i<81 ;i++){
        const cell = document.getElementById('cell-'+i);
        
        if( cell.classList.contains('errado') || cell.textContent.trim() === ''){
            venceu = false;
            break;
        }   
    }
    
    if (venceu){
        const ganhou = document.querySelector('.vitoria')
        ganhou.style.visibility = 'visible';
        
        
        
        
    }
}