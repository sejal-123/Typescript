function getData(val: string): string { // always specify a return type
    return val;
}

getData('test');

const test1 = (val: number): number => { // return type in arrow function
    console.log(val);
    return val;
}

test1(10);

const heros = ['thor', 'ironman'];
heros.map((val: string): string => {
    return `hero is ${val}`;
})

// When we don't return anything return type is void
function consoleVal(val: number): void {
    console.log(val);
}

consoleVal(10);

// When we want to throw an error or terminate a program we specify never as it is never going to return anything, it will just throw error

function handleError(errMsg): never {
    throw new Error(errMsg);
}

handleError('test');