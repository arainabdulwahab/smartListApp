/*********** FUNZIONALITA' DELLA PAGINA recipe.html ******************/

$(document).ready(function () {

    // impostazioni iniziali
    let JWTHeader = {
        Authorization: 'Bearer ' + $.cookie('jwt')
    };

    let baseURL = 'http://localhost:8080';

    let token = $.cookie('jwt');
    console.log('token: ' + token);

    //if (token !== '') {
    let email = extractPayload(token);
    //}

    let i = 0;
    let recipeList = [];
    let ricette = '';

    $.ajax({
        url: `${baseURL}/api/ricette`,
        headers: JWTHeader,
        contentType: 'application/json;charset=UTF-8',
        type: "GET",
        success: function (response) {
            for (recipe of response) {
                i++;
                ricette += ricettes(i, recipe);
                ricette += ricetteModal(i, recipe);
                recipeList[i] = {
                    importo: recipe.importo,
                    nome: recipe.nome,
                    prodotti: recipe.prodotti
                };
                console.log(response); //debug
            } /* end for of */
            $("#recipeContent").append(ricette);
        }

    });



    $(document).on('click', '.importBtn', function (event) {
        let selectedRecipe = $(event.target);
        let numRecipe = selectedRecipe.attr("data-recipe");
        let recipe = recipeList[numRecipe];

        let params = {
            email: email
        };
        let jsonParams = JSON.stringify(params);

        let utenteOrdine = null;

        $.ajax({
            url: `${baseURL}/api/utente/email`,
            headers: JWTHeader,
            contentType: 'application/json;charset=UTF-8',
            type: "POST",
            data: jsonParams,
            success: function (utente) {
                utenteOrdine = utente;
            }
        });

        let ordine = {
            importo: recipe.importo,
            budget: 0.0,
            data: '2022-11-08',
            priceView: true,
            quantitaView: true,
            utente: utenteOrdine,
            coloreOrdine: null,
            sfondoOrdine: null,
            items: null,
            titolo: recipe.nome
        };

        let items = [];
        let i = 0;
        let prodotti = recipe.prodotti;
        for (prodotto of prodotti) {
            let item = {
                prezzo: 0.0,
                quantita: 0,
                ordine: ordine,
                prodotto: prodotto
            };
            items[i] = item;
            i++;
        }

        //successivamente inserire gli items nell'ordine creato
    });

    let jsonOrdine = JSON.stringify(ordine);

    if (ordine != null) {
        $.ajax({
            url: `${baseURL}/api/ordine/save`,
            headers: JWTHeader,
            contentType: 'application/json;charset=UTF-8',
            type: "POST",
            data: jsonOrdine,
            success: function (response) {
                console.log(ordine); //debug
            }
        });
    }



}); /* end jQuery */
