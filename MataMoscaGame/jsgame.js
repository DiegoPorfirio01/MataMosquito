let altura = 0
let largura = 1
let vidas = 1
let pagina = window.location.search
pagina = pagina.replace('?', '')
let tempoMosca = 1000
let contador = 1
if (pagina == 1) {
    tempoMosca = 1000
} else if (pagina == 2) { tempoMosca = 750 } else if (pagina == 3) { tempoMosca = 500 } else if (pagina == 'auto') {
    tempoMosca -= contador * 10

}





function dimensao() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
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
        document.getElementById('vida' + vidas).src = "coracao_vazio.png"
        vidas < 3 ? vidas++ : window.location.href = 'game_over.html'

    }


    //criar o elemento HTML
    let mosca = document.createElement('img')
    mosca.src = "mosca.png"
    mosca.className = 'mosquito' + classe()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    document.body.appendChild(mosca)
    mosca.onclick = function() {
        this.remove()
        contador = contador += 1
        if (contador == 100) {
            window.location.href = "venceu.html"
        }
    }



}


function restart() { window.location.href = "inicio.html" }

function botao() {
    $("#exampleModal").modal('show')
}



function classe() {

    let tamanho = Math.floor(Math.random() * 3)
    return tamanho

    /* ou switch(tamanho) {
    case 0:
        'mosquito1'
        return
    case 1:
        'mosquito2'
        return
    case 2:
        'mosquito3'
        return
        */
}