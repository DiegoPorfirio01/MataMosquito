let altura = 0
let largura = 1
let vidas = 1
let nivel = window.location.search
let tempoMosca = 1000
const venceu = 15
let contador = 1

switch (nivel) {
    case '2':
        tempoMosca = 750
    case '3': 
        tempoMosca = 500
    case 'auto':
        tempoMosca -= contador * 10
}

function dimensao() {
    altura = window.innerHeight
    largura = window.innerWidth
}

dimensao()

function posicaoRandom() {
    //arredondamento pra baixo - floor  -  random = numero até valor 1
    var posicaoY = Math.floor(Math.random() * altura) - 150
    var posicaoX = Math.floor(Math.random() * largura) - 150
    posicaoX = posicaoX <= 0 ? 0 : posicaoX
    posicaoY = posicaoY <= 0 ? 0 : posicaoY

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        document.getElementById('vida' + vidas).src = "../assets/images/coracao_vazio.png"
        vidas < 3 ? vidas++ : window.location.href = '../pages/gameOver.html'

    }

    //criar o elemento HTML
    let mosca = document.createElement('img')
    mosca.src = "../assets/images/mosca.png"
    mosca.className = 'mosquito' + classe()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    document.body.appendChild(mosca)
    mosca.onclick = function() {
        this.remove()
        contador = contador += 1
        if (contador == venceu) {
            window.location.href = "./venceu.html"
        }
    }
}

function restart() { window.location.href = "../index.html" }

function botao() {
    let modal  = document.getElementById("exampleModal");
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

function classe() {
    let tamanho = Math.floor(Math.random() * 3)
    return tamanho
}

function iniciarJogo() {
    let level = document.getElementById('level').value
    if (level == '') {
       alert('Selecione um level')
        return
    }
    window.location.href = "pages/jogoMataMosca.html?" + level
}

