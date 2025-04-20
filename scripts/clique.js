import { destacarCelulas } from "./destacarCelulas.js";
import { verificarPosicao } from "./VerificarPosicao.js";
import { verificarVitoria } from "./verificarVitoria.js";

document.addEventListener('click',(evento) =>{
    
    if(evento.target.classList.contains('cell')){
        
        destacarCelulas(evento);
        if (!evento.target.hasAttribute('listener-adicionado')) {
            evento.target.setAttribute('listener-adicionado', 'true');
        evento.target.addEventListener('keydown',(eventoDigitar) =>{


            const tecla = eventoDigitar.key;
            const textoAtual = eventoDigitar.target.textContent
            const teclasPermitidas = ['Backspace','ArrowLeft', 'ArrowRight'];
            if (/^[1-9]$/.test(tecla) && textoAtual === '') {
                
                verificarPosicao(evento,tecla);
                setTimeout(verificarVitoria, 0)
                return; 
              }

            if (teclasPermitidas.includes(tecla)) {
                return;
            }else{
                eventoDigitar.preventDefault();
            }
            
            
        });
        evento.target.addEventListener('input', () => {
            
            if (evento.target.textContent === '') {
                evento.target.classList.remove('errado');
            }
        });
        
    }
    }
    if(evento.target.classList.contains('container') || evento.target.classList.contains('cabecalho') || evento.target.classList.contains('dificuldade-game')){
        

    
        document.querySelectorAll('.foco').forEach(cell => cell.classList.remove('foco'));

        const celulasMarcadas = document.querySelectorAll('.marcada');
        celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));
    }
    
    
})

