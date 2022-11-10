function updateHeader() {
  return {
    Authorization: 'Bearer ' + $.cookie('jwt')
  };
}





let createBtn = document.getElementById('buttonCreate');
let search = document.getElementById('prodottoSearch');
let matchList = document.getElementById('match-list');
let addButton = document.getElementById('addButton');
let quantitaInput = document.getElementById('quantitaInput');
let prezzoInput = document.getElementById('prezzoInput');
let createItemToAdd = document.getElementById('createItemToAdd');

let  searchStates = async searchText => {
  let res = await fetch('http://localhost:8080/api/prodotti');
  //console.log(res);
  let states = await res.json();
 //console.log(states);
  let matches = states.filter(state => {
    let regex = new RegExp(`${searchText}`, 'gi');
    return state.genere.match(regex) ;
  });
  console.log(matches);
  if(searchText.length === 0 ){
    matches = [];
    matchList.innerHTML = '';
  }
    outputHTML(matches);
};



let outputHTML = matches =>{
  let img;
  let gener;
  if(matches.length > 0 ){
    let html = matches.map(match => `
    <div class="card card-body mb-1"  >
      <img src="${match.immagine}" width="40px" height="40px">
      <h6>${match.genere}</h6>
    </div>`
    )
    .join('');
    matchList.innerHTML = html;  
  }
  
  img = matches.map(match => match.immagine);
  gener = matches.map(match => match.genere);
  console.log('img = ' + img + '....  gener = ' + gener);
  let newValGenere;
  matchList.addEventListener('click', function(){
    newValGenere = search.value = gener[0];
   
   // console.log(gener);
    matchList.innerHTML = '';
  });
  addButton.addEventListener('click', function(){
    let testDiv = document.createElement('div');

    let newDiv =  '';
    newDiv +=`<div class="mt-1 mb-3 d-flex justify-content-between" id="itemToShow">

      <div class=" p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>

      <div class=" p-2">
        <img src="${img}" width="30px" height="30px" class="p-2 bd-highlight"
          style="background-color: grey;">
      </div>

      <div class="p-2">
        <p>${newValGenere}</p>
      </div>

      <div class=" bd-highlight p-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      </div>

      <div class="p-2">
        <p>${quantitaInput.value}</p>
      </div>

      <div class="p-2" style="width: 10%;">
        <p>${prezzoInput.value}</p>
      </div>
    </div> <!-- end righa-->`;
    testDiv.innerHTML = newDiv;
  
    createItemToAdd.append(testDiv);
  })
}
search.addEventListener('keyup', () => searchStates(search.value));
console.log(search)


















