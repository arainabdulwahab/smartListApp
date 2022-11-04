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
            url: `${baseURL}/login`,      // da modificare ###########
            contentType: 'application/json;charset=UTF-8',
            type: "POST",
            data: jsonParams,
            success: function (response) {
                //console.log('response = ' + JSON.stringify(response));
                let token = response.accessToken;
                console.log("token ricevuto = " + token);
                $.cookie('jwt', token);
                JWTHeader = updateHeader();
                extractPayload(token);
                //verifica

                window.location.replace("/index.html"); // manda utente al index.html
                console.log('verifica = ' + $.cookie('jwt'));
                console.log('JWTHeader = ' + JSON.stringify(JWTHeader));
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
        let email = $('#emailRegister').val();
        let password = $('#passwordRegister2').val();
        let params;
        let jsonParams = JSON.stringify(params);
        $.ajax({
            url: `${baseURL}/api/auth/login`,         // da modificare ###########
            contentType: 'application/json;charset=UTF-8',
            type: "POST",
            data: jsonParams,
            success: function (response) {
                //console.log('response = ' + JSON.stringify(response));
                let token = response.accessToken;
                console.log("token ricevuto = " + token);
                $.cookie('jwt', token);
                JWTHeader = updateHeader();
                extractPayload(token);
                //verifica

                window.location("/index.html"); // manda utente al index.html


                console.log('verifica = ' + $.cookie('jwt'));
                console.log('JWTHeader = ' + JSON.stringify(JWTHeader));
            },
            error: function () {
                alert('login errato');
            }
        });
    });
    // Visualizzazione di tutti gli utenti
    $('#getUserBtn').click(function () {
        $.ajax({
            url: `${baseURL}/api/admin/users`,
            headers: JWTHeader,
            contentType: 'application/json;charset=UTF-8',
            type: "GET",
            success: function (response) {
                console.log(response);
            },
            error: function () {
                alert('accesso non autorizzato');
            } 
        });
    });

    // Logout
    $('#logoutBtn').click(function () {
        $.cookie('jwt', '');
        JWTHeader = updateHeader();
        window.location.replace("/login.html");

    });

}); /* end jQuery */

function updateHeader() {
    return {
        Authorization: 'Bearer ' + $.cookie('jwt')
    };
}

function extractPayload(token) {
    let array = token.split('.');
    let payload = array[1];
    let jsonPayload = atob(payload);
    console.log("jsonPayload = " + jsonPayload);
    //estrazione dei dati dal payload
    let objPayload = JSON.parse(jsonPayload);
    let userEmail = objPayload.sub;
    let dataExp = objPayload.exp;
    console.log("user email = " + userEmail + ", data expiration = " + dataExp);

}

