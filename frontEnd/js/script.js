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

