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
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    // difference between inteface and abstract class is that abstract class can have concrete methods but interface cannot
    Person.prototype.getReels = function () {
        // some cmplex operation
        return 8;
    };
    return Person;
}());
// Cannot create an instance of an abstract class.
// const p = new Person('1', 'Sej');
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, name, subject) {
        var _this = _super.call(this, id, name) || this;
        _this.id = id;
        _this.name = name;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.getSepia = function () {
        console.log('hello');
    };
    return Teacher;
}(Person));
var t = new Teacher('1', 'Sej', 'test');
