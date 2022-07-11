//Enteros
let btnAdd = document.getElementById('btnAdd');
let btnOrder = document.getElementById('btnOrder');
let btnCls = document.getElementById('btnCls');
let addList = document.getElementById('addList');
let orderList = document.getElementById('orderList');
let arrayNumbers = [];
//Arrays
let btnAddw = document.getElementById('btnAddw');
let btnOrderw = document.getElementById('btnOrderw');
let btnClsw = document.getElementById('btnClsw');
let addListw = document.getElementById('addListw');
let orderListw = document.getElementById('orderListw');
let arrayWords = [];

loadEvents();
function loadEvents() {
    //Números enteros
    btnAdd.addEventListener('click', agregar);
    btnOrder.addEventListener('click', ordenamientoBurbuja);
    btnCls.addEventListener('click', limpiarEntradas);
    btnAddw.addEventListener('click', agregarStrings);
    btnOrderw.addEventListener('click', ordenamientoBurbujaStrings);
    btnClsw.addEventListener('click', limpiarEntradas);
}


function agregar() {
    const numeros = document.getElementById('numeros').value;
    arrayNumbers.push(Number(numeros));
    const html = document.createElement('li');
    html.className = 'list-group-item';
    html.innerHTML = `<li>${Number(numeros)}</li>`;
    addList.appendChild(html);
}
function agregarStrings() {
    const strings = document.getElementById('strings').value;
    arrayWords.push(String(strings));
    const html = document.createElement('li');
    html.className = 'list-group-item';
    html.innerHTML = `<li>${String(strings)}</li>`;
    addListw.appendChild(html);
}

function ordenamientoBurbujaStrings() {
    arrayWords.sort((a, b) => {
        if (a == b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
    });
    for (let index = 0; index < arrayWords.length; index++) {
        const html = document.createElement('li');
        html.className = 'list-group-item';
        html.innerHTML = `<li>${arrayWords[index]
            }</li > `;
        orderListw.appendChild(html);
    }
}

function ordenamientoBurbuja() {
    let temp;
    for (let i = 0; i < arrayNumbers.length; i++) {
        for (let j = arrayNumbers.length - 1; j >= i; j--) {
            if (arrayNumbers[j - 1] > arrayNumbers[j]) {
                temp = arrayNumbers[j - 1];
                arrayNumbers[j - 1] = arrayNumbers[j];
                arrayNumbers[j] = temp;
            }
        }
    }
    for (let index = 0; index < arrayNumbers.length; index++) {
        const html = document.createElement('li');
        html.className = 'list-group-item';
        html.innerHTML = `<li>${arrayNumbers[index]
            }</li > `;
        orderList.appendChild(html);
    }
}

function limpiarEntradas() {
    while (addListw.firstChild) {
        addListw.removeChild(addListw.firstChild);

    }
    while (orderListw.firstChild) {
        orderListw.removeChild(orderListw.firstChild);
    }
    arrayWords = [];
}