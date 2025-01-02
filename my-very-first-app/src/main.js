// samohlásky
let veta_od_uzivatele = prompt("Zadejte větu pro zjištění samohlásek")

function obsahuje_samohlasky(veta) {
    const samohlasky = "aeiouáéíóúůě"
    let nalezeneSamohlasky = []
    for (let znak of veta.toLowerCase()) {
        if (samohlasky.includes((znak))) {
            nalezeneSamohlasky.push(znak)
        }
    }
    return nalezeneSamohlasky.length > 0 ? nalezeneSamohlasky : false; // Vrátí pole samohlásek nebo false
}
const veta = (veta_od_uzivatele)


console.log(obsahuje_samohlasky(veta))


// console.log("-----------------------------------------------------")
//
// const samohlasky1 = ["a", "e", "i", "o", "u"];
//
// for (const samohlaska of samohlasky1) {
//     console.log(samohlaska);                                //iterujeme přimo objekty v proměnné
// }
//
// console.log("-----------------------------------------------------")















