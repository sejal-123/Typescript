function getData(val) {
    return val;
}
getData('test');
var test1 = function (val) {
    console.log(val);
    return val;
};
test1(10);
var heros = ['thor', 'ironman'];
heros.map(function (val) {
    return "hero is ".concat(val);
});
// When we don't return anything return type is void
function consoleVal(val) {
    console.log(val);
}
consoleVal(10);
// When we want to throw an error or terminate a program we specify never as it is never going to return anything, it will just throw error
function handleError(errMsg) {
    throw new Error(errMsg);
}
handleError('test');
