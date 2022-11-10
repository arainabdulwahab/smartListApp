/*********** FUNZIONALITA' DELLA PAGINA userpage.html ******************/

$(document).ready(function () {

  // impostazioni iniziali
  let JWTHeader = {
    Authorization: 'Bearer ' + $.cookie('jwt')
  };

  let baseURL = 'http://localhost:8080';

  let token = $.cookie('jwt');
  console.log('token: ' + token);

  if (token !== '') {
    let email = extractPayload(token);
    let params = {
      email: email
    };
    let jsonParams = JSON.stringify(params);

    // estrae le liste dell'utente
    $.ajax({
      url: `${baseURL}/api/ordini/utente/email`,
      headers: JWTHeader,
      contentType: 'application/json;charset=UTF-8',
      type: "POST",
      data: jsonParams,
      success: function (ordini) {
        //console.log(ordini); //debug
        for (let i = 0; i < ordini.length; i++) {
          let lista = ordini[i];
          //console.log(lista); //debug
          let ordine = ordineHeader(i, lista[0].titolo);
          // let items = lista[0];
          for (item of lista.slice(0, 3)) {
            ordine += ` 
                <div class="d-flex justify-content-center">
                  <img src="${item.img}" width="35px" height="35px"
                    class="p-2 bd-highlight listItemHover" style="background-color: #f2f2f2;">
                  <p class="p-2 flex-grow-1 bd-highlight  listItemHover">${item.genere}</p>
                  <input class="form-check-input mt-2 listItemHover" type="checkbox" name="inlineChe kOptions" id="inlineCheckId"
                    value="option1"`;
            if (item.spunta == 1) {
              ordine += ` checked disabled`;
            }
            ordine += `></div> <!-- end -->`;


            /******* qui bisogna estrarre il colore impostato dall'utente */
          } /* end for interno */
          ordine +=   `<div class="text-center p-0 m-0">
                        <div class="rotateDots">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                        </div>
                      </div> `;
          ordine += ordineEnd();
          ordine += sfondoModal(i);
          ordine += coloreModal(i);
          ordine += shareBtnModal(i);
          ordine += updateModal(i, lista);
          $("#displayCloneList").append(ordine); // display ordine
        } /* end for esterno */
      } /* end success */
    }); /* end $.ajax */

  } else {
    window.location.replace("/index.html"); //accesso vietato a userPage
  }


  // Gestione dropdown e navbar collapsed
  $(window).on('resize', function () {
    var win = $(this); //this = window
    if (win.width() < 992) {
      $('#navDropdown').removeClass('dropstart');
    } else {
      $('#navDropdown').addClass('dropstart');
    }
  });

  // Logout
  $('#logoutBtn').click(function () {
    $.cookie('jwt', '');
    JWTHeader = updateHeader();
  });



  // Gestione sfondo ordine
  $(document).on('click', '.color-ordine', function (event) {
    selectedImage = $(event.target);
    let idSfondo = selectedImage.attr("data-sfondo");
    let ordine = parseInt(selectedImage.attr("data-ordine") + 1);
    let params = {
      idSfondo: idSfondo
    }
    let jsonParams = JSON.stringify(params);
    console.log(jsonParams); //debug
    $.ajax({
      url: `${baseURL}/api/ordine/sfondo_update/${ordine}`,
      headers: JWTHeader,
      contentType: 'application/json;charset=UTF-8',
      type: "PUT",
      data: jsonParams,
      success: function (response) {
        alert('colore sfondo cambiato');
        let id = '#cloneList' + selectedImage.attr('data-ordine');
        let selector = id + ' div';
        let filename = 'img/wallpaper/wallpaper_liste/wallpaper-list-' + idSfondo + '.webp';
        $(selector).css('background-image', 'url(' + filename + ')');




      },
      error: function (response) {
        alert('qualcosa non ha funzionato');
      }
    })

  });
});




/* end $(document).ready */

