import { destacarCelulas } from "./destacarCelulas.js";
import { verificarPosicao } from "./VerificarPosicao.js";
import { verificarVitoria } from "./verificarVitoria.js";



document.addEventListener('pointerdown',(evento) =>{
    
    if(evento.target.classList.contains('cell')){
        
        destacarCelulas(evento);
        if (!evento.target.hasAttribute('listener-adicionado')) {
            evento.target.setAttribute('listener-adicionado', 'true');
            evento.target.addEventListener('input', () => {
                const texto = evento.target.textContent.trim();
            
                // Remove tudo que não seja de 1 a 9
                if (!/^[1-9]$/.test(texto)) {
                    evento.target.textContent = '';
                    evento.target.classList.remove('errado');
                    return;
                }
            
                // Se for válido, verifica
                verificarPosicao(evento, texto);
                setTimeout(verificarVitoria, 0);
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


