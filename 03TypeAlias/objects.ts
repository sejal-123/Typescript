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