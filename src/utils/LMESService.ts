

export interface LMESQueryService<T>{

    findAll: () => Promise<T[]>;

    findByCriteria: () => Promise<T[]>;
    
    findById: (id: string) => Promise<T>; 
}

export interface LMESCommandService<T>{

    insertOne: (param: T) => Promise<T>;
    updateOne: (param: T) => Promise<T>; 
    deleteOne: (id: string) => Promise<void>;
    
}