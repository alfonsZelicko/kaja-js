let question = prompt("Write a number for factorial count")

function faktorial(number) {
    let zaklad = 1;
    for (let i = 1; i <= number; i++) {
        zaklad = zaklad * i;
    }
    return zaklad
}

console.log(faktorial(question))