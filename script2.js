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
let lstpanier = [];
let lstserveur = [];

mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", 
  "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

for(var j = 0; j < 10; j++) {
  var date = new Date();
  date.setDate(date.getDate() + j);
  select.options[select.options.length] = new Option([date.getDate(), mois[date.getMonth()], date.getFullYear()].join(' '), date.toISOString());
}
// on load
let items = [
    {
        quantité: 0,
        nom: "poutine",
        image: src = "resources/POUTINE.jpg",
        prix: 15.49
    },
    {
        quantité: 0,
        nom: 'combo',
        image: src = "resources/COMBO.jpg",
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

function add_Combo(){
  
}