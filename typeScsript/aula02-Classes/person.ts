export class Person{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    public showAge(age: number){
        console.log(`${this.name} has ${age} years old`);
    }

}