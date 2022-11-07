/*********** FUNZIONALITA' DELL'ADMIN ******************/

// Visualizzazione di tutti gli utenti (DA TESTARE)
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