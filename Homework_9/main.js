//Задание 1

function modifyArr(namesArr) {

    return namesArr.map(function (item) {

        return { name: item };

    });
}

console.log(modifyArr(['Ian', 'Max', 'Mike']));

// Задание 2:

function formatTime(timeArr) {

    return timeArr.reduce(function (previous, current) {

        return previous + ' : ' + current;
    }, 'Текущее время');
}

console.log(formatTime(['00', '13', '24']));


// Задание 3:

function countVowels(text) {
    var counter = 0,
        vowels = 'аиеёоуыэюя',
        textLowerCase = text.toLowerCase();

    for (var i = 0; i < textLowerCase.length; i++) {

        if (vowels.indexOf(textLowerCase[i]) > -1) {
            counter++;
        }
    }

    return counter;
}

console.log(countVowels('кьют кэт робот'));


//  Задание 4:

function countSentencesLetters(text) {
    var sentences = text.trim().split(/\s*[!?.]+\s+/m);

    return sentences.forEach(function (item) {
        console.log(item + ' Letters quantity is: ' +
            item.split(/[^А-Яа-я]/).join('').length);
    });
}

countSentencesLetters('   Привет, студент  ! Студент...         Как дела, студент?   ');


// Задание 5 *

function findFirstMostRepeatedWord(text) {
    var words = text.toLowerCase().split(/[^А-Яа-я$]+/),
        checkedWords = [],
        tempCounter,
        tempWord,
        counter = 1,
        mostRepeatedWord;

    outer: for (var i = 0; i < words.length; i++) {

        if (!checkedWords.length) {
            checkedWords.push(words[i]);
        } else if (checkedWords.indexOf(words[i]) > -1) {
            continue outer;
        } else {
            checkedWords.push(words[i]);
        }

        tempCounter = 1;

        for (var j = i + 1; j < words.length; j++) {

            if (words[i] === words[j]) {
                tempCounter++;
                tempWord = words[i];
            }
        }

        if (tempCounter > counter) {
            counter = tempCounter;
            mostRepeatedWord = tempWord;
        }
    }

    if (!mostRepeatedWord) {
        return 'Повторяющихся слов нет';
    } else {
        return 'Максимальное число повторений у слова "' + mostRepeatedWord + '" - ' + counter;
    }
}

console.log(findFirstMostRepeatedWord('В квартире сочный голос что-то говорил о производстве чугуна, зачитывал цифры.' + 
'Голос шел из заделанной в правую стену продолговатой металлической пластины. Голос ослаб ослаб ослаб'));

