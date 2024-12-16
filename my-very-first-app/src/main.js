function zobraz(newContent, selector) {
    document.querySelector(selector || '#app').innerHTML = newContent;
}

/*for (let i = 100; i >= 2 ; i--) {
    let sevenClassName = '';

    if (i % 7 === 0) {
        sevenClassName = 'dived-by-seven';
    }

    if (i % 13 === 0) {
        sevenClassName = 'dived-by-13';
    }

    if (i % 13 === 0 && i % 2 === 0) {
        sevenClassName = 'dived-by-13-and-2';
    }

    result += '<li class="' + sevenClassName + '">' + i + '</li>';
}*/

//print('<ul id="hello">' + result + '</ul>');

/*document.addEventListener('click', () => {
    document.querySelector('#hello').classList.add('animate')
});*/

const elems = document.querySelector('#hello');
elems?.addEventListener('click', (event) => {alert(event?.curren?.innerHTML);});

/***********************************************************************/

const generateHtmlImg = (color) => `<div style="width: 60px; height: 60px; background-color: ${color}"></div>`; // '<img src="' + url + '" alt="hovno"/>'

/* Approach A */
function generateRowA(isBlack) {
    let result = "";
    for (let i = 0; i < 8;i++){
        if (i%2){
            result=result+generateHtmlImg(isBlack ? '#000' : '#fff');
        } else{
            result=result+generateHtmlImg(isBlack ? '#fff' : '#000');
        }
    }
    return result;
}

function generateFieldA(){
    let result = "<div class=\"chessboard\">";
    for (let i = 0;i  < 8;i++){
        if (i%2){
            result=result+generateRowA(false);
        } else{
            result=result+generateRowA(true);
        }
    }

    return result+'</div>';
}

/* Approach B */
const generateRowB = (word) => {
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += word;
    }

    return result;
}

const generateFieldB = () => {
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += i%2 ? generateRowB('ba') : generateRowB('ab');
        /*
        * if (i%2) { result += generateRowB('ba')} else {result += generateRowB('ab');
        * */
        result += '<br>';
    }

    return result+result;
}

/* Approach C */
/* Approach B */

const generateRowC = (a,b) => {
    let result = a;
    for (let i = 0; i < 8; i++) {
        result += result[result.length] === a ? b : a;
    }

    return result;
}

const approaches = [
    {
        generateRow: generateRowA,
        generateField: generateFieldA,
    },
    {
        generateRow: generateRowB,
        generateField: generateFieldB,
    },
    {
        generateRow: generateRowC,
        generateField: generateFieldA,
    }
    ];


//zobraz(approaches[0].generateField());
zobraz(approaches[0].generateField());
