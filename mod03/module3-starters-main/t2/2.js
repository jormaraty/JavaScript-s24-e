'use strict';

// etsitään <ul> määritys html sivulta
const ulElem = document.querySelector('#target');

// tehdään eka li-elementti
let li1Elem = document.createElement('li');
// tehtään tekstiElementti
let text1Elem = document.createTextNode('First item');
// lisätään li-elementin sisään eli lapseksi äsken luotu teksti-elementti
li1Elem.appendChild(text1Elem);
// toinen li-elementti, Huomaa lyhyempi tapa!
const li2Elem = document.createElement('li');
li2Elem.textContent = 'Second item';        // teksti suoraan li-elementille!

// lisätään ul-elementin sisään luodut li-elementit
ulElem.appendChild(li1Elem);
ulElem.appendChild(li2Elem);

// TODO: lisää css-määritys




