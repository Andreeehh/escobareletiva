function loop(){
    var position = parseInt($('#area_jogo').css('background-position'))

    $('#area_jogo')
        .css('background-position', position - 1)
}

setInterval(
    loop,
    30
)