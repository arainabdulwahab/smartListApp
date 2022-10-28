$(document).ready(function () {
    let i = 0;
    let recipeList = [];
    /******** Visualizzazione degli aforismi al caricamento della pagina *******/
    $.get('http://localhost:8080/api/ricette', function (response) {
        console.log(response); //debug
        //$("#content").load("accordion.html");
        let ricette = '<div class="accordion" id="accordion">';
        for (recpie of response) {
            i++;
            accordion +=
                '<div class="accordion-item">' +
                '<h2 class="accordion-header" id="heading' + i + '">' +
                '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i + '" aria-expanded="true" aria-controls="collapseOne">' +
                '<strong>Aforisma Item #' + i + '</strong>' +
                '</button>' +
                '</h2>' +
                '<div id="collapse' + i + '" class="accordion-collapse collapse show" aria-labelledby="heading' + i + '">' +
                '<div class="accordion-body">' +
                recipe.testo +
                '</div>' +
                '</div>' +
                '</div>';
                recipeList[i] = {
                id: recipeList.id,
                testo: recipeList.testo
            }
        } /* end for of */
        $("#recipeContent").append(ricette);
    });
});