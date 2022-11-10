$(document).ready(function () {
// impostazioni iniziali
let JWTHeader = {
    Authorization: 'Bearer ' + $.cookie('jwt')
  };
  
    $("#showProduct").click(function () {
        $.get('http://localhost:8080/api/prodotti', function (response) {
            console.log(response); //debug
            let prodotto = '';
            prodotto += `<div class="row row-cols-1 row-cols-md-6 g-4">        `;
            for (singoloProdotto of response) {
                prodotto += prodottiShow(singoloProdotto);
            } /* end for of */
            prodotto += `</div>`;
            $("#showProdotti").append(prodotto);
        });
    });

    $("#showWallpaper").click(function () {
        $.ajax({
            url: `http://localhost:8080/api/sfondo_utenti`,
            headers: JWTHeader,
            contentType: 'application/json;charset=UTF-8',
            type: "GET",
            success: function (response) {
                let wallp = '';
                wallp += `<div class="row row-cols-1 row-cols-md-6 g-4">        `;
            for (singleWall of response) {
                //console.log(singleWall);
                wallp += ShowWallpaper(singleWall);
            } /* end for of */
            wallp += `</div>`;
            $("#ShowWallp").append(wallp);

            },
            error: function () {
                alert('accesso non autorizzato');
            } 
       });
    });


    $("#showAllUser").click(function () {
        $.ajax({
            url: `http://localhost:8080/api/admin/utenti`,
            headers: JWTHeader,
            contentType: 'application/json;charset=UTF-8',
            type: "GET",
            success: function (response) {
                let user = '';
                let i = 0;
                user += `<table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>      `;
            for (singleUser of response) {
                i ++;
                console.log(singleUser);
                user += ShowUser(i, singleUser);
            } /* end for of */
            user += `
                    </tbody>
                </table>`;
            $("#showUser").append(user);

            },
            error: function () {
                alert('accesso non autorizzato');
            } 
       });
    });
});


    
  

function ShowUser(i, singleUser){
    return `
    
    <tr>
      <th scope="row">${i}</th>
      <td>${singleUser.cognome}</td>
      <td>${singleUser.nome}</td>
      <td>${singleUser.email}</td>
    </tr>
  `;
}
function ShowWallpaper(singleWall){
    return `
    
    <div class="col">
      <div class="card border-0 text-center" style="width: 10rem; ">
          <img src="${singleWall.uri}" class="card-img-top" alt="..." width="90px" height="120px">
      </div>
    </div>
  `;
}


function prodottiShow(singoloProdotto) {
    return `
    
  <div class="col">
    <div class="card border-0 text-center" style="width: 10rem; ">
        <img src="${singoloProdotto.immagine}" class="card-img-top" alt="..." width="90px" height="120px">
        <div class="card-body">
            <h5 class="card-title">${singoloProdotto.genere}</h5>
        </div>
    </div>
  </div>
`;
}
let showProductBtn = document.getElementById('showProduct');
let showAllUserBtn = document.getElementById('showAllUser');
let showWallpaperBtn = document.getElementById('showWallpaper');
let createRecipeBtn = document.getElementById('createRecipe');

let showCreateRecipe = document.getElementById('showCreateRecipe');
let showProdotti = document.getElementById('showProdotti');
let showUser = document.getElementById('showUser');
let ShowWallp = document.getElementById('ShowWallp');

showAllUserBtn.addEventListener('click', function(){
    showProdotti.style.display = 'none';
    ShowWallp.style.display = 'none';
    showCreateRecipe.style.display = 'none';
    showAllUserBtn.style.display = 'block';
});


showProductBtn.addEventListener('click', function(e){
  e.preventDefault();
  showProdotti.style.display = 'block';
  showUser.style.display = 'none';

});


