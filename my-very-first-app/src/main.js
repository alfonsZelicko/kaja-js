
// sčítání cifer zmenou na string
const cifernySoucetStr = (cislo) => {
    let rozdelena_cisla = BigInt(cislo).toString().split('').map(Number);
    let soucet = 0;

    for (let i = 0; i < rozdelena_cisla.length; i++) {
        soucet += rozdelena_cisla[i];

    }
    return soucet;
}
// sčítání cifer cislem rovnou
const cifernySoucetNum = (cislo) => {
    let tmpCislo = cislo;
    let result = 0;

    while (tmpCislo > 0) {
        result += tmpCislo % 10;
        tmpCislo = Math.floor(tmpCislo / 10);
    }
    return result;
}


//jedna se o rekuzi. dopracuj ji tak, aby vracela ciferny soucet
const recursionFn = (cislo) => cislo === 0 ? 0 : (cislo % 10) + recursionFn(Math.floor(cislo / 10));

// const number = Number.MAX_VALUE;
const number = Number.MAX_VALUE;

console.time('na hovno zpusob:');
console.log(cifernySoucetStr(number))
console.timeEnd('na hovno zpusob:');

console.time('cool zpusob:');
console.log(cifernySoucetNum(number))
console.timeEnd('cool zpusob:');

console.time('recursion zpusob:');
console.log(recursionFn(number));
console.timeEnd('recursion zpusob:');
