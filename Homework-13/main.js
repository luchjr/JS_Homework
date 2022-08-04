//Задание 1

{
    let emailTestRe = new RegExp('^[a-z]{3,10}_[a-z]{3,10}(-\\d{4})?' +
        '@[a-z0-9]{1,10}[a-z0-9-.]?[a-z0-9]{1,10}\\.com$', 'i');

    emailTestRe.test('name_surname@a234567890.123456789B.com');
}

// Задание 1*

{
    let emailTestRe = new RegExp('^[a-z]{3,10}_[a-z]{3,10}(-\\d{4})?' +
        '@(?=[a-z0-9]+[a-z0-9-.]?[a-z0-9]+(?=\\.com$)).{2,21}\\.com$', 'i');

    emailTestRe.test('name_surname-9528@a234567890123456789.B.com');
}

//Задание 2

let testPhoneNumber = phoneNumber => {

    return /^(\+?375-?|8-?0)(25|29|33|44|17)-?[1-9]\d{2}(-?\d{2}){2}$/.test(phoneNumber);
};

testPhoneNumber('80336666666');

//Задание 3, вариант 1

{
    let countVowels = text => {

        let vowels = text.match(/[аиеёоуыэюя]/ig);

        return vowels === null ? 'гласных не найдено' : vowels.length;
    };

    countVowels('возмож \n ности');
    countVowels('в\nнст');
}

//Задание 3, вариант 2

{
    let countVowels = text => {

        let vowels = text.replace(/[^аиеёоуыэюя]/ig, '');

        return vowels.length === 0 ? 'гласных не найдено' : vowels.length;
    };

    countVowels('взмнст');
    countVowels('возмож \n ности');
}
