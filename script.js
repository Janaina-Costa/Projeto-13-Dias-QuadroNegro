
const tabuada = document.querySelector('.tabuada')
const aluno = document.querySelector('.aluno')


let operador ='X'
let numero = 0
let resultado = ''
const nomeAluno = window.prompt('Escreva o seu nome')
const multiplicador = window.prompt('Qual tabuada você quer?')


if(operador === 'X'){
    while(numero <=10){
        resultado += `${numero} X ${multiplicador} = ${numero * multiplicador} <br />`
        numero++
    }
}

tabuada.innerHTML = resultado
aluno.innerHTML = `Aluno(a) : ${nomeAluno}`