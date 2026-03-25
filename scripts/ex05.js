function parImpar(){
    let numeroImpar = 0;
    let numeroPar = 0;
    let numero = parseFloat(prompt("Informe um número"));
    if (numero % 2 == 0){
        alert("O número é par");
        numeroImpar = numero + 1;
        alert("Do número Par para o Ímpar: " + numeroImpar);
    }else{
        alert("O número é ímpar");
        numeroPar = numero + 1;
        alert("Do número Ímpar para o Par: " + numeroPar);
    }
}