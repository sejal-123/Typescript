// class User {
//     username: string; // by default when we don't specify access modifier, it is public
//     email: string;
//     private id: string; // for js, we use # for private and in ts we use private keyword
//     readonly city: string = 'Jaipur';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(uname: string, em: string) {
//         this.username = uname;
//         this.email = em;
//     }
// }
// Can also be written as
var User5 = /** @class */ (function () {
    function User5(username, email) {
        this.username = username;
        this.email = email;
        this.id = 'test';
        this.city = 'Jaipur';
        this.test = 'abc';
        console.log(username, email, this.id);
    }
    return User5;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person.prototype.hello = function () {
        this.test = 'test';
    };
    return Person;
}(User5));
var u = new User5('test', 't@t.com');
