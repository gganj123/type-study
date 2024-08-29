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
