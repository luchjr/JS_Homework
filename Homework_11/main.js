var button = document.getElementById('button'),
    container = document.getElementById('container'),
    inputs = document.querySelectorAll('input'),
    xInput = document.getElementById('x-input'),
    yInput = document.getElementById('y-input'),
    x,
    y;

inputs.forEach(function (item) {
    item.addEventListener('keyup', toggleButton);
});
button.addEventListener('click', drawChessBoard);

function toggleButton(evt) {
    var check = true;

    inputs.forEach(function(item) {
        if (item.value == '') {
            check = false;
        }
    }); 

    if (check && button.hasAttribute('disabled')) {
        button.removeAttribute('disabled');
    } else if (!check && !button.hasAttribute('disabled')) {
        button.setAttribute('disabled', '');
    }
}

function validateInput() {
    var wrongInputName = '';

    inputs.forEach(function (item) {
        item.value = item.value.trim();

        if (/\D+/.test(item.value) || item.value % 1 || item.value < 1 || item.value > 10) {
            wrongInputName += item.getAttribute('data-name') + ',' + ' ';
            item.value = '';
            item.focus();
        }
    });

    if (wrongInputName == '') {
        
        return true;
    }

    button.setAttribute('disabled', '');
    alert('Некорректный ввод ' + wrongInputName.trim().replace(/,$/, '') + '. Введите целое число от 1 до 10');
    container.innerHTML = '';
}

function drawChessBoard() {

    if (validateInput()) {
        var table = document.createElement('table'),
            row;
        button.setAttribute('disabled', '');
        x = +xInput.value;
        y = +yInput.value;
        xInput.value = '';
        yInput.value = '';
        container.innerHTML = '';
        container.appendChild(table);

        for (var i = 1; i <= y; i++) {
            row = document.createElement('tr');
            table.appendChild(row);
            row.innerHTML = '';

            for (var j = 1; j <= x; j++) {
                row.innerHTML += '<td></td>';

                if (i % 2 == 0 && j % 2 == 0) {
                    row.children[j - 1].classList.toggle('black');
                } else if (i % 2 != 0 && j % 2 != 0) {
                    row.children[j - 1].classList.toggle('black');
                }
            }
        }

        table.addEventListener('click', invertCellsColor);
    }
}

function invertCellsColor(evt) {
    var target = evt.target,
        cells = document.querySelectorAll('td');

    if (target.tagName == 'TD') {

        cells.forEach(function (item) {
            item.classList.toggle('black');
        });
    }
}
