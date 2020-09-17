"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.showAge = function (age) {
        console.log(this.name + " has " + age + " years old");
    };
    return Person;
}());
exports.Person = Person;
