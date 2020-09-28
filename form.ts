const form: HTMLFormElement = document.querySelector('#my_form');


form.onsubmit = () => {
  const formData = new FormData(form);
  const text_orig = formData.get('textInput') as string;
  const text_new2 = rand_words(text_orig);
  var element2 = document.getElementById('new_word2');
  element2.innerHTML = '<p>' + text_new2 + '</p>';;
  return false; // prevent reload
};



function rand_words(text_orig) {

    const words = text_orig.split(" ");
    //let words_out_array = new Array();
    let words_out_array: string[] = [];

    words.forEach(
        function (word, index) {
            words_out_array.push(rand_word(word));
        }
    );
    const words_out = words_out_array.join(" ");
    return words_out;
}

function rand_word(text_orig) {
    // text splitted to array
    // text array shuffled
    // shuffled array joined
    let text_new = text_orig;
    do {
        text_new = shuffle(text_orig.split("")).join("");
    } while (text_new == text_orig)

    return text_new;
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        let last = 0;
        do {
            let random_number = Math.random();
            randomIndex = Math.floor(random_number * currentIndex);
            // find other if '
            if (array[randomIndex] !== "'"){
                last = 1;
            }
        } while (last === 0)

        currentIndex -= 1;
        // skip '
        if (array[currentIndex] === "'"){
            continue;
        }
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
