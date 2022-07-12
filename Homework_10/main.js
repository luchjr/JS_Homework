var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

//Задание 1

var button = document.querySelector('button');

button.addEventListener('click', colorFirstParLinks);
secondPar.onclick = alertSecondParLinks;

function colorFirstParLinks() {
    for (var i = 0; i < firstPar.children.length; i++) {
        if (firstPar.children[i].tagName == 'A') {
            firstPar.children[i].classList.toggle('red');
        }
    }
}

function alertSecondParLinks(evt) {
    var target = evt.target;

    evt.preventDefault();

    if (target.tagName == 'A') {
        alert(target.getAttribute('href'));
    }
}

//Задания 2 и *

var table = document.querySelector('table'),
    addRowButton = table.querySelector('.addrow');

addRowButton.addEventListener('click', addRow);
table.addEventListener('click', toggleInput);


function addRow() {
    var newRow = document.createElement('tr');

    newRow.innerHTML = '<td></td><td></td><td></td>';
    table.insertBefore(newRow, table.firstElementChild);
}

function toggleInput(evt) {

    var target = evt.target;

    if (target.tagName == 'TD' && !target.classList.contains('addrow')) {
        var newInput = document.createElement('input');

        if (target.innerText) {
            newInput.value = target.innerText;
        }

        target.innerText = '';
        target.appendChild(newInput);
        newInput.focus();


        newInput.onblur = function () {
            target.innerText = newInput.value;
            newInput.remove();
        }; 

        newInput.onkeydown = function (evt) {
            if (evt.key == 'Enter') {
                newInput.blur();
            }
        };
    }
}
