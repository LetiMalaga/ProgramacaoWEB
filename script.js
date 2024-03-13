// alert("Hello World!"); // Alerta automático do JS
let nota = parseInt(prompt("insira uma nota: "))
const nomeInstituicao = "UCB" // se a const não for declarada logo de início, ela não funciona
const notaParaPassar = 7;
const notaMaxima = 10; // number, não int

let notaMaximaAtingida = false;

console.log("Nota: ", nota); // Valor vai aparecer no console da página web, não na página em si. 
// Serve para debugar o código

    let situacao = "aprovado";

if(nota >= notaParaPassar){
//    let situacao = " aprovado"; 
//    var nomeAluno = "joao"; // Variável acessável fora do escopo; Global. Causa comportamentos estranhos
situacao = "aprovado";
} else {
    situacao = "reprovado";
}

if(nota === notaMaxima){
    notaMaximaAtingida = true
}

console.log("Situacao: ", situacao);
console.log("Nota Maxima Atingida: ", notaMaximaAtingida)
// console.log("nome: ", nomeAluno);

// situação é definida dentro do if
// console.log("situacao ", situacao);
