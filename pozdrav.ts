// Hallo world

function pozdrav(jmeno: string) {
    const element = document.getElementById("hallo");
    const str = document.createTextNode("Ahoj " + jmeno);
    element.appendChild(str);
}
let promenna = "světe";
pozdrav(promenna);

// Shuffle array
function vytvorSeznam(data: string[]): void {
    const element = document.getElementById("seznam");
    //console.log(element);

    for (const polozka of data) {
        const li = document.createElement('li');
        const textNodePolozka = document.createTextNode(polozka);

        li.appendChild(textNodePolozka);
        element.appendChild(li);
    }
}
let polozky: string[] = ['kartáček', '5', 'ponožky', 'podložky'];
polozky = shuffle(polozky);
vytvorSeznam(polozky);

function shuffle(array: string[]): string[] {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



// produkt FOREACH
interface Produkt {
    jmeno: string;
    popis: string;
    cena: number;
    skladem: boolean;
    dilino: string;
}

const plysak: Produkt = {
    jmeno: 'Plyšový medvěd',
    popis: 'Plyšová hračka zobrazující medvěda v sedu.',
    cena: 223,
    skladem: true,
    dilino: 'hohoho!'
}

function zobrazKartu(produkt: Produkt) {

    const element = document.getElementById('karta');

    let polozky: string[] = ['jmeno', 'popis', 'skladem', 'cena', 'dilino'];

    let output_str: string = '';
    //polozky.forEach(polozka => console.log(polozka));
    //polozky.forEach(myForeachFunction);
    // function myForeachFunction(item: string, index: number) {...}
    polozky.forEach(function (item: string, index: number) {
            if (item == 'jmeno'){ //or if (index == 0){
                output_str = output_str + `<h3 class="header">${item}: ${produkt[item]} lala</h3>`;
            }
            else{
                output_str = output_str + `<p class="${item}">${item}: ${produkt[item]}</p>`;
            }

        }
    );


    element.innerHTML = output_str;
}

zobrazKartu(plysak);
