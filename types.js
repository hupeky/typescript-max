var string = 'max';
// tuples fixed array format, number and order of types
var addres = ["Superstreet", 99];
// enum transforms numbers into more meaningful 
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 4] = "green";
    Color[Color["blue"] = 10] = "blue"; // default 2
})(Color || (Color = {}));
var myColor = Color.green;
// function shape declaration
var multiply;
function multiplyFunc(_a, value2) {
    var value = _a[0], rest = _a.slice(1);
    console.log('add', value + value2, 'rest', rest);
    return value + value2;
}
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return [100, 3.99, 10];
    }
};
console.log(typeof complex);
// never 
function neverReturns() {
    throw new Error('an error');
}
// Nullable Types
var canBeNull = 10;
canBeNull = null;
console.log('can be null', canBeNull);
var canAlsoBeNull = null;
