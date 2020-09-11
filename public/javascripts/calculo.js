document.sentMessage.onsubmit = async(e) => {
    e.preventDefault()
    const form = e.target
    let message = $('#message').val()
    let name = $('#name').val()
    let email = $('#email').val()
    let phone = $('#phone').val()

    if (name == null || message == null || email == null || phone == null ||
        name.trim() == "" || message.trim() == "" || email.trim() == "" || phone.trim() == "") {
        $.toast({
            heading: 'Erro',
            text: 'Todos os campos devem ser preenchidos',
            showHideTransition: 'fade',
            position: 'top-left',
            icon: 'error',
            loaderBg: '#337ab7'
        })
    } else {

        $('#loader').addClass('loader')
        const options = {
            method: 'post',
            body: JSON.stringify({
                message,
                name,
                email,
                phone
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let resposta = await fetch(form.action, options)

        if (resposta.status == 200) {
            $('#loader').removeClass('loader')
            $.toast({
                heading: 'Sucesso',
                text: 'E-mail enviado com sucesso',
                showHideTransition: 'slide',
                icon: 'success',
                position: 'top-left',
                loaderBg: '#337ab7'
            })
            $('#contactForm')[0].reset();
        } else {
            $('#loader').removeClass('loader')
            $.toast({
                heading: 'Erro',
                text: 'Email não enviado. Tente Novamente',
                showHideTransition: 'fade',
                position: 'top-left',
                icon: 'error',
                loaderBg: '#337ab7'
            })
        }

        // let resultado = await resposta.json()

    }



}