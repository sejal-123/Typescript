// In ts, we  can define type aliases by using type keyword and them specifying what it will contain
function createUser(user) {
    return { name: 'Sej', age: 24, email: '' };
}
createUser({ name: 'Sej', age: 24, email: '' });
var usr1 = {
    _id: '123',
    name: 'test',
    age: 24,
    email: 'h'
};
usr1.age = 24;
var card = {
    name: '123',
    exp: '123',
    cvv: '123'
};
