function Animal(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}


function Cat(name) {
    Animal.apply(this, arguments);

    var self = this;
    var animalFeed = self.feed;

    self.feed = function () {
        animalFeed.call(self);
        console.log('Кот доволен ^_^');
        return self;
    }

    self.stroke = function () {
        console.log('Гладим кота.');
        return self;
    }
}

var barsik = new Cat('Барсик');


console.log(barsik.dailyNorm());
barsik.feed();

console.log(barsik.dailyNorm(200));
barsik.feed();

console.log(barsik.dailyNorm(75));
barsik.feed();

console.log(barsik.stroke().feed().stroke().feed().stroke().stroke());