import { setErros } from "./estadoJogo.js";
import { mostrarErros } from "./mostrarErros.js";

export function resetarErros() {
    const celulas = document.querySelectorAll('.cell');
    celulas.forEach(celula => {
      celula.classList.remove('errado');
    });
    const ganhou = document.querySelector('.vitoria')
    ganhou.style.visibility = 'hidden';
    setErros(0);
    mostrarErros(0);
  }