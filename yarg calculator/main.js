const argv = require('yargs').argv

console.log('Hello, node main.js --add1 --add2 will give you the result');
console.log('Others commands are mult, div and sub');
//addition
function addition() {

    return argv.add1 + argv.add2

};
console.log('Addition result is : ' + addition());


//multiplication
function multiplication() {


  return argv.mult1 * argv.mult2


};
console.log(multiplication());

//division
function division() {
    return argv.div1 / argv.div2
};
console.log(division());

//substract
function substract() {

    return argv.sub1 - argv.sub2

};
console.log(substract());
