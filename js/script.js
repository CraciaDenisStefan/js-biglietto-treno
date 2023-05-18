let km_da_fare = parseInt(prompt(`Quanti km deve percorre?`));

let eta = parseInt(prompt(`Quanti anni ha?`));

let prezzo_km = (0.21);

let prezzo = (km_da_fare * prezzo_km); 

if(eta <= 18) {
     sconto_20 =  prezzo * 20 / 100 ;
     prezzo = (prezzo - sconto_20);
}else if(eta >= 65) {
    sconto_40 =  prezzo * 40 / 100 ;
    prezzo = (prezzo - sconto_40);
}
   
document.getElementById(`info`).innerHTML = (prezzo).toFixed(2);