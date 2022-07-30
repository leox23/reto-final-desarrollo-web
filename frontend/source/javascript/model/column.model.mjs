export class ColumnModel {
    id;
    name;
    createdAt;
    updatedAt;

    /*
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
    */

    columnAdapter(data){
        return data.map((item, index)=> {
            return {
                id: item.id,
                name: item.id_column.name,
                createdAt: item.id_column.createdAt,
                updatedAt: item.id_column.updatedAt,
                tasks: item.id_column.tasks_column
            }

        })
    }
/*
    get Id(){
        return this.#id;
    }

    set Id(id){
        this.#id = id;
    }

    get Name(){
        return this.#name;
    }

    set Name(name){
        this.#name = name;
    }

    
    get CreatedAt(){
        return this.#createdAt
    }

    set CreatedAt(createdAt){
        this.#createdAt = createdAt;
    }

    get UpdatedAt(){
        return this.#updatedAt;
    }

    set UpdatedAt(updatedAt){
        this.#updatedAt = updatedAt;
    }
    */
}