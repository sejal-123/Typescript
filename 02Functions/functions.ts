function addNum(num: number) {
    console.log(num * 10);
    return num + 2;
}

// addNum('S'); // here as when we don't specify the type, it allows string also to be passed
addNum(10);
