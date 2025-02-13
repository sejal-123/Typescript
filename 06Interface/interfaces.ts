interface User {
    readonly dbId: number,
    name: string,
    email: string,
    googleId?: string,
    startTrial: () => string,
    getCoupon(couponName: string, value: number): string
}

const usr: User = {
    dbId: 10,
    name: 'test',
    email: 'h@h.com',
    startTrial: () => {
        return 'test'
    },
    getCoupon: (name: 'hh', val: 10) => {
        return ''
    }
}

// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.

interface Kitten {
    purrs: boolean;
}

interface Kitten {
    colour: string;
}

// In the other case a type cannot be changed outside of
// its declaration.

// type Puppy = {
//     color: string;
// };

// type Puppy = {
//     toys: number;
// };
  

// Type aliases support extending other type aliases by intersection type. The & symbol is used to create an intersection type. Type aliases also extends interface types.

// Interface Type also supports extending other interfaces by using the `extends` keyword. Interface type also extends type aliases.
