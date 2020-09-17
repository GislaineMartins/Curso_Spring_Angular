export interface DaoInterface<T>{ // T é usado para dizer ue é generico

    tableName: string;

    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number): boolean;
    find(id: number): T;
    findAll(): [T];



}