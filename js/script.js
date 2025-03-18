// istruzione 1: inizializzazione variabile contatore
// istruzione 2: condizione fine ciclo
// istruzione 3: incremento variabile contatore i = i + 1 => i += 1 => i++ 

// for (let i = 1; i<=10; i++) {
//     console.log(i);
// }

for (let i = 1; i < 100; i++) {
    if ((i) % 3 == 0){
        console.log("Fizz");
        if ((i) % 3 == 0 && (i) % 5 == 0) {
            console.log("FizzBuzz");
        }
    }

    else if ((i) % 5 == 0) {
        console.log("Buzz");
    }
}