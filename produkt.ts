// Hallo world

// produkt FOREACH
interface Produkt {
    jmeno: string;
    popis: string;
    cena: number;
    skladem: boolean;
    dilino?: string; // optional variable
}

interface Hodnotitelny {
    celkoveHodnoceni: number;
    pocetHodnoticich: number;
}

class ProduktEshopuA implements Produkt, Hodnotitelny {
    jmeno: string;
    popis: string;
    cena: number;
    skladem: boolean;
    celkoveHodnoceni: number;
    pocetHodnoticich: number;
}

class ProduktEshopuB implements Produkt {
    jmeno: string;
    popis: string;
    cena: number;
    skladem: boolean;
}

class Clanek implements Hodnotitelny {
    titulek: string;
    text: string;
    celkoveHodnoceni: number;
    pocetHodnoticich: number;
}


function zobrazKartu(produkt: Produkt, div: string): void {
    const element = document.getElementById(div);
    let polozky: string[] = ['jmeno', 'popis', 'skladem', 'cena'];
    let output_str: string = '';

    //polozky.forEach(polozka => console.log(polozka));
    //polozky.forEach(myForeachFunction);
    // function myForeachFunction(item: string, index: number) {...}
    polozky.forEach(function (item: string, index: number) {
            if (item == 'jmeno'){ //or if (index == 0){
                output_str += `<h3 class="header">${item}: ${produkt[item]} lala</h3>`;
            }
            else{
                output_str += `<p class="${item}">${item}: ${produkt[item]}</p>`;
            }

        }
    );
    element.innerHTML = output_str;
}

function zobrazHodnoceni(obj: Hodnotitelny, div: string): void {
    const element = document.getElementById(div);
    const hodnoceni = `
        <p class="hodnoceni">celkove hodnoceni: ${obj.celkoveHodnoceni}</p>
        <p class="hodnotilo">hodnotilo: ${obj.pocetHodnoticich}</p>
    `;
    element.innerHTML = hodnoceni;
}

function zobrazClanek(clanek: Clanek, div: string): void {
    const element = document.getElementById(div);
    const output_str = `
        <h3 class="titulek">${clanek.titulek}</h3>
        <p class="text">Obsah:<br>${clanek.text}</p>
    `;
    element.innerHTML = output_str;
}

// Produkt s hodnocenim
const produktA: ProduktEshopuA = {
    jmeno: 'Plyšový medvěd',
    popis: 'Plyšová hračka zobrazující medvěda v sedu.',
    cena: 223,
    skladem: true,
    celkoveHodnoceni: 5,
    pocetHodnoticich: 10,

};
zobrazKartu(produktA, 'div-produkt-1');
zobrazHodnoceni(produktA, 'div-hodnoceni-1');

// Produkt bez hodnotenia
const produktB: ProduktEshopuB = {
    jmeno: 'Medokvy medvěd',
    popis: 'Plyšová hračka zobrazující medvěda s medom.',
    cena: 555,
    skladem: false
};
zobrazKartu(produktB, 'div-produkt-2');

// Clanok s hodnocenim
const clanek: Clanek = {
    titulek: 'novy clanek',
    text: 'text noveho clanku',
    celkoveHodnoceni: 11,
    pocetHodnoticich: 25
}
zobrazClanek(clanek, 'div-clanek-1');
zobrazHodnoceni(clanek, 'div-hodnoceni-2');
