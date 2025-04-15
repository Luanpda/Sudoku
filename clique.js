import { destacarCelulas } from "./destacarCelulas.js";
import { verificarPosicao } from "./VerificarPosicao.js";


document.addEventListener('click',(evento) =>{
    destacarCelulas(evento);
    if(evento.target.classList.contains('cell')){
        evento.target.addEventListener('keydown',(eventoDigitar) =>{


            const tecla = eventoDigitar.key;
            const textoAtual = eventoDigitar.target.textContent
            const teclasPermitidas = ['Backspace','ArrowLeft', 'ArrowRight'];
            if (/^[1-9]$/.test(tecla) && textoAtual === '') {
                verificarPosicao(evento,tecla);
                return; 
              }
            if (teclasPermitidas.includes(tecla)) {
                return;
            }else{
                eventoDigitar.preventDefault();
            }
            
            
        });
    
        
    } 
    
})

