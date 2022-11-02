$(document).ready(function () {
    
  $("#createProductWithItem").click(function() {
        
    $.get('http://localhost:8080/api/prodotti', function (response) {
        stringifyJson = JSON.stringify(response);
        pareJson = JSON.parse(stringifyJson);

        console.log(pareJson); //debug

        for (prodotto of pareJson) {
           
        } /* end for of */
    });
    });
});

const inputAdd = document.getElementById('createItemToAdd');
const addButton = document.getElementById('addButton');


let mainContainer = document.createElement('div');
mainContainer.className = '';

addButton.addEventListener('click', () => {
  let div = document.createElement('div');
  div.className = "d-flex justify-content-center";
  let singeItem  = `   
  
    <input class="form-check-input mt-2" type="checkbox" name="inlineRadioOptions" id="inlineRadio1"
      value="option1" disabled >
  </div> <!-- end --> `;
  // delete button
  let deleteButton = document.createElement('div');
  deleteButton.className = 'm-1 ps-2 pe-2 pt-0 pb-0';
  deleteButton.innerHTML = 'X';
  deleteButton.style.border = "1px solid black";
  deleteButton.style.borderRadius = '40%';


 
  // image
  let imageSearch = document.createElement('img');
  imageSearch.src = 'img/icon/air-fryer.png'; 
  imageSearch.width = '40';
  imageSearch.height = '30';
  imageSearch.className = "p-2 bd-highlight";
  imageSearch.style.background = "grey";

  // input 
  let inputItem = document.createElement('input');
  inputItem.type = 'search';
  inputItem.placeholder = 'noe';
  inputItem.className = 'p-2 flex-grow-1 bd-highlight';
  inputItem.onclick = search();


  // match list div 
  let matchList = document.createElement('div');
  matchList.id = 'matchList';
 // matchList.className = 'btn btn-secondary';
 //<button type="button" class=""></button>
  matchList.setAttribute('data-bs-container' ,'body');
  matchList.setAttribute('data-bs-toggle' ,'popover');
  matchList.setAttribute('data-bs-placement' ,'bottom');
  matchList.setAttribute('data-bs-content' ,'Bottom popover');


  // add checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = "value";
  checkbox.id = "id";

  
  // input  quantita
  let inputItemQuntita = document.createElement('input');
  inputItem.type = 'search';
  inputItem.placeholder = 'noe';
  inputItem.className = 'p-2 bd-highlight';
 // inputItem.onclick = search();

   
  // input  prezzo
  let inputItemPrezzo = document.createElement('input');
  inputItem.type = 'search';
  inputItem.placeholder = 'noe';
  inputItem.className = 'p-2 bd-highlight';
 // inputItem.onclick = search();

  // append all item
  inputAdd.append(div, deleteButton, imageSearch, inputItem, checkbox, inputItemQuntita, inputItemPrezzo, matchList);

  deleteButton.addEventListener('click', () => {
    console.log('delete done');
  });
    
  inputItemQuntita.addEventListener('focus', () => {
    console.log(inputItemQuntita.value);
  });
    
  inputItemPrezzo.addEventListener('focus', () => {
    console.log(inputItemPrezzo.value);
  });
  function search(){ inputItem.addEventListener('keyup',() =>{
    console.log(inputItem.value);
  })};
 
});