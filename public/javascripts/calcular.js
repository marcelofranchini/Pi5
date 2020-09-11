document.sendCalculo.onsubmit = async(e) => {
    e.preventDefault()
    const form = e.target
    let comprimento = $('#comprimento').val()
    let temperatura = $('#temperatura').val()
    let coeficiente = $('#coeficiente').val()

    if (comprimento == null || temperatura == null || coeficiente == null ||
        comprimento.trim() == "" || temperatura.trim() == "") {
        $.toast({
            heading: 'Erro',
            text: 'Todos os campos devem ser preenchidos',
            showHideTransition: 'fade',
            position: 'top-left',
            icon: 'error',
            loaderBg: '#337ab7'
        })
    } else {
        const options = {
            method: 'post',
            body: JSON.stringify({
                comprimento,
                temperatura,
                coeficiente,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let resposta = await fetch(form.action, options)
        let resultado = await resposta.json()

        if (resposta.status == 200) {
            $('#contactForm')[0].reset();
            document.getElementById('resultado').value = `Comprimento Final = ${resultado} metros`

            // alert('Funcionando')
        }

    }
}
$('#limpar').on('click', async() => {

    $('#contactForm')[0].reset();
})