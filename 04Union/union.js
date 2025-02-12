var val = 3;
var val1 = '3';
// this supports both thevalues as we have specified it to be a number or a string
function getVal(val) {
    // val.toLowerCase(); won't be allowed as we need to pass either num or str and toLowerCase will not be supported on num
    if (typeof val === 'string') {
        val.toLowerCase();
    }
}
var usr = { name: 'test', id: 1 };
usr = { username: 'test1', id: 4 };
// Array
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, 2, 3];
var data4 = [1, 2, '3'];
