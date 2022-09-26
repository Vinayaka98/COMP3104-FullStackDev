//Exercise 1
const gretter = (myArray, counter) => {
    let greetText = 'Hello ';
    for (let index of myArray) {
        console.log(`${greetText} ${index}`);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2
function capitalize(theEnteredStr) {
    let [the1stLetter, ...theEnteredBigStr] = theEnteredStr;
    the1stLetter = the1stLetter.toUpperCase();
    let thebigStr = the1stLetter + theEnteredBigStr.join('');
    return thebigStr;

}

console.log(capitalize("nodeJS"));
console.log(capitalize("myname"));

//Exercise 3
const colors = ['red', 'green', 'blue'];
let capitalizeColors = colors.map(capitalize);
console.log(capitalizeColors);

//Exercise 4
var values = [1, 60, 34, 30, 20, 5];
var filterLessThan20 = values.filter((number_in_arr) => {
    return number_in_arr < 20
});
console.log(filterLessThan20);

//Exercise 5
var array = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumWithInitial);

//Exercise 6
class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    get details(){
        console.log("Model: "+this.model+" Engine "+this.year);
    }

}

class Sedan extends Car{
    constructor(model, year, balance) {
        super();
        this.model = model;
        this.year = year;
        this.balance = balance;
    }
    get info(){
        console.log(this.model+" has a balance of $"+this.balance.toFixed(2));
    }

}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details);
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info);