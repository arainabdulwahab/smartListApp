//caricamento di tutte le liste per l'utente
$(document).ready(function () {
  let i = 0;
  let ordiniList = [];
  $.get('http://localhost:8080/api/ordini', function (response) {
        console.log(response);
  



});

//dichiarazione variabili globali per visualizzare quantità e prezzo - DA IMPLEMENTARE
let showQuantity = false;
let showPrice = false;

// button clone list
function cloneTodo(){
    let node = document.getElementById('cloneList');
    let clone = node.cloneNode(true);
    document.getElementById("displayCloneList").append(clone);
  }


// button show/hide quantity - DA IMPLEMENTARE
function hideShowQuantity(){
    let quantity = document.getElementById('quantitaListaAperta');

    if (showQuantity == false){
    //  append con show
      showQuantity = true;
    } else {
    //  riscrivo tutta la classe come di default
    }

}

// button show/hide price - DA IMPLEMENTARE
function hideShowPrice(){


}  