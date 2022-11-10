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
   
    console.log(gener);
    matchList.innerHTML = '';
  });
  addButton.addEventListener('click', function(){
    quantitaInput.value
  })
}
search.addEventListener('keyup', () => searchStates(search.value));
console.log(search)


















