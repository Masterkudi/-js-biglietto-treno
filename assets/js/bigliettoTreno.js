const userAge = prompt('età del passeggero');
const distanza = prompt('distanza da percorrere');

let price = ('0,21€ * km');

if (userAge < 18) {
    console.log ('complimenti, hai uno sconto del 20%');
} else {
    if (userAge > 65) {
        console.log ('complimenti, hai uno sconto del 40%');
    } else if (userAge >= 18 && userAge <= 65) {
        console.log ('hai il prezzo base');
    }
}

const outputDiv = document.getElementById("output");

outputDiv.innerHTML = risultato;



