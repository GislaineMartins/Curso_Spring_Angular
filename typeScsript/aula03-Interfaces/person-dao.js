"use strict";
exports.__esModule = true;
exports.PersonDAO = void 0;
var person_1 = require("../aula02-Classes/person");
var PersonDAO = /** @class */ (function () {
    function PersonDAO() {
    }
    PersonDAO.prototype.insert = function (person) {
        console.log("inserting...", person.toString());
        return true;
    };
    PersonDAO.prototype.update = function (person) {
        return true;
    };
    PersonDAO.prototype["delete"] = function (id) {
        return true;
    };
    PersonDAO.prototype.find = function (id) {
        return null;
    };
    PersonDAO.prototype.findAll = function () {
        return [new person_1.Person("Mike")];
    };
    return PersonDAO;
}());
exports.PersonDAO = PersonDAO;
