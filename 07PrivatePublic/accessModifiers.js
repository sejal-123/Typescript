// class User {
//     username: string; // by default when we don't specify access modifier, it is public
//     email: string;
//     private id: string; // for js, we use # for private and in ts we use private keyword
//     readonly city: string = 'Jaipur';
//     constructor(uname: string, em: string) {
//         this.username = uname;
//         this.email = em;
//     }
// }
// Can also be written as
var User = /** @class */ (function () {
    function User(username, email) {
        this.username = username;
        this.email = email;
        this.id = 'test';
        this.city = 'Jaipur';
        console.log(username, email, this.id);
    }
    return User;
}());
var u = new User('test', 't@t.com');
