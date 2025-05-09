import { destacarCelulas } from "./destacarCelulas.js";
import { verificarPosicao } from "./VerificarPosicao.js";
import { verificarVitoria } from "./verificarVitoria.js";
import {destacarNumIguais} from "./destacarNumIguais.js"

const isMobile = /Mobi|Android/i.test(navigator.userAgent);



document.addEventListener('pointerdown',(evento) =>{
    const celula = evento.target.closest('.cell');
    if(celula){
        
        if (celula.classList.contains('modo-rascunho')) {
            evento.preventDefault(); 
            celula.classList.add('foco'); 
            
            const celulasMarcadas = document.querySelectorAll('.marcada');
            celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));
            document.querySelectorAll('.foco').forEach(cell => {
                if (cell !== celula) {
                    cell.classList.remove('foco');
                }
            });
            document.querySelectorAll('.NumeroIgual').forEach(cell => cell.classList.remove('NumeroIgual'));
            document.querySelectorAll('.NumeroSelecionado').forEach(cell => cell.classList.remove('NumeroSelecionado'));
            celula.focus();
            return; 
        }



       
        if(!celula.classList.contains('modo-rascunho')){
            
            destacarCelulas(evento);
            destacarNumIguais(evento);
        }
        
        
    }
    if(evento.target.classList.contains('container') || evento.target.classList.contains('cabecalho') || evento.target.classList.contains('dificuldade-game') || evento.target.classList.contains('modo-rascunho')){

        
        
        document.querySelectorAll('.NumeroIgual').forEach(cell => cell.classList.remove('NumeroIgual'));
        document.querySelectorAll('.NumeroSelecionado').forEach(cell => cell.classList.remove('NumeroSelecionado'));
        document.querySelectorAll('.foco').forEach(cell => cell.classList.remove('foco'));

        const celulasMarcadas = document.querySelectorAll('.marcada');
        celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));
    }
    
    
})
if (!isMobile){
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
            const celulasMarcadas = document.querySelectorAll('.marcada');
            celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));
            evento.target.classList.add('modo-rascunho');
            
            
            
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
}
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
                document.querySelectorAll('.NumeroIgual').forEach(cell => cell.classList.remove('NumeroIgual'));
            }else {
                celula.textContent = evento.key;
                celula.classList.add('CellPreenchida');
                verificarPosicao({ target: celula }, evento.key);
                destacarNumIguais(evento);
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


if (isMobile) {
  const barra = document.querySelector('.botoes');
  
  barra.addEventListener('click', (e) => {
    const botao = e.target.closest('button');
    
    if (!botao) return;

    const celulaSelecionada = document.querySelector('.foco'); 
   
    if (!celulaSelecionada || celulaSelecionada.classList.contains('numeroInicial')) return;

    if (botao.classList.contains('botao-numero')) {
        const numero = botao.dataset.numero;
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

        const ultimoNumeroTentado = celulaSelecionada.getAttribute('data-numero-tentado');

        if (numero === ultimoNumeroTentado) {
            return;
        }
        
        celulaSelecionada.textContent = numero;
        celulaSelecionada.classList.add('CellPreenchida');
            
        celulaSelecionada.setAttribute('data-numero-tentado', numero);

        
        verificarPosicao({ target: celulaSelecionada }, numero);
        destacarNumIguais({ target: celulaSelecionada });

        setTimeout(verificarVitoria, 0);

    } 
    if (botao.classList.contains('botao-apagar')) {
      celulaSelecionada.innerHTML = '';
      document.querySelectorAll('.NumeroIgual').forEach(cell => cell.classList.remove('NumeroIgual'));
      document.querySelectorAll('.NumeroSelecionado').forEach(cell => cell.classList.remove('NumeroSelecionado'));
      celulaSelecionada.classList.remove('errado');
      celulaSelecionada.classList.remove('CellPreenchida');
      celulaSelecionada.removeAttribute('data-numero-tentado');
      if (celulaSelecionada.classList.contains('modo-rascunho')) {
        celulaSelecionada.classList.remove('modo-rascunho');
        celulaSelecionada.querySelectorAll('.rascunho').forEach(r => r.remove());
      }
    }
    if (botao.classList.contains('botao-rascunho')){
        if (!celulaSelecionada) return;
        if (celulaSelecionada.classList.contains('numeroInicial') || celulaSelecionada.classList.contains('CellPreenchida') ) return;
        if(celulaSelecionada.classList.contains('modo-rascunho')){
            celulaSelecionada.classList.remove('modo-rascunho');
            celulaSelecionada.innerHTML = ''; 
            celulaSelecionada.focus();
            
        }else{
            celulaSelecionada.classList.add('modo-rascunho');
            const celulasMarcadas = document.querySelectorAll('.marcada');
            celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));
            for( let i  = 0; i < 9; i++ ){
                const celulaRascunho = document.createElement('div');
                celulaRascunho.classList.add('rascunho');
                celulaRascunho.id = `celulaRascunho-${i}`;
                celulaSelecionada.appendChild(celulaRascunho);
            }
            celulaSelecionada.focus();

        }

    }
  });
}

