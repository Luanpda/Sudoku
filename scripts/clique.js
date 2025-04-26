import { destacarCelulas } from "./destacarCelulas.js";
import { verificarPosicao } from "./VerificarPosicao.js";
import { verificarVitoria } from "./verificarVitoria.js";
import {destacarNumIguais} from "./destacarNumIguais.js"





const isMobile = /Mobi|Android/i.test(navigator.userAgent);

document.addEventListener('pointerdown', (evento) => {
    if (evento.target.classList.contains('cell')) {
        const celula = evento.target.closest('.cell');
        destacarCelulas(evento);
        destacarNumIguais(evento);

        if (isMobile) {
            abrirTecladoMobile(celula);
        }
    }

    if (evento.target.classList.contains('container') || evento.target.classList.contains('cabecalho') || evento.target.classList.contains('dificuldade-game')) {
        document.querySelectorAll('.NumeroIgual').forEach(cell => cell.classList.remove('NumeroIgual'));
        document.querySelectorAll('.NumeroSelecionado').forEach(cell => cell.classList.remove('NumeroSelecionado'));
        document.querySelectorAll('.foco').forEach(cell => cell.classList.remove('foco'));

        const celulasMarcadas = document.querySelectorAll('.marcada');
        celulasMarcadas.forEach(cel => cel.classList.remove('marcada'));
    }
});

// MOBILE - abrir teclado usando input invisível
function abrirTecladoMobile(celula) {
    let input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.max = '9';
    input.style.position = 'absolute';
    input.style.opacity = 0;
    input.style.height = '1px';
    input.style.width = '1px';
    input.style.border = 'none';
    input.style.outline = 'none';
    input.style.zIndex = '-1';
    
    document.body.appendChild(input);
    input.focus();

    input.addEventListener('input', () => {
        const valor = input.value.trim();

        if (/^[1-9]$/.test(valor)) {
            if (celula.textContent === valor) {
                celula.textContent = '';
                celula.classList.remove('CellPreenchida');
                celula.classList.remove('errado');
            } else {
                celula.textContent = valor;
                celula.classList.add('CellPreenchida');
                verificarPosicao({ target: celula }, valor);
            }
            setTimeout(verificarVitoria, 0);
        }
    });

    input.addEventListener('blur', () => {
        document.body.removeChild(input);
    });
}

// PC - usa keyup normal
if (!isMobile) {
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

                if (celula.textContent === evento.key) {
                    celula.textContent = '';
                    celula.classList.remove('CellPreenchida');
                    celula.classList.remove('errado');
                } else {
                    celula.textContent = evento.key;
                    celula.classList.add('CellPreenchida');
                    verificarPosicao({ target: celula }, evento.key);
                }
                setTimeout(verificarVitoria, 0);
            }

            if (evento.key === "Backspace" || evento.key === "Delete") {
                evento.preventDefault();
                celula.textContent = '';
                celula.classList.remove('errado');
                celula.classList.remove('CellPreenchida');
            }
        }
    });
}

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





// document.addEventListener('keyup', (evento) => {
//     const celula = document.activeElement;

//     if (
//         celula &&
//         celula.classList.contains('cell') &&
//         !celula.classList.contains('numeroInicial') &&
//         !celula.classList.contains('modo-rascunho')
//     ) {
//         if (/^[1-9]$/.test(evento.key)) {
//             evento.preventDefault();
//             if (celula.textContent === evento.key){
//                 celula.textContent = "";
//                 celula.classList.remove('CellPreenchida');
//             }else {
//                 celula.textContent = evento.key;
//                 celula.classList.add('CellPreenchida');
//                 verificarPosicao({ target: celula }, evento.key);
//             }
            

            
//             setTimeout(verificarVitoria, 0);
//         }

//         if (evento.key === "Backspace" || evento.key === "Delete") {
//             evento.preventDefault();
//             celula.textContent = "";
//             celula.classList.remove('errado');
//         }
//     }
// });


