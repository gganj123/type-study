class Car {
  model: string;
  price: number;
  constructor(model2: string, price2: number) {
    this.model = model2;
    this.price = price2;
  }

  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car("쑤나타", 2000);
let car2 = new Car("람보로", 20030);
console.log(car2);
console.log(car2.tax());
