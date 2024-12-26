// samohlásky
const samohlasky = ["a","e","i","o","u"]
for (let i = 0; i < samohlasky.length; i++) {
    console.log(samohlasky[i]);                            //iterujeme přes indexy pole
}

console.log("-----------------------------------------------------")

const samohlasky1 = ["a", "e", "i", "o", "u"];

for (const samohlaska of samohlasky1) {
    console.log(samohlaska);                                //iterujeme přimo objekty v proměnné
}

console.log("-----------------------------------------------------")

// sčítání cifer

const cislo = 131
let rozdelena_cisla = cislo.toString().split('').map(Number);

let soucet = 0;

for (let i = 0; i<rozdelena_cisla.length ; i++) {
    soucet += rozdelena_cisla[i]

}
console.log(soucet)
