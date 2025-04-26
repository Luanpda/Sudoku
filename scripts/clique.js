import { destacarCelulas } from "./destacarCelulas.js";
import { verificarPosicao } from "./VerificarPosicao.js";
import { verificarVitoria } from "./verificarVitoria.js";
import {destacarNumIguais} from "./destacarNumIguais.js"





document.addEventListener('pointerdown',(evento) =>{
    
    if(evento.target.classList.contains('cell')){
        const celula = evento.target.closest('.cell');
        
        destacarCelulas(evento);
        destacarNumIguais(evento);
        
    }
    if(evento.target.classList.contains('container') || evento.target.classList.contains('cabecalho') || evento.target.classList.contains('dificuldade-game')){

        

        document.querySelectorAll('.NumeroIgual').forEach(cell => cell.classList.remove('NumeroIgual'));
        document.querySelectorAll('.NumeroSelecionado').forEach(cell => cell.classList.remove('NumeroSelecionado'));
        document.querySelectorAll('.foco').forEach(cell => cell.classList.remove('foco'));

        const celulasMarcadas = document.querySelectorAll('.marcada');
        celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));
    }
    
    
})

document.addEventListener('dblclick',(evento) =>{

    const celula = evento.target.closest('.cell');
    if (!celula || celula.classList.contains('numeroInicial') || celula.classList.contains('CellPreenchida')) return;
    
    
    if (celula.classList.contains('modo-rascunho')) {
        celula.classList.remove('modo-rascunho');
        
        celula.querySelectorAll('.rascunho').forEach(r => r.remove());

        celula.focus();
        return;
      }

      
    

    if(celula.classList.contains('cell')){
        
        
        if (!evento.target.classList.contains('modo-rascunho')) {

            evento.target.classList.add('modo-rascunho');
            evento.target.removeAttribute('contenteditable');
            
            
            for( let i  = 0; i < 9; i++ ){
                const celulaRascunho = document.createElement('div');
                celulaRascunho.classList.add('rascunho');
                celulaRascunho.id = `celulaRascunho-${i}`;
                evento.target.appendChild(celulaRascunho);
            }


            if (!celula.hasAttribute('keydown-adicionado')) {
                celula.setAttribute('keydown-adicionado', 'true');
                
                evento.target.addEventListener('keydown', (valor) => {
                    const tecla = valor.key;
            
                    if (/^[1-9]$/.test(tecla)) {
                        valor.preventDefault();
                        const index = parseInt(tecla) - 1;
                        const alvo = valor.target.querySelector(`#celulaRascunho-${index}`);
            
                        if (alvo) {
                            
                            if (alvo.textContent === tecla) {
                                alvo.textContent = '';
                            } else {
                                alvo.textContent = tecla;
                            }
                        }
                    }
                });
            }
        
        }

    }
})

document.addEventListener('keyup', (evento) => {
    const celula = document.activeElement;

    if (
        celula &&
        celula.classList.contains('cell') &&
        !celula.classList.contains('numeroInicial') &&
        !celula.classList.contains('modo-rascunho')
    ) {
        if (/^[1-9]$/.test(evento.key)) {
            evento.preventDefault();
            if (celula.textContent === evento.key){
                celula.textContent = "";
                celula.classList.remove('CellPreenchida');
            }else {
                celula.textContent = evento.key;
                celula.classList.add('CellPreenchida');
                verificarPosicao({ target: celula }, evento.key);
            }
            

            
            setTimeout(verificarVitoria, 0);
        }

        if (evento.key === "Backspace" || evento.key === "Delete") {
            evento.preventDefault();
            celula.textContent = "";
            celula.classList.remove('errado');
        }
    }
});
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

if (isMobile) {
  const barra = document.querySelector('.numeros');
  
  barra.addEventListener('click', (e) => {
    const botao = e.target.closest('button');
    
    if (!botao) return;

    const celulaSelecionada = document.querySelector('.foco'); 
    const celula = e.target.closest('cell')
    if (!celulaSelecionada || celulaSelecionada.classList.contains('numeroInicial')) return;

    if (botao.classList.contains('botao-numero')) {
        if(celulaSelecionada.classList.contains('modo-rascunho')){
            const numero = botao.dataset.numero;
            const index = parseInt(numero) - 1;
            const alvo = celulaSelecionada.querySelector(`#celulaRascunho-${index}`);
            if (alvo) {
                            
                if (alvo.textContent === numero) {
                    alvo.textContent = '';
                } else {
                    alvo.textContent = numero;
                }
            }
            return;
        }
      const numero = botao.dataset.numero;
      celulaSelecionada.textContent = numero;
      celulaSelecionada.classList.add('CellPreenchida');
      

      verificarPosicao({ target: celulaSelecionada }, numero);
      setTimeout(verificarVitoria, 0);

    } else if (botao.classList.contains('botao-apagar')) {
      celulaSelecionada.textContent = '';
      celulaSelecionada.classList.remove('errado');
      celulaSelecionada.classList.remove('CellPreenchida');
    }else if(botao.classList.contains('botao-rascunho')){
        
    }
  });
}

