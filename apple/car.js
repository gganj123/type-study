var Car = /** @class */ (function () {
    function Car(model2, price2) {
        this.model = model2;
        this.price = price2;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("쑤나타", 2000);
var car2 = new Car("람보로", 20030);
console.log(car2);
console.log(car2.tax());
var Word = /** @class */ (function () {
    function Word() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        params.forEach(function (i) {
            if (typeof i === "string") {
                strings.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
