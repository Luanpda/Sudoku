import { getJogoAtual } from "./scripts/estadoJogo.js";


export function mostrarDificuldade(){
    const dificuldade = getJogoAtual();
    const Mostrardificuldade = document.getElementById('dificuldade');
    if (dificuldade.dificuldade === 'fácil'){
        Mostrardificuldade.textContent = dificuldade.dificuldade.toUpperCase();
        Mostrardificuldade.style.color = ' #28a745';
    }
    if (dificuldade.dificuldade === 'médio'){
        Mostrardificuldade.textContent = dificuldade.dificuldade.toUpperCase();
        Mostrardificuldade.style.color = ' #ffc107';
    }
    if (dificuldade.dificuldade === 'difícil'){
        Mostrardificuldade.textContent = dificuldade.dificuldade.toUpperCase();
        Mostrardificuldade.style.color = ' #dc3545';
    }
    
}