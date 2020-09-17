import { DaoInterface } from "./dao-interface";
import {DAO} from './dao'
import {Person} from '../aula02-Classes/person'


let dao: DaoInterface<Person> = new DAO<Person>();
let person: Person = new Person("Mike");

dao.insert(person);