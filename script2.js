// declarations
let notpopup = document.querySelector(".not-pop-up")
let onload = document.querySelector(".onload");
let typecommande = document.querySelector(".type-commande")
let emportercommande = document.querySelector(".emporter-commande")
let livraisoncommande = document.querySelector(".livraison-commande")
let btnemporter = document.querySelector(".emporter")
let btnlivraison = document.querySelector(".Livraison")

// on load
// commande.style.visibility = "visible"

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
}

function confirmer() {
  notpopup.style.opacity = "100%";
  emportercommande.style.visibility = "hidden";
  livraisoncommande.style.visibility = "hidden";
}