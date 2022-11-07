/*********** FUNZIONALITA' DELLA PAGINA recipe.html ******************/

$(document).ready(function () {
    let i = 0;
    let recipeList = [];
    let stringifyJson;
    let pareJson ;
    $.get('http://localhost:8080/api/ricette', function (response) {
        // stringifyJson = JSON.stringify(response);
        // pareJson = JSON.parse(stringifyJson);

       // console.log(pareJson); //debug

        let ricette = '';
        for (recipe of response) {
            i++;
            ricette += ricettes(i, recipe);
            ricette +=  ricetteModal(i, recipe);
                recipeList[i] = {
                id: recipeList.id,
                testo: recipeList.testo
            }
        } /* end for of */
        $("#recipeContent").append(ricette);
    });
});
