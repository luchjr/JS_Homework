//Задание 1

function Animal(name) {
    this._foodAmount = 50;

    Animal.prototype._formatFoodAmount = function () {
        return this._foodAmount + ' гр.';
    };

    Animal.prototype.dailyNorm = function (amount) {

        this._amount = amount;

        if (!arguments.length) return this._formatFoodAmount();

        if (this._amount < 30 || this._amount > 100) {
            return 'Недопустимое количество корма.';
        }

        this._foodAmount = this._amount;
    };

    this.name = name;

    Animal.prototype.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}


function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm());
barsik.feed();

console.log(barsik.dailyNorm(200));
barsik.feed();

console.log(barsik.dailyNorm(75));
barsik.feed();

barsik.stroke().feed().stroke().feed().stroke().stroke();


// Задание 2

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

function deepClone(initialObj) {
    var clone = Array.isArray(initialObj) ? [] : {};

    for (var k in initialObj) {
        if ((typeof (initialObj[k]) == 'object' && initialObj[k] !== null)) {
            clone[k] = deepClone(initialObj[k]);
        } else {
            clone[k] = initialObj[k];
        }
    }

    return clone;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//Задание 3

function isEqualObjects(initialObj, clonedObj) {

    if (Object.keys(initialObj).length !== Object.keys(clonedObj).length) {

        return false;
    }

    var answer = true;

    for (var k in initialObj) {

        if (typeof (initialObj[k]) !== typeof (clonedObj[k])) {

            return false;
        } else if ((Array.isArray(initialObj[k])) || (typeof (initialObj[k]) == 'object' && initialObj[k] !== null)) {
            answer = isEqualObjects(initialObj[k], clonedObj[k]);

            if (answer === false) {

                break;
            }
        } else if ((typeof (initialObj[k]) == 'function')) {
            
            if (initialObj[k].toString() !== clonedObj[k].toString()) {

                return false;
            }

        } else if ((initialObj[k] !== clonedObj[k])) {

            return false;
        }
    }

    return answer;
}

console.log(isEqualObjects(initialObj, clonedObj));
