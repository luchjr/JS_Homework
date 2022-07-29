var button = document.getElementById('button'),
    container = document.getElementById('container'),
    errorMsg,
    usersData,
    info;

button.addEventListener('click', checkLocalStorage);

function checkLocalStorage() {
    if (localStorage.getItem('receivedData') === null) {
        getUsersList();
    } else {
        usersData = JSON.parse(localStorage.getItem('receivedData'));
        showUsersList();
    }
}

function getUsersList() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    xhr.send();
    xhr.onload = function () {
        var statusType = +String(this.status)[0];

        if (statusType === 2) {
            usersData = JSON.parse(this.response).data;
            localStorage.setItem('receivedData', JSON.stringify(usersData));
            showUsersList();
        } else {
            showErrorMsg.call(this);
        }
    };

    xhr.onerror = function () {
        showErrorMsg.call(this);
    };
}

function showErrorMsg() {
    errorMsg = document.createElement('div');
    errorMsg.classList.add('info', 'error-message');
    errorMsg.innerText = '***Getting data error*** \n' + 'Status code: ' + this.status;
    container.innerHTML = '';
    container.appendChild(errorMsg);
}

function showUsersList() {
    var tabsBlock = document.createElement('div'),
        tab;

    info = document.createElement('div');
    info.classList.add('info');
    showInfo(0);
    container.innerHTML = '';
    container.appendChild(tabsBlock);
    container.appendChild(info);

    for (var i = 1; i <= usersData.length; i++) {
        tab = document.createElement('div');
        i === 1 ? tab.classList.add('tab', 'tab_active') : tab.classList.add('tab');
        tab.setAttribute('data-index', i - 1);
        tab.innerText = 'User ' + i;
        tabsBlock.appendChild(tab);
    }

    tabsBlock.addEventListener('click', toggleTabs);
}

function showInfo(i) {
    info.innerHTML = '<img src="' + usersData[i].avatar + '"class="user-image">' +
        '<div>' +
        '<span class="first-name">' + 'First name: ' + usersData[i].first_name + '</span>' +
        '<span class="last-name">' + 'Last Name: ' + usersData[i].last_name + '</span>' +
        '</div>';
}

function toggleTabs(evt) {
    var target = evt.target,
        index = +target.getAttribute('data-index');

    if (target.classList.contains('tab')) {
        for (var i = 0; i < usersData.length; i++) {
            if (this.children[i].classList.contains('tab_active')) {
                this.children[i].classList.remove('tab_active');
            }
        }
        target.classList.add('tab_active');
        showInfo(index);
    }
}