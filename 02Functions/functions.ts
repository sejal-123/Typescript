function addNum(num: number) {
    console.log(num * 10);
    return num + 2;
}

// addNum('S'); // here as when we don't specify the type, it allows string also to be passed
addNum(10);

function toUpper(val: string) {
    return val.toUpperCase();
}

// toUpper(10);
toUpper('Sejal');

function signupUser(username: string, email: string, isPaid: boolean){
    console.log(username, email, isPaid);
}

let test = (username: string, email: string, isPaid: boolean = false) => {}

signupUser('sej', 'sej@s.com', true);
test('s', 's');