//Задание 1

function positiveArr(numbers) {
    return numbers.filter(function (item) {
        return item > 0;
    });
}

console.log(positiveArr([-1, 0, 2, 34, -2]));


// Задание 2

function positiveItem(numbers) {
    return numbers.find(function (item) {
        return item > 0;
    });
}

console.log(positiveItem([-1, 0, 2, 34, -2]));

// Задание 3

function isPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));



// Задание 4

function areAnagrams(word1, word2) {
    return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('');
}

console.log(areAnagrams('кот', 'Отк'));
console.log(areAnagrams('кот', 'отко'));



// Задание 5:

function divideArr(arr, lengthOfSubArr) {
    if (!lengthOfSubArr) {

        return arr;
    }

    var newArr = [];

    for (var i = 0; i < arr.length; i += lengthOfSubArr) {
        newArr[newArr.length] = arr.slice(i, i + lengthOfSubArr);
    }

    return newArr;
}

console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));



//Задание 6

function isPowerOfTwo(number) {
    if (!number) {
        return false;
    }

    while (number > 2) {
        if ((number % 2)) {
            return false;
        }
        number /= 2;
    }

    return true;
}

console.log(isPowerOfTwo(1024));