//Задание 1

/* Имеется следующий объект - {a: 1, b: 2, c: 3, d: 4}. Необходимо сделать так, чтобы в переменные a и b записались соответствующие значения, а все, что осталось - в объект obj. */

{
    let { a, b, ...obj } = { a: 1, b: 2, c: 3, d: 4 };

    console.log(a, b, obj);
}

/* Задание 2:
    Запросить у пользователя имя и сохранить его в переменную.
    Создать объект со свойством name, куда записать короткой записью значение имени пользователя, и методом sayHi, который будет возвращать строку вида: "Hi, (имя пользователя)!" Имя пользователя получать уже из объекта. Проверить работу метода. Убедиться в уместном использовании способов задания переменной. */

{
    const name = prompt('Введите имя пользователя:');  

    const obj = {
        name,
        sayHi () {
           return `Hi, ${this.name}!`; 
        }
    }

    obj.sayHi();
}

/* Задание 3:
Написать функцию, которая будет принимать параметры x, y, z. При вызове функции передать в неё первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число. X и y получаем из свойств переданного в функцию объекта a и b. У z значение по умолчанию должно быть 1. Функция должна возвращать результат возведения в степень y числа x, умноженный на z. Валидацию опустить. */

{
    function calculateXYZ({ a: x, b: y }, z = 1) {
        return x ** y * z;
    }

    calculateXYZ({ a: 2, b: 3 }, 2);
}

/* Задание 4:
Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра name и age и вернуть строку вида: "Hello, I'm (имя) and I'm (возраст) years old." Не использовать деструктуризацию. */

{
    const obj = ['John', 50]

    function sayHello(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`
    }

    sayHello(...obj);
}

/* Задание 5:
Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом. Вывести в консоль числа последовательно. */

{
    const obj = ['John', 50]

    function printArrItems(...arr) {
        for (let item of arr) {
            console.log(item);
        }
    }

    printArrItems(1, 2, 3, 4, 5);
}

/* Задание 6:
    Переписать решение задачи с поиском гласных на новый синтаксис. Использовать перебирающий метод массива и поиск элемента в массиве.
      function countVowelLetters(text) {
          text = text.toLowerCase().split('');

          var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
              counter = 0;

          for (var i = 0; i < vowelLetters.length; i++) {
              for (var j = 0; j < text.length; j++) {
                  vowelLetters[i] === text[j] && counter++;
              }
          }

          return counter;
      }

      countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12 */

{
    function countVowelLetters(text) {
        text = text.toLowerCase().split('');
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

        return text.filter(item => {
            if (vowelLetters.includes(item)) {
                return item;
            }
        }).length;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку');
}

/* 
  Задание 7:
 Написать функцию, принимающую массив объектов вида:
        [
            {name: 'Vasya Pupkin', age: 25},
            {name: 'Ivan Petrov', age: 30},
            {name: 'Fedor Ivanov', age: 42}
        ]
      и возвращающую объект вида:
        {
            Пользователи младше 40: [
                {name: 'Vasya Pupkin', age: 25},
                {name: 'Ivan Petrov', age: 30}
            ],
            Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
        }
      Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor. */

{
    function convertArrToObj(arr) {
        return {
            ['Пользователи младше 40:']: [arr.filter(item => {
                if (item.age < 40) {

                    return item;
                }
            })],
            ['Пользователь с именем Федор:']: [arr.find(item => {
                if (item.name.startsWith('Fedor')) {

                    return item;
                }
            })]
        };
    }

    console.log(convertArrToObj(
        [
            { name: 'Vasya Pupkin', age: 25 },
            { name: 'Ivan Petrov', age: 30 },
            { name: 'Fedor Ivanov', age: 42 }
        ]
    ));
}

/* Задание 8:
Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
  [
      {Пользователь 1: 'Вася'},
      {Пользователь 2: 'Петя'}
  ] */

{
    function createUsersList(arr) {
        return arr.map((item, i) => {
            return {[`Пользователь ${i + 1}`]: item};
        })

    }

    createUsersList(['John', 'Max', 'Jack', 'Fred']);
}

/* Задание 9:
Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
  [
      {name: 'Vasya'},
      {name: 'Piotr', age: 25},
      {salary: '2000$'}
  ]
необходимо преобразовать в
  {
      name: 'Piotr',
      age: 25,
      salary: '2000$'
  }
Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться. */

{
    function uniteArrays(arr) {
        return arr.reduce((prev,curr) => {
            return Object.assign(prev, curr);
        }, {});
    }

    uniteArrays([
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ]);
}

/* Задание 10:
Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов. */

{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {

            return this._foodAmount + ' гр.';
        };

        dailyNorm(amount) {

            this._amount = amount;
        
            if (!arguments.length) return this._formatFoodAmount();
        
            if (this._amount < 30 || this._amount > 100) {
                return 'Недопустимое количество корма.';
            }
        
            this._foodAmount = this._amount;
        };

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        };
    }

    const bars = new Animal('Барс');

    console.log(bars.dailyNorm);
    bars.dailyNorm = 70;
    bars.feed();

    class Cat extends Animal {
        feed() {
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        };

        stroke() {
            console.log('Гладим кота.');
            return this;
        };
    }

    const barsik = new Cat('Барсик');

    console.log(barsik.dailyNorm);
    barsik.dailyNorm = 200;
    barsik.feed();
    barsik.dailyNorm = 75;
    barsik.feed();
    barsik.stroke().feed().stroke();
}


//Задание 11:

{
function returnNumbersInRange(num1, num2) {

    return new Promise((resolve, reject) => {
        if (!(num1 % 1) && !(num2 % 1)) {
            if (num1 > num2) {
                [num1, num2] = [num2, num1];
            }

            let timerId = setInterval(() => {
                console.log(num1);
                if (num1 === num2) {
                clearInterval(timerId);
                resolve(num1);
                }
                num1++;
            }, 1000);

    /*         let timerId = setTimeout(function printNum() {
                console.log(num1);
                ++num1;
                timerId = setTimeout(printNum, 1000);
                
                if (num1 === num2) {
                    clearTimeout(timerId);
                    resolve(num1);
                }
            }, 1000); */


        } else {
            reject('не целые числа');
        }
    });
}
    
returnNumbersInRange(1, 5)
    .then(result => console.log(`Последнее число диапазона: ${result}`))
    .catch(reject => console.log(`Ошибка: ${reject}`))
    .finally(() => console.log(`Работа промиса завершена`));
}