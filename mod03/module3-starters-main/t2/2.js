'use strict';

// etsitään <ul> määritys html sivulta
const ulElem = document.querySelector('#target');

// tehdään eka li-elementit
let li1Elem = document.createElement('li');
// tehtään tekstiElementti
let text1Elem = document.createTextNode('First item');
// lisätään li-elementin sisään eli lapseksi äsken luotu teksti-elementti
li1Elem.appendChild(text1Elem);
// TODO: tee loput tarvittavat elementit

// lisätään ul-elementin sisään luodut li-elementit
ulElem.appendChild(li1Elem);

// TODO: lisää css-määritys




