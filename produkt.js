// Hallo world
var ProduktEshopuA = /** @class */ (function () {
    function ProduktEshopuA() {
    }
    return ProduktEshopuA;
}());
var ProduktEshopuB = /** @class */ (function () {
    function ProduktEshopuB() {
    }
    return ProduktEshopuB;
}());
var Clanek = /** @class */ (function () {
    function Clanek() {
    }
    return Clanek;
}());
function zobrazKartu(produkt, div) {
    var element = document.getElementById(div);
    var polozky = ['jmeno', 'popis', 'skladem', 'cena'];
    var output_str = '';
    //polozky.forEach(polozka => console.log(polozka));
    //polozky.forEach(myForeachFunction);
    // function myForeachFunction(item: string, index: number) {...}
    polozky.forEach(function (item, index) {
        if (item == 'jmeno') { //or if (index == 0){
            output_str += "<h3 class=\"header\">" + item + ": " + produkt[item] + " lala</h3>";
        }
        else {
            output_str += "<p class=\"" + item + "\">" + item + ": " + produkt[item] + "</p>";
        }
    });
    element.innerHTML = output_str;
}
function zobrazHodnoceni(obj, div) {
    var element = document.getElementById(div);
    var hodnoceni = "\n        <p class=\"hodnoceni\">celkove hodnoceni: " + obj.celkoveHodnoceni + "</p>\n        <p class=\"hodnotilo\">hodnotilo: " + obj.pocetHodnoticich + "</p>\n    ";
    element.innerHTML = hodnoceni;
}
function zobrazClanek(clanek, div) {
    var element = document.getElementById(div);
    var output_str = "\n        <h3 class=\"titulek\">" + clanek.titulek + "</h3>\n        <p class=\"text\">Obsah:<br>" + clanek.text + "</p>\n    ";
    element.innerHTML = output_str;
}
var produktA = {
    jmeno: 'Plyšový medvěd',
    popis: 'Plyšová hračka zobrazující medvěda v sedu.',
    cena: 223,
    skladem: true,
    celkoveHodnoceni: 5,
    pocetHodnoticich: 10
};
zobrazKartu(produktA, 'div-produkt-1');
zobrazHodnoceni(produktA, 'div-hodnoceni-1');
var produktB = {
    jmeno: 'Medokvy medvěd',
    popis: 'Plyšová hračka zobrazující medvěda s medom.',
    cena: 555,
    skladem: false
};
zobrazKartu(produktB, 'div-produkt-2');
var clanek = {
    titulek: 'novy clanek',
    text: 'text noveho clanku',
    celkoveHodnoceni: 11,
    pocetHodnoticich: 25
};
zobrazClanek(clanek, 'div-clanek-1');
zobrazHodnoceni(clanek, 'div-hodnoceni-2');
