function loop(){
    var position = parseInt($('#area_jogo').css('background-position'))

    $('#area_jogo')
        .css('background-position', position - 10)
}

setInterval(
    loop,
    30
)

function start() {
    $('#alerta').css('display', 'none')
    
    $('#area_jogo').append('<div id="player"></div>')
    $('#area_jogo').append('<div id="tank"></div>')
    $('#area_jogo').append('<div id="alien"></div>')
    $('#area_jogo').append('<div id="person"></div>')
}

start()