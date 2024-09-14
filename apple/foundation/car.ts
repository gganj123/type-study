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

class Word {
  num: number[];
  str: string[];
  constructor(...params: (string | number)[]) {
    let numbers: number[] = [];
    let strings: string[] = [];

    params.forEach((i) => {
      if (typeof i === "string") {
        strings.push(i);
      } else {
        numbers.push(i);
      }
    });
    this.num = numbers;
    this.str = strings;
  }
}

let obj = new Word("kim", 3, 5, "park");

console.log(obj.num);
console.log(obj.str);
