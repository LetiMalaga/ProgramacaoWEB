// alert("Hello World!"); // Alerta automático do JS

let nota = 10;
const nomeInstituicao = "UCB" // se a const não for declarada logo de início, ela não funciona

console.log("nota: ", nota); // Valor vai aparecer no console da página web, não na página em si. 
// Serve para debugar o código

if(nota > 7){
    let situacao = "aprovado";
    var nomeAluno = "joao"; // Variável acessável fora do escopo; Global. Causa comportamentos estranhos
    console.log("situacao: ", situacao);
}

console.log("nome: ", nomeAluno);

// situação é definida dentro do if
// console.log("situacao ", situacao);
