/*********** FUNZIONALITA' DELLA PAGINA index.html ******************/

$(document).ready(function () {

    let JWTHeader = {
        Authorization: 'Bearer ' + $.cookie('jwt')
    };

    let baseURL = 'http://localhost:8080';

    //form login
    $("#loginBtnForuser").click(function (event) {
        event.preventDefault();
        let email = $('#emailLogin').val();
        let password = $('#passwordLogin').val();
        let params = {
            email: email,
            password: password
        };
        let jsonParams = JSON.stringify(params);
        $.ajax({
            url: `${baseURL}/api/auth/login`,      
            contentType: 'application/json;charset=UTF-8',
            type: "POST",
            data: jsonParams,
            success: function (response) {
                //console.log('response = ' + JSON.stringify(response));
                let token = response.accessToken;
                console.log("token ricevuto = " + token);
                $.cookie('jwt', token);
                JWTHeader = updateHeader();
                //verifica (debug)
                console.log('verifica = ' + $.cookie('jwt'));
                console.log('JWTHeader = ' + JSON.stringify(JWTHeader));

                window.location.replace("userPage.html"); // manda utente al index.html    
            },
            error: function () {
                alert('login errato');
            }
        });
    });

    //register  
    $("#registerBtnForuser").click(function (event) {
        event.preventDefault();
        let name = $('#nameRegister').val();
        let surname = $('#surnameRegister').val();
        let email = $('#emailRegister').val();
        let password = $('#passwordRegister2').val();
        let params = {
            nome: name,
            cognome: surname,
            email: email,
            password: password
        };
        let jsonParams = JSON.stringify(params);
        console.log('jsonParams = ' + jsonParams);
        $.ajax({
            url: `${baseURL}/api/auth/signup`,         
            contentType: 'application/json;charset=UTF-8',
            type: "POST",
            data: jsonParams,
            success: function (response) {
                console.log('response = ' + JSON.stringify(response)); //debug
                $('#exampleModal').modal('hide'); //chiude la modale
                $('#exampleModal form')[0].reset(); //resetta il form
                
            },
            error: function (response) {
                console.log('response = ' + JSON.stringify(response)); //debug
                alert('Email gia\' registrata');
            }
        });
    });

}); /* end jQuery */


