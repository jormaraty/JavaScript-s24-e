'use strict';

// etsitään tarvittavat elementit html-sivulta
const imgElem = document.querySelector('#target');
const pElem = document.querySelector('#trigger');

// funktio, joka vaihtaa kuvan A -> B
function hiiriPaalle(evt) {
    imgElem.src = "img/picB.jpg";
}

// tapahtumankuuntelija kappaleelle, kuuntelee hiiren tulemista päälle
pElem.addEventListener('mouseover', hiiriPaalle);

// TODO: käsittele tilanne, kun hiiri menee pois kuvan päältä
