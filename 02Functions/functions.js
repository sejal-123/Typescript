function addNum(num) {
    console.log(num * 10);
    return num + 2;
}
// addNum('S'); // here as when we don't specify the type, it allows string also to be passed
addNum(10);
function toUpper(val) {
    return val.toUpperCase();
}
// toUpper(10);
toUpper('Sejal');
function signupUser(username, email, isPaid) {
    console.log(username, email, isPaid);
}
var test = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signupUser('sej', 'sej@s.com', true);
test('s', 's');
