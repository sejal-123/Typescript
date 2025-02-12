// In ts, we  can define type aliases by using type keyword and them specifying what it will contain

type User = {
    name: string,
    age: number,
    email: string
}

type Mystring = string;

function createUser(user: User): User {
    return { name: 'Sej', age: 24, email: '' };
}

createUser({ name: 'Sej', age: 24, email: '' });

type User2 = {
    readonly _id: string;
    name: string,
    age: number,
    email: string
    credCardDetail?: string // optional field
}

let usr1: User2 = {
    _id: '123',
    name: 'test',
    age: 24,
    email: 'h'
};

usr1.age = 24;
// usr1._id = '234'; cannot do this as it is read only

// Combination of aliases

type cardName = {
    name: string;
}

type cardExp = {
    exp: string;
}

type cardDetail = cardName & cardExp & {
    cvv: string
};

let card: cardDetail = {
    name: '123',
    exp: '123',
    cvv: '123'
}



