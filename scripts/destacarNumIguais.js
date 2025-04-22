export  function destacarNumIguais(evento){

    const cell = evento.target.textContent
    const celulaID = evento.target.id;
    document.querySelectorAll('.NumeroIgual').forEach(cell => cell.classList.remove('NumeroIgual'));
    document.querySelectorAll('.NumeroSelecionado').forEach(cell => cell.classList.remove('NumeroSelecionado'));
    
    if(cell !== ""){
        for (let i = 0; i < 81; i++) {
            const cellComparar = document.getElementById('cell-'+ i).textContent;
            const cellCompararID = document.getElementById('cell-'+i);
            if (cell === cellComparar && cellCompararID.id !== celulaID){
                cellCompararID.classList.add('NumeroIgual');
            }
        }
        document.getElementById(celulaID).classList.add('NumeroSelecionado');  
    }
    
}