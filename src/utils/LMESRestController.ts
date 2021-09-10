import { LMESEntity } from "./LMESEntity";

export interface LMESQueryController<T extends LMESEntity>{

    findAll: ()=> Promise<T[]>;
    findOne: (id: string)=> Promise<T>;
    findByCriteria: (query: any)=> Promise<T[]>;

}

export interface LMESCommandController<T extends LMESEntity>{

    insertOne: (param: T)=> Promise<T>;
    updateOne: (param: T)=> Promise<T>;
    deleteOne: (id: string)=> Promise<boolean>;

}