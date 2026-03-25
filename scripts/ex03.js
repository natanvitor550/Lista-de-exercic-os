function empresa(){
    let ganhoAno = 0;
    let gastoAno = 0;
    let saldo = 0;
    for(let i=1; i<12; i++){

        let ganho = parseFloat(prompt("Digite o número do ganho do mês"));
         let gasto = parseFloat(prompt("Digite o número do gasto do mês"));
         ganhoAno += ganho;
         gastoAno +=gasto;
         saldo = ganhoAno - gastoAno;
    }
alert("O lucro de todo ano foi: " + ganhoAno);
alert("O gasto de todo ano foi: " + gastoAno);
alert("O saldo financeiro anual foi de: " + saldo);
}