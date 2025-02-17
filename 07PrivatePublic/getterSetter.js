var User1 = /** @class */ (function () {
    function User1(username, email) {
        this.username = username;
        this.email = email;
        this.id = 'test';
        this.city = 'Jaipur';
        console.log(username, email, this.id);
    }
    User1.prototype.setId = function (id) {
        this.id = id;
    };
    User1.prototype.getId = function () {
        return this.id;
    };
    return User1;
}());
var u1 = new User1('test', 't@t.com');
u1.setId('22');
u1.getId();
