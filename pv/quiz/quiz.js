
/* Aula 20 MaiaQuiz  */
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
let quest

// PERGUNTA
let numQuestao;
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    correta: "0",
}
const q1 = {
    numQuestao: 1,
    pergunta: "Você tem ou conhece alguém que tenha rugas?",
    alternativaA: "Sim",
    alternativaB: "Não",
    correta: "Sim"
}
const q2 = {
    numQuestao: 2,
    pergunta: "Se houvesse um método para eliminar rugas naturalmente, você faria?",
    alternativaA: "Sim",
    alternativaB: "Não",
    correta: "Sim"
}
const q3 = {
    numQuestao: 3,
    pergunta: "O vídeo a seguir revela todos os detalhes, você vai assistir?",
    alternativaA: "Sim",
    alternativaB: "Não",
    correta: "Sim"
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3]

let numero;
let total;

numero = q1.numQuestao

let totalDeQuestoes = (questoes.length) - 1
console.log("Total de questões " + totalDeQuestoes)
total = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    // progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if (numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoSim(respostaEscolhida, certa) {
    a.classList.remove('errou')
    a.classList.add('acertou')

}

function piscarNoNao(respostaEscolhida, certa) {
    b.classList.remove('acertou')
    b.classList.add('errou')

}

function tirarPiscar(respostaEscolhida, certa) {
    a.classList.remove('acertou')
    b.classList.remove('acertou')
    a.classList.remove('errou')
    b.classList.remove('errou')

}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if (respostaEscolhida == certa) {
        piscarNoSim()
    } else {
        piscarNoNao()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // atualizar placar
    // placar = pontos
    // instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function () {

        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes) {
            // console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {
    window.location.href = "/pv1/index.html";
}