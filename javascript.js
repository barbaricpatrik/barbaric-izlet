let imeOsobe = prompt("Unesite ime: ");
let cijenaJedneUlaznice = prompt("Unesite cijenu ulaznice: ");
let ukupanBrojUlaznica = prompt("Unesite broj ulaznica: ");
let budzetIzleta = prompt("Unesite budžet: ");
//^^Unos podataka^^



let ukupnaCijena = cijenaJedneUlaznice * ukupanBrojUlaznica;
let ostatakBudžeta = budzetIzleta - ukupnaCijena;
let dovoljnoNovca;
let tocanIznos;
//^^Izračun^^


if (budzetIzleta >= ukupnaCijena) {
    dovoljnoNovca = true;
}
else {
    dovoljnoNovca = false;
}

if(budzetIzleta === ukupnaCijena) {
    tocanIznos = true;
}
else if(budzetIzleta !== ukupnaCijena) {
    tocanIznos = false;
}
//^^Usporedbe^^

let nastavakPlaniranja = confirm("Zelite li nastaviti planiranje?");

alert(
    "Ime osobe: " + imeOsobe + "\n ukupanTrošak: " + ukupnaCijena + "\npreostaliIznos: " + ostatakBudžeta + "\nDovoljno novca: " + dovoljnoNovca + "\nTocan iznos: " + tocanIznos + "\nNastavak planiranja: " + nastavakPlaniranja

);