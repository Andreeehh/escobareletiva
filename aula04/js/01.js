$(document).ready(function() {

    $('.btn-success').click(function() {
        let cep = $('#cep').val()
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`
        }).done(function(data) {
            let street = data.logradouro; // Atribuir o valor da rua (logradouro) para a variável street
            $('#street').val(street)
        });
    })

    $('#cep').keypress(function(event) {
        if (event.keyCode === 13) { // Verifica se a tecla pressionada é a tecla Enter
            $('.btn-success').click(); // Dispara o clique do botão
        }
    });



})