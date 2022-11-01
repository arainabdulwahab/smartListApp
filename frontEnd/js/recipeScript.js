$(document).ready(function () {
    let i = 0;
    let recipeList = [];
    let stringifyJson;
    let pareJson ;
    $.get('http://localhost:8080/api/ricette', function (response) {
        stringifyJson = JSON.stringify(response);
        pareJson = JSON.parse(stringifyJson);

       // console.log(pareJson); //debug

        let ricette = '';
        for (recpie of pareJson) {
            i++;
            ricette += ricettes(i, recpie);
            ricette +=  ricetteModal(i, recpie);
                recipeList[i] = {
                id: recipeList.id,
                testo: recipeList.testo
            }
        } /* end for of */
        $("#recipeContent").append(ricette);
    });
});



function ricettes(i, recpie){
    let ricetteCon = `  
     <!-- single container-->
    <div class="card bg-white shadow-lg p-0 m-1 bg-body rounded" style="width: 15rem; height:80%;">
        <div class="  border border-0">
            <div class="p-3 mb-2  text-white position-absolute top-0 end-0 " style="width: 40%">
                <div class="d-flex flex-row bd-highlight mb-0 bg-dark rounded">
                    <div class="p-2 bd-highlight ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-clock " viewBox="0 0 16 16">
                            <path
                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                    </div>
                    <p class="pt-2 bd-highlight">60 min</p>
                </div>
            </div>
            <img src="${recpie.immagine}" class="card-img-top" alt="..."
                data-bs-toggle="modal" data-bs-target="#staticBackdropRecipe${i}">
            <div class="card-body m-0 p-0 mb-4">
                <div class="card-header d-flex justify-content-between bg-body border-0 ">

                    <div class="p-2 me-auto p-2 bd-highlight">
                        <p class="p-1 ps-2 pe-2 mb-0 bg-danger text-white rounded text-center">${recpie.tipo}</p>
                    </div>`;
                    let tags = recpie.categorie;
                    for(tagd of tags){ 
                        ricetteCon +=   `
                            <div class="pt-2 p-2   bd-highlight">
                                <p class="p-1 mb-0 ps-2 pe-2 bg-primary text-white rounded" id="${tagd.nome}" href="#${tagd.nome}">${tagd.nome}</p>
                            </div>
                            ` };
            ricetteCon+=  `
                </div>
                <h5 class="card-title text-center" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropRecipe${i}"> ${recpie.nome} </h5>
                <!-- <p class="card-text">La pasta alla siciliana è un primo piatto super gustoso, di quelli che portano l'allegria in tavola! Nonostante il nome, la ricetta ha origini napoletane ed è definita così per la presenza delle melanzane, che richiamano la pasta alla Norma. </p> -->
            </div>
        </div>
    </div> <!-- card end -->`;
    return ricetteCon;
}

function ricetteModal(i, recpie){
     let ricettaModal = `
    <!-- Modal recipe -->
    <div class="modal fade modal-dialog-scrollable modal-lg" id="staticBackdropRecipe${i}" data-bs-backdrop="static"
        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-body m-0 p-0">
                    <div class="p-3 mb-2  text-white position-absolute top-0 start-0  " style="width: 20%">
                        <div class="d-flex flex-row bd-highlight mb-0 ">
                            <div style="width:50%; margin:0; position: absolute; ">
                                <button type="button" class="btn-close bg-danger" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 mb-2  text-white position-absolute top-0 end-0 " style="width: 20%">
                        <div class="d-flex flex-row bd-highlight mb-0 bg-dark rounded">
                            <div class="p-1 bd-highlight ms-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-clock " viewBox="0 0 16 16">
                                    <path
                                        d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                    </path>
                                    <path
                                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                    </path>
                                </svg>
                            </div>
                            <p class="pt-2 ms-2 bd-highlight">60 min</p>
                        </div>
                    </div>
                    <img src="${recpie.immagine}"
                        class="card-img-top img-fluid" alt="...">
                </div>
                <div class="card-header d-flex justify-content-between bg-body border-0 ">

                    <div class="p-2 me-auto p-2 bd-highlight">
                        <p class="p-1 ps-2 pe-2 mb-0 bg-danger text-white rounded">${recpie.tipo}</p>
                    </div> `;
                    
                    let tags = recpie.categorie;
                    for(tagd of tags){ 
                        ricettaModal +=   `<div class="pt-2 p-2   bd-highlight">
                                <p class="p-1 mb-0 ps-2 pe-2 bg-primary text-white rounded">#${tagd.nome}</p>
                            </div>`;
                    }
                ricettaModal +=  `
                    </div>
                    <h5 class="card-title p-3">${recpie.nome} </h5>
                    <p class="card-text p-3">La pasta alla siciliana è un primo piatto super gustoso, di quelli che
                        portano l'allegria in tavola! Nonostante il nome, la ricetta ha origini napoletane ed è
                        definita così per la presenza delle melanzane, che richiamano la pasta alla Norma.
                    </p>
                    <h5 class="card-title p-3">Ingredienti</h5>
                    <div class="d-flex align-content-end flex-wrap m-2">
                    `;
                let prodotti = recpie.prodotti;
                for(prod of prodotti){
                    ricettaModal += ` <div class="d-flex justify-content-center ">
                                    <img src="${prod.immagine}" width="30px" height="30px"
                                        class="p-2 bd-highlight" style="background-color: grey;">
                                    <p class="p-2 flex-grow-1 bd-highlight">${prod.genere}</p>
                                    <p class="p-2 bd-highlight">2kg</p>
                                </div> <!-- end -->`;

                }
        ricettaModal +=
                `
                </div>
                <h5 class="card-title p-1">Procedimenti </h5>

                <p class="card-text p-3">${recpie.procedimento}
                </p>
                <div class="position-absolute bottom-0 end-0 ">
                    <button type="button" class="btn btn-success " onclick"importRicetta(${i})">import ↓</button>
                </div>
            </div>
        </div>
    </div>
    `;
    return ricettaModal;
}


function importRicetta(i){
    alert('click importa ' + i);
}


