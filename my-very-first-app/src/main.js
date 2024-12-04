function print(newContent) {
    document.querySelector('#app').innerHTML = newContent;
}

let result = '';

for (let i = 100; i >= 2 ; i--) {
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
}

print('<ul id="hello">' + result + '</ul>');

document.addEventListener('click', () => {
    document.querySelector('#hello').classList.add('animate')
});

const elems = document.querySelector('#hello');
elems.addEventListener('click', (event) => {alert(event.curren.innerHTML);});

