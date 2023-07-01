const userAge = parseInt(prompt('età del passeggero'));
const distanza = parseInt(prompt('distanza da percorrere'));
let pricePerKm = 0.21;
let sconto = 0;

let price = pricePerKm * distanza;



if (userAge < 18) {
    sconto = 0.2;
    console.log('Complimenti, hai uno sconto del 20%');
} 
else if (userAge >= 65) {
    sconto = 0.4;
    console.log('Complimenti, hai uno sconto del 40%');
} 
else {
    console.log('Hai il prezzo base');
}

const risultato = price - (price * sconto);

const outputDiv = document.getElementById("output");

outputDiv.innerHTML = risultato;

