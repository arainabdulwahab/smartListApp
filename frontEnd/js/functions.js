/********* Funzioni JWT **********/

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
  //console.log("user email = " + userEmail + ", data expiration = " + dataExp);
  return userEmail;
}

/********* Funzioni liste (cart) **********/

function ordineHeader(i, titoloCart) {
  return `
        <!-- single container-->
        <div class="col d-flex align-items-stretch bg-transparent" id="cloneList${i}">
          <div class="card border border-0 bg-transparent" style="width: 30rem;">
            <!-- Example split danger button -->
            <div class="card mb-4" id="backImg">
              <!-- main to manipulate  -->
              <div class="card-header d-flex justify-content-between">
                <div class="pt-2 ">${titoloCart}</div>
                <div class="btn-group dropstart">
                  <button class="btn border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                      <path
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                  
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" class="duplica${i}">Duplica
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-clipboard" viewBox="0 0 16 16">
                    <path
                      d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path
                      d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                  </svg>
                      </a></li>
                    <li><a class="dropdown-item" href="#" data-bs-toggle="modal"
                        data-bs-target="#exampleModalShare${i}">Condividi
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-share" viewBox="0 0 16 16">
                          <path
                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                      </a>
                    </li>
                    <li><a class="dropdown-item" href="#" data-bs-toggle="modal"
                        data-bs-target="#exampleModalColor${i}">Colore
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-paint-bucket" viewBox="0 0 16 16">
                          <path
                            d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" />
                        </svg>
                      </a></li>
                    <li><a class="dropdown-item" href="#" data-bs-toggle="modal"
                        data-bs-target="#exampleModalSfondo${i}">Sfondo
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-back" viewBox="0 0 16 16">
                          <path
                            d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                        </svg>
                      </a></li>
                    <li><a class="dropdown-item" href="#">Elimina
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-trash" viewBox="0 0 16 16">
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                      </a></li>
                  </ul>
                </div>
              </div>
              <div class="card-body " data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}"> `;
}

/********* Funzioni ricette (recipe) **********/

function ricettes(i, recipe) {
  let ricetteCon = `  
     <!-- single container-->
    <div class="card bg-white shadow-lg p-0 m-1 mb-5 bg-body rounded responsiveRecipe">
        <div class=" border border-0">
            <div class="p-1 mb-1 text-white position-absolute top-0 end-0" >
                <div class="d-flex flex-row bd-highlight mb-0 bg-dark rounded topItemBox opacity-75">
                    <div class="p-2 bd-highlight ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-clock " viewBox="0 0 20 15">
                            <path
                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                    </div>
                    <p class="pt-2 bd-highlight" style="padding-right: 1vw; margin-top: 0.5vh; font-size: small;">${recipe.tempo}min</p>
                </div>
            </div>
            <img src="${recipe.immagine}" class="card-img-top" alt="..."
                data-bs-toggle="modal" data-bs-target="#staticBackdropRecipe${i}">
            <div class="card-body m-0 p-0 mb-4">
                <div class="card-header d-flex justify-content-between bg-body border-0 ">

                    <div class="p-1 m-0 p-1 mt-1 flex-grow-1 bd-highlight" id="riquadroRicetta">
                      <div class="bg-transparent"> 
                          <a href="#" class="p-1 " style="background-color: #d93e3e; color:white; text-align:none; text-decoration: none; border-radius: 5px;">${recipe.tipo}</a>
                         </div>
                    </div>`;
  let tags = recipe.categorie;
  for (tagd of tags.slice(0, 2)) {
    ricetteCon += `
                            <div class="pt-2 bd-highlight ">
                            <p class=" mb-0 ms-2 ps-2 pe-2 text-white rounded" style="background-color: #1985d9; " id="${tagd.nome}" href="#${tagd.nome}">#${tagd.nome}</p>
                            </div>
                            ` };
  ricetteCon += `
                </div>
                <h5 class="p-2 card-title text-center text-truncate" data-bs-toggle="modal" style="font-size: large;"
                    data-bs-target="#staticBackdropRecipe${i}"> ${recipe.nome} </h5>
            </div>
        </div>
    </div> <!-- card end -->`;

  return ricetteCon;
}



