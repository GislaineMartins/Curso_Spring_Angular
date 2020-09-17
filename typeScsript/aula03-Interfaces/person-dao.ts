import { DaoInterface } from "./dao-interfaces";
import {Person} from   '../aula02-Classes/person';

export class PersonDAO implements DaoInterface{

    tableName: string;

    insert(person: Person): boolean{
        console.log("inserting...", person.toString());
        return true;
    }

    update(person: Person): boolean{
        return  true;
    }

    delete(id: number): boolean{
        return true;
    }

    find(id: number): Person{
        return null;
    }

    findAll(): [Person]{
        return [new Person("Mike")];
    }

}