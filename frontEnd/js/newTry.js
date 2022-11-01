let jsonParseResOrdine ;
//caricamento di tutte le liste per l'utente
$(document).ready(function () {
  let i = 0;
  let ordiniList = [];
  $.get('http://localhost:8080/api/ordini', function (response) {
    console.log(response);
    let lista = '';
    
    for (cart of response) {
      i++;
      lista += ordineHead(i, cart);

      for (itemList of cart.items) {
        let opCheck = 'unchecked';
        if (itemList.spunta) {
          opCheck = 'checked';
        }

        lista += `   
                <div class="d-flex justify-content-center ">
                  <img src="img/icon/almond.png" width="30px" height="30px"
                    class="p-2 bd-highlight" style="background-color: grey;">
                  <p class="p-2 flex-grow-1 bd-highlight">${itemList.idItem}</p>
                  <input class="form-check-input mt-2" type="checkbox" name="inlineRadioOptions" id="inlineRadio1"
                    value="option1" disabled ${opCheck}>
                </div> <!-- end --> `;

      }
      lista += `
            </div>
          </div>
        </div>
      </div>
    </div><!-- end first card -->

      `;

      // update modal 
     // lista +=  ordineModalUpdate(i);

      ordiniList[i] = {
        id: cart.idOrdine,
        titolo: cart.titolo,
        item: cart.items
      }
      console.log(ordiniList[i]); //debug
    }
    
    $("#displayCloneList").append(lista);
    $("#displayCloneList").on('click',  function(e){
      let item = e.value;
      console.log(item);
    });
  
    //$("#displayCloneList").append();
   // $("#displayCloneList").append();
  });
});

function ordineHead(i, cart) {
  return `
      <!-- single container-->
      <div class="col d-flex align-items-stretch bg-transparent" id="cloneList${i}">
        <div class="card border border-0 bg-transparent" style="width: 30rem;">
          <!-- Example split danger button -->
          <div class="card   mb-4 " id="backImg">
            <!-- main to manipulate  -->
            <div class="card-header d-flex justify-content-between">
              <div class="pt-2 ">${cart.titolo}</div>
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

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML =  `button <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    class="bi bi-clipboard" viewBox="0 0 16 16">
    <path
      d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
    <path
      d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
  </svg> `;
    button.className = 'btn-styled';
  
    button.onclick = function() {
        console.log('hh');
    };
  
    var container = document.getElementById('provadelC');
    container.appendChild(button);
  }, false);











  

function ordineHeader(i, cart) {
  let ordineHeader = '';
  ordineHeader += `
  <!-- single container-->
  <div class="col d-flex align-items-stretch bg-transparent" id="cloneList${i}">
    <div class="card border border-0 bg-transparent" style="width: 30rem;">
      <!-- Example split danger button -->
      <div class="card   mb-4 " id="backImg">
        <!-- main to manipulate  -->
        <div class="card-header d-flex justify-content-between">
          <div class="pt-2 ">${cart.titolo}</div>
          <div class="btn-group dropstart"> 
          <button class="btn border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
              </path>
            </svg>
          </button>
          <ul class="dropdown-menu" id="dropdown"> 
          <a href="#" class="dropdown-item duplica${i}" onclick="duplicaFun(${i})">Duplica <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /> </svg></a>
          `;
  return ordineHeader;
} // end ordineHeader ()







ordine.innerHTML = '';
      ordine += ordineHeader(i, cart);
      //ordine += ordineUlDuplicate(i);

      ordine += `</ul></div></div><div class="card-body " data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}"> `;
      ordine += ordineCenter();
      ordine += ordineEnd();



















function duplicaFun(i){
  alert(`fatto ${i}`);
  let duplicate = document.getElementById(`cloneList${i}`);
  
  alert(duplicate);
}

function ordineCenter() {
  return `   
  <div class="d-flex justify-content-center ">
    <img src="img/icon/almond.png" width="30px" height="30px"
      class="p-2 bd-highlight" style="background-color: grey;">
    <p class="p-2 flex-grow-1 bd-highlight">item</p>
    <input class="form-check-input mt-2" type="checkbox" name="inlineRadioOptions" id="inlineRadio1"
      value="option1" disabled >
  </div> <!-- end --> `;
}

function ordineEnd() {
  return `
          </div>
        </div>
      </div>
    </div>
  </div><!-- end first card -->

`;
} // end ordineCenter ()





























let ordine = '';
$(document).ready(function () {
  let i = 0;
  let ordineList = [];
  $.get('http://localhost:8080/api/ordini', function (response) {
    // let res = JSON.parse(response);
    // console.log(res);
    console.log(response);
    for (cart of response) {
      i++;
      ordine.innerHTML = '';
      ordine += ordineHeader(i, cart);
      //ordine += ordineUlDuplicate(i);
      ordine += `</ul> </div></div><div class="card-body " data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}"> `;
      ordine += ordineCenter();
      ordine += ordineEnd();
      ordineList[i] = {
        id: cart.idOrdine,
        titolo: cart.titolo,
      } // end   ordineList[i]

    } // end cart for of loop


    $("#displayCloneList").append(ordine); // display ordine

  }); // end  $.get('http://localhost:8080/api/ordini')
}); // end $(document).ready



function ordineHeader(i, cart) {
  let ordineHeader = '';
  ordineHeader += `
  <!-- single container-->
  <div class="col d-flex align-items-stretch bg-transparent" id="cloneList${i}">
    <div class="card border border-0 bg-transparent" style="width: 30rem;">
      <!-- Example split danger button -->
      <div class="card   mb-4 " id="backImg">
        <!-- main to manipulate  -->
        <div class="card-header d-flex justify-content-between">
          <div class="pt-2 ">${cart.titolo}</div>
          <div class="btn-group dropstart"> 
          <button class="btn border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
              </path>
            </svg>
          </button>
          <ul class="dropdown-menu" id="dropdown"> 
          <a href="#" class="dropdown-item duplica${i}" onclick="duplicaFun(${i})">Duplica <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /> </svg></a>
          `;
  return ordineHeader;
} // end ordineHeader ()


function duplicaFun(i){
  alert(`fatto ${i}`);
  let duplicate = document.getElementById(`cloneList${i}`);
  return duplicate;
  console.log('duplicate');
}

function ordineCenter() {
  return `   
  <div class="d-flex justify-content-center ">
    <img src="img/icon/almond.png" width="30px" height="30px"
      class="p-2 bd-highlight" style="background-color: grey;">
    <p class="p-2 flex-grow-1 bd-highlight">item</p>
    <input class="form-check-input mt-2" type="checkbox" name="inlineRadioOptions" id="inlineRadio1"
      value="option1" disabled >
  </div> <!-- end --> `;
}

function ordineEnd() {
  return `
          </div>
        </div>
      </div>
    </div>
  </div><!-- end first card -->

`;
} // end ordineCenter ()

