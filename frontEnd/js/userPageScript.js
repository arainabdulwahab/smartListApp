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
        console.log(ordini); //debug
        for (let i = 0; i < ordini.length; i++) {
          let lista = ordini[i];
          console.log(lista); //debug
          let ordine = ordineHeader(i, lista[0].titolo);
          for (item of lista.slice(0,3)) {
            ordine += ` 
                <div class="d-flex justify-content-center " >
                  <img src="${item.img}" width="35px" height="35px"
                    class="p-2 bd-highlight" style="background-color: #f2f2f2;">
                  <p class="p-2 flex-grow-1 bd-highlight">${item.genere}</p>
                  <input class="form-check-input mt-2" type="checkbox" name="inlineChe kOptions" id="inlineCheckId"
                    value="option1"`;
            if (item.spunta == 1) {
              ordine += ` checked disabled`;
            }
            ordine += `></div> <!-- end -->`;
            //ordine += ordineEnd();
            ordine += colorModal(i);
            ordine += sfondoModal(i);
            ordine += shareBtnModal(i);
            ordine += updateModal(i);

            /******* qui bisogna estrarre il colore impostato dall'utente */
          } /* end for interno */
          $("#displayCloneList").append(ordine); // display ordine
        } /* end for esterno */
      } /* end success */
    }); /* end $.ajax */

  } else {
    window.location.replace("/index.html"); //accesso vietato a userPage
  }
}); /* end $(document).ready */

// Gestione dropdown e navbar collapsed
$(window).on('resize', function(){
  var win = $(this); //this = window
  if (win.width()< 992) { 
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

// Gestione colori ordine
/*
$('.color-ordine').click(function(event) {
  let selectedColor = event.target;
  let color = selectedColor.attr("data-sfondo");
  let ordine = selectedColor.attr("data-ordine");
  let params = {
    color: color
  }
  let jsonParams = JSON.stringify(params);
  console.log(jsonParams); //debug
  $.ajax({
    url: `${baseURL}/api/colore_ordine/update/${ordine}`,
    headers: JWTHeader,
    contentType: 'application/json;charset=UTF-8',
    type: "PUT",
    data: jsonParams,
    success: function (response) {
      alert('colore sfondo cambiato');
    },
    error: function(response) {
      alert('qualcosa non ha funzionato');
    }
  });

});
*/

// Gestione sfondo ordine
$('.sfondo-ordine').click(function(event) {
  let selectedColor = event.target;
  let color = selectedColor.attr("data-sfondo");
  let ordine = selectedColor.attr("data-ordine");
  let params = {
    color: color
  }
  let jsonParams = JSON.stringify(params);
  console.log(jsonParams); //debug
  $.ajax({
    url: `${baseURL}/api/colore_ordine/update/${ordine}`,
    headers: JWTHeader,
    contentType: 'application/json;charset=UTF-8',
    type: "PUT",
    data: jsonParams,
    success: function (response) {
      alert('colore sfondo cambiato');
    },
    error: function(response) {
      alert('qualcosa non ha funzionato');
    }
  });

});
