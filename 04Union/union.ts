let val: number | string = 3;
let val1: number | string = '3';

// this supports both thevalues as we have specified it to be a number or a string

function getVal(val: number | string) {
    // val.toLowerCase(); won't be allowed as we need to pass either num or str and toLowerCase will not be supported on num
    if (typeof val === 'string') {
        val.toLowerCase();
    }
}

type User1 = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let usr: User1 | Admin  = { name: 'test', id: 1 };

usr = { username: 'test1', id: 4 };


// Array

const data: number[] = [1,2,3];
const data2: string[] = ['1', '2', '3'];
const data3: number[] | string[] = [1, 2, 3];
const data4: (number | string)[] = [1, 2, '3'];
