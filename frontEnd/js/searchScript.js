function updateHeader() {
  return {
    Authorization: 'Bearer ' + $.cookie('jwt')
  };
}
$(document).ready(function(){
  $.getJSON('http://localhost:8080/api/prodotti', function (data){

    console.log(data);
  });
  
})












































// const inputAdd = document.getElementById('createItemToAdd');
// const addButton = document.getElementById('addButton');
// const searchProdottoBar = document.getElementById('prodottoSearch');

// // const searchStates = async searchText => {
// //   const res = await fetch('http://localhost:8080/api/prodotti');
// //   const states = await res.json();
// //   console.log(states);
// // }

// // let matches = states.filter(state => {
// //   const regex = new RegExp(`⌃${searchText}`, 'gi');

// // });



// searchProdottoBar.addEventListener('input', () => searchStates(search.value));



















































































/*
let prodotto =[];
$(document).ready(function () {
    
  $("#prodottoSearch").click(function() {
        
    $.get('http://localhost:8080/api/prodotti', function (response) {
        // stringifyJson = JSON.stringify(response);
        // let parseJson = JSON.parse(stringifyJson);

        console.log(response);
    });
    });
});






























let mainContainer = document.createElement('div');
mainContainer.className = '';

addButton.addEventListener('click', () => {
  let div = document.createElement('div');
  div.className = "mt-1 mb-3 d-flex justify-content-between";
  
  // delete button
  let deleteButton = document.createElement('div');
  deleteButton.innerHTML = 'X';


 
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

  inputAdd.append(div, deleteButton, imageSearch, inputItem, checkbox, inputItemQuntita, inputItemPrezzo);

  deleteButton.addEventListener('click', () => {
    console.log('delete done');
  });
    
  inputItemQuntita.addEventListener('focus', () => {
    console.log(inputItemQuntita.value);
  });
    
  inputItemPrezzo.addEventListener('focus', (e) => {
    console.log(inputItemPrezzo.value);
  });
  function search(){ inputItem.addEventListener('keyup',(e) =>{
    const target = e.target.value;
    const searched = product.filter(pro => {
      return pro.genere.includes(target); 
    });
    console.log(searched)
  })};





  
  // match list div 
  let matchList = document.createElement('div');
  matchList.id = 'matchList';
 // matchList.className = 'btn btn-secondary';
 //<button type="button" class=""></button>
  matchList.setAttribute('data-bs-container' ,'body');
  matchList.setAttribute('data-bs-toggle' ,'popover');
  matchList.setAttribute('data-bs-placement' ,'bottom');
  matchList.setAttribute('data-bs-content' ,'Bottom popover');
  return matchList;

 
 
});

*/