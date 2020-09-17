"use strict";
exports.__esModule = true;
var person_1 = require("../aula02-Classes/person");
var person_dao_1 = require("./person-dao");
var personDao = new person_dao_1.PersonDAO();
var person = new person_1.Person("Mike");
personDao.insert(person);
