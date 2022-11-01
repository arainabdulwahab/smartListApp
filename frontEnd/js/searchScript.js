$(document).ready(function () {
    
  $("#createProductWithItem").click(function() {
        
    $.get('http://localhost:8080/api/prodotti', function (response) {
        stringifyJson = JSON.stringify(response);
        pareJson = JSON.parse(stringifyJson);

        console.log(pareJson); //debug

        for (recpie of pareJson) {
           
        } /* end for of */
    });




    });
});

const inputAdd = document.getElementById('createItemToAdd');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
  // delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'delete';
  deleteButton.id = 'done';

 
  // image
  let imageSearch = document.createElement('img');
  imageSearch.src = 'img/.jpg'; 
  imageSearch.width = '40';
  // input 
  let inputItem = document.createElement('input');
  inputItem.type = 'search';
  inputItem.placeholder = 'noe';
 // inputItem.onclick = search();

  // match list div 
  let matchList = document.createElement('div');
  matchList.id = 'matchList'
  // add checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = "value";
  checkbox.id = "id";


  // append all item
  inputAdd.append(deleteButton,  imageSearch, inputItem, checkbox,matchList);

  deleteButton.addEventListener('click', () => {
    console.log('delete done');
  });

   //function search(){ inputItem.addEventListener('keyup', () => searchStates(inputItem.value));  console.log(inputItem.value); };
 
});