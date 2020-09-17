import { Person } from "../aula02-Classes/person";
import { DaoInterface } from "./dao-interfaces";
import { PersonDAO } from "./person-dao";

let personDao : DaoInterface = new PersonDAO();
let person: Person = new Person("Mike");

personDao.insert(person)