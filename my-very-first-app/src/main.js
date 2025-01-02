let question = prompt("Write a number for factorial count")

function faktorial(number) {
    let vzorec = 1;
    for (let i = 1; i <= number; i++) {
        vzorec = vzorec * i;
    }
    return vzorec
}

console.log(faktorial(question))