function ricetteModal(i, recipe) {
  let ricettaModal = `
    <!-- Modal recipe -->
    <div class="modal fade modal-lg" id="staticBackdropRecipe${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-body m-0 p-0">
                    <div class="p-3 mb-2  text-white position-absolute top-0 start-0  " style="width: 30%">
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
                            <p class="pt-2 ms-2 bd-highlight">${recipe.tempo} min</p>
                        </div>
                    </div>
                    <img src="${recipe.immagine}"
                        class="card-img-top img-fluid" alt="...">
                </div>
                <div class="card-header d-flex justify-content-between bg-body border-0 ">

                    <div class="p-2 me-auto p-2 bd-highlight">
                        <p class="p-1 ps-2 pe-2 mb-0 bg-danger text-white rounded">${recipe.tipo}</p>
                    </div> `;

  let tags = recipe.categorie;
  for (tagd of tags) {
    ricettaModal += `<div class="pt-2 p-2   bd-highlight">
                                <p class="p-1 mb-0 ps-2 pe-2 bg-primary text-white rounded">#${tagd.nome}</p>
                            </div>`;
  }
  ricettaModal += `
                    </div>
                    <h5 class="card-title p-3">${recipe.nome} </h5>
                    <p class="card-text p-3">${recipe.descrizione}
                    </p>
                    <h5 class="card-title p-3">Ingredienti</h5>
                    <div class="d-flex align-content-end flex-wrap m-2">
                    `;
  let prodotti = recipe.prodotti;
  for (prod of prodotti) {
    ricettaModal += ` <div class="d-flex justify-content-between" style="width:100%";>
                                    <img src="${prod.immagine}" width="30px" height="30px"
                                        class="p-2 bd-highlight" style="background-color: grey;">
                                    <p class="p-2 flex-grow-1 bd-highlight">${prod.genere}</p>
                                    <p class="p-2 bd-highlight">2kg</p>
                                </div> <!-- end -->`;

  }
  ricettaModal +=
    `
                </div>
                <h5 class="card-title p-1 ms-2">Procedimento</h5>

                <p class="card-text p-3">${recipe.procedimento}
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

function importRicetta(i) {
  alert('click importa ' + i);
}


function updateModal(i, lista) {
    let updateModals = ` `;
    let listaTitolo ;
    updateModals = updateModalHeader(i, lista);
    for(item of lista){ 
    updateModals += updateModalProdottiLoop(item);
    //console.log(item);
    }
    updateModals += updateModalFooter();


return updateModals;
}


function updateModalHeader(i, lista){
  return `
  <!-- create Modal  list -->
  <div class="modal fade modal-lg" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false"
  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-body">
    <div class="card  border border-0 mb-4">
      <!-- main to manipulate  -->
      <div class="card-header  d-flex justify-content-between">
  
        <svg xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="modal" width="20" height="20"
          fill="currentColor" class="bi bi-x-square mt-2" viewBox="0 0 16 16">
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <div class="pt-2 ">
          <input class="form-control me-2" value="${lista[0].titolo} " aria-label="Search" style="border:0; ">
  
        </div>
        <div class="btn-group dropstart">
          <button class="btn border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
              </path>
            </svg>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">Colore
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-paint-bucket" viewBox="0 0 16 16">
                  <path
                    d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z">
                  </path>
                </svg>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Quantita
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-bag" viewBox="0 0 16 16">
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Prezzo
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-tags" viewBox="0 0 16 16">
                  <path
                    d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                  <path
                    d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                </svg>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Budget
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-percent" viewBox="0 0 16 16">
                  <path
                    d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div> <!-- end card-header -->
      <div class="card-body " >
        <!-- description of items -->
        <div class="d-flex bd-highlight border-top">
          <div class=" flex-grow-1 bd-highlight"></div>
          <div class=" ps-4 pe-4 flex-grow-1 bd-highlight">
            <p>Products </p>
          </div>
          <div class="ps-2 mb-0 bd-highlight" style="width: 10%;">
            <p>Added to cart</p>
          </div>
          <div class="ps-2 bd-highlight">
            <p>Quantity</p>
          </div>
          <div class="ps-4 bd-highlight">
            <p>Price</p>
          </div>
        </div><!-- end description of items -->
        <!-- righe   to be looped -->
        <div class="mt-1 mb-3 " >
        `;
}
/* update Modal loop item */

function updateModalProdottiLoop(item) {

  let items = `   
   <div class="mt-1 mb-3 d-flex justify-content-between" id = "itemToShow" >
    <div class=" p-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
      </svg>
    </div>

    <div class=" p-2">
      <img src="${item.img}" width="30px" height="30px" class="p-2 bd-highlight" style="background-color: grey;">
    </div>

    <div class="p-2" style="width: 50rem; ">
      <p >${item.genere} </p>
    </div>

    <div class=" bd-highlight p-2" >
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    </div>

    <div class="p-2" style="width: 15rem; ">
      <p > ${item.quantita}</p>
    </div>

    <div class="p-2">
      <p > ${item.prezzo}</p>
    </div>
  </div >

    `;
    return items;
}

function updateModalFooter() {
  return   ` 
  </div>
   </div ><!--end card - body-- >
  </div ><!--end card-- >
  <!--end modification-- >
</div >
    <div>
      <!-- bottom of list add button and show total price -->
      <div class="d-flex bd-highlight border-top ps-4 pe-4">
        <div class="p-2 flex-grow-1 bd-highlight">
          <button type="button" class="btn btn-success " id="addButton">Add +</button>
        </div>
        <div class="p-2 bd-highlight">Total price: </div>
        <div class="p-2 bd-highlight"><span>50</span><span>£</span></div>
      </div><!-- end  bottom of list add button and show total price -->
    </div>
</div >
</div >
</div >
</div >
    `;
}


function ordineEnd() {
  return `
      </div >
    </div >
    </div >
    </div >
    </div ><!--end first card-- >

    `;
} // end ordineCenter ()


//funzione riproposta colore liste
function coloreModal(i) {
  return `   <div class="modal fade" id="exampleModalColor${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Chose a color</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-start text-center">
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#D88D8C;" data-color="#D88D8C" data-cart="${i}"></div>
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#96D9B8;" data-color="#96D9B8" data-cart="${i}"></div>
              </div>
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#D9AF77;" data-color="#D9AF77" data-cart="${i}"></div>
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#ADD3D9;" data-color="#ADD3D9" data-cart="${i}"></div>
              </div>
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#9EACD9;" data-color="#9EACD9" data-cart="${i}"></div>
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#D9B6D3;" data-color="#D9B6D3" data-cart="(${i}"></div>
              </div>
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#B5D877;" data-color="#B5D877" data-cart="${i}"></div>
                <div class="rounded-circle m-1 color-cart" style="width: 50px; height: 50px; background-color:#D9C775;" data-color="#D9C775" data-cart="${i}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}



//modifica sfondo ordine
function sfondoModal(i) {
  return `
    <!-- modal sfondo -->
    <div class="modal fade" id="exampleModalSfondo${i}" tabindex="-1"   aria-labelledby="exampleModalLabel"
    aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Choose a background</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-start text-center">
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-ordine" data-sfondo="1" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-1.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                </div>
                <div class="rounded-circle m-1 color-ordine"" data-sfondo="2" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-2.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                </div>
              </div>
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-ordine"  data-sfondo="3" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-3.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                
                </div>
                <div class="rounded-circle m-1 color-ordine"  data-sfondo="4" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-4.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                
                </div>
              </div>
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-ordine"  data-sfondo="5" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-5.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                
                </div>
                <div class="rounded-circle m-1 color-ordine" data-sfondo="6" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-6.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                
                </div>
              </div>
              <div class="d-inline m-1 p-1">
                <div class="rounded-circle m-1 color-ordine"  data-sfondo="7" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-7.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                
                </div>
                <div class="rounded-circle m-1 color-ordine" data-sfondo="8" data-ordine="${i}">
                  <img src="img/wallpaper/wallpaper_liste/wallpaper-list-8.webp" alt="wallpaper-list-1.webp" width="50px" height="50px" style="border-radius:50%">
                
                </div>
              </div>
            </div> <!-- END flex -->
          </div> <!-- END BODY -->
        </div> <!-- END MODAL CONTENT -->
      </div> <!-- END MODAL-DIALOG -->
    </div> <!-- END MODAL -->
    `;
}












function shareBtnModal(i) {
  return `<div class="modal fade" id="exampleModalShare${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Share width</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <a class="btn btn-primary pb-2" style="background-color: #3b5998;" href="#!" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook"
                  viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a class="btn btn-primary" style="background-color: #55acee;" href="#!" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter"
                  viewBox="0 0 16 16">
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a class="btn btn-primary" style="background-color: #ac2bac;" href="#!" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a class="btn btn-primary pb-2" style="background-color: #25d366;" href="#!" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp"
                  viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>`;
}




function duplicaFun(i) {

}

