// declarations
let notpopup = document.querySelector(".not-pop-up")
let onload = document.querySelector(".onload");
let typecommande = document.querySelector(".type-commande")
let emportercommande = document.querySelector(".emporter-commande")
let livraisoncommande = document.querySelector(".livraison-commande")
let btnemporter = document.querySelector(".emporter")
let btnlivraison = document.querySelector(".Livraison")
let btnrideau = document.querySelector("#rideau")
let btnbank = document.querySelector("#bank")
let btnKanata = document.querySelector("#Kanata")
let btnadd_poutine = document.querySelector(".add_poutine")
let btnadd_combo = document.querySelector(".add_combo")
let select = document.getElementById("dateSelector");
let listStorage = [];
let cartLists = [];
let listPanier = document.getElementById('list-panier');
let ptotal = document.querySelector('#total');
let ligneprix = document.querySelector('.prix');

mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
  "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

for (var j = 0; j < 10; j++) {
  var date = new Date();
  date.setDate(date.getDate() + j);
  select.options[select.options.length] = new Option([date.getDate(), mois[date.getMonth()], date.getFullYear()].join(' '), date.toISOString());
}
// on load
let items = [
  {
    quantité: 0,
    nom: "Poutine",
    // image: src = "resources/POUTINE.jpg",
    prix: 15.49
  },
  {
    quantité: 0,
    nom: 'Combo',
    // image: src = "resources/COMBO.jpg",
    prix: 20.99
  }
]

// functions
function openCommande() {
  onload.style.visibility = "hidden";
  typecommande.style.visibility = "visible";
}
function close_commande() {
  onload.style.visibility = "hidden";
  typecommande.style.visibility = "hidden";
  emportercommande.style.visibility = "hidden";
  livraisoncommande.style.visibility = "hidden";
  notpopup.style.opacity = "100%";
}

function pourEmporter() {
  notpopup.style.opacity = "50%";
  typecommande.style.visibility = "hidden";
  emportercommande.style.visibility = "visible";
  livraisoncommande.style.visibility = "hidden";
}
function pourLivraison() {
  typecommande.style.visibility = "hidden";
  emportercommande.style.visibility = "hidden";
  livraisoncommande.style.visibility = "visible";
  btnrideau.style.border = "0.0625em solid black";
  btnbank.style.border = "0.0625em solid black";
  btnKanata.style.border = "0.0625em solid black";
}

function confirmer() {
  notpopup.style.opacity = "100%";
  emportercommande.style.visibility = "hidden";
  livraisoncommande.style.visibility = "hidden";
}

function rideau() {
  if (btnrideau.style.border == "0.0625em solid black")
    btnrideau.style.border = "0.1875em solid red";
  else if (btnrideau.style.border = "0.1875em solid red")
    btnrideau.style.border = "0.0625em solid black";
  btnbank.style.border = "0.0625em solid black";
  btnKanata.style.border = "0.0625em solid black";
}
function bank() {
  btnrideau.style.border = "0.0625em solid black";
  if (btnbank.style.border == "0.0625em solid black")
    btnbank.style.border = "0.1875em solid red";
  else if (btnbank.style.border = "0.1875em solid red")
    btnbank.style.border = "0.0625em solid black";
  btnKanata.style.border = "0.0625em solid black";
}
function Kanata() {
  btnrideau.style.border = "0.0625em solid black";
  btnbank.style.border = "0.0625em solid black";
  if (btnKanata.style.border == "0.0625em solid black")
    btnKanata.style.border = "0.1875em solid red";
  else if (btnKanata.style.border = "0.1875em solid red")
    btnKanata.style.border = "0.0625em solid black";
}

function AjouterAuPanier(i) {
  cartLists = (cartLists == null) ? cartLists = [] : cartLists;
  if (existe(i) == -1) {
    let item = items[i];
    item.quantité = 1;
    cartLists.push(item);
  }
  else {
    cartLists[existe(i)].quantité++;
  }
  localStorage.setItem('cartLists', JSON.stringify(cartLists));
  RemplirPanier();
}

function existe(i) {
  let id = -1;
  if (cartLists.length > 0)
    for (let j = 0; j < cartLists.length; j++) {
      if (items[i].nom == cartLists[j].nom) {
        id = j;
      }
    }
  return id;
}

function RemplirPanier() {
  listStorage = JSON.parse(localStorage.getItem('cartLists'));
  listPanier.innerHTML = "";
  if (listStorage.length > 0) {
    listStorage.forEach(value => {
      if (value != null) {
        let listItem = document.createElement('div');
        listItem.setAttribute('class', 'list-group-item');
        listItem.innerHTML = `
            <div id="${value.nom}" class = "quant">
            <div class="row1">
                    <h5 class="name">${value.nom}</h5>
                    <h6 class="price">${value.prix.toString()}$</h6>
                    </div>
                    <div class="row2">
                    <div class="updown">
                    <button class = "quantit" onclick="moinsQuantité(${value.index})">-</button>
                    <div class="count">${value.quantité}</div>
                    <button class = "quantit" onclick="plusQuantité(${value.index})">+</button>
                    </div>
                    <button class = "delete" onclick="supprimer(${value.index})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                    </div>
                    <hr>
            </div>`;
        listPanier.appendChild(listItem);
      }
    })
  }
  else
    listPanier.innerHTML = "<p>Your order is empty</p>";
  prix()
}

function moinsQuantité(index) {
  listStorage = JSON.parse(localStorage.getItem('cartLists'));
  let i = existe(index);
  let quant = cartLists[i].quantité - 1;
  if (quant > 0)
    cartLists[i].quantité--;
  localStorage.setItem('cartLists', JSON.stringify(cartLists));
  RemplirPanier();
}

function plusQuantité(index) {
  cartLists = JSON.parse(localStorage.getItem('cartLists'));
  let i = existe(index);
  cartLists[i].quantité++;
  localStorage.setItem('cartLists', JSON.stringify(cartLists));
  RemplirPanier();
}

function supprimer(index) {
  listStorage = JSON.parse(localStorage.getItem('cartLists'));
  let i = cartLists.findIndex(e => { return e.index == index });
  cartLists.splice(i, 1);
  localStorage.setItem('cartLists', JSON.stringify(cartLists));
  RemplirPanier();
}

function prix() {
  let prixTotal = 0;
  let miniprix = 0;
  listStorage = JSON.parse(localStorage.getItem('cartLists'));
  if (listStorage.length > 0) {
    listStorage.forEach(value => {
      if (value != null) {
        prixTotal += value.prix * value.quantité;
        miniprix += value.prix * value.quantité;
        // ligneprix.innerHTML = miniprix;
        miniprix = 0;
      }
    })
  }
  // soustotal.innerHTML = prixTotal;
  // tax.innerHTML = prixTotal * 13 / 100;
  ptotal.innerHTML = prixTotal + prixTotal * 13 / 100;
}