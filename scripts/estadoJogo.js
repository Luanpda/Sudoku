let jogoAtual = null;
let NumErros = 0;
export function setJogoAtual(jogo) {
  jogoAtual = jogo;
}

export function getJogoAtual() {
  return jogoAtual;
}

export function setErros(erro){
  NumErros = erro;
}

export function getErros(){
  return NumErros;
}