function Pagamento(){
    let Nome = prompt("Informe o deu nome?");
    let Salario = parseFloat(prompt("Qual o seu salário?"));
    alert("O seu nome é de:" + (Nome));
    alert("O seu salário bruto é de: " + (Salario*(8/100)));
    alert("O seu salário líquido é de: " + (Salario - (Salario*(8/100))));
}