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