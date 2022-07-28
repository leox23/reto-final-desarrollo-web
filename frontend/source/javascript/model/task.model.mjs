export class Task {
    #id;
    //#idColumn; se relaciona solo en la base de datos?? 
    //#idBoard; se relaciona solo en la base de datos?? 
    #name;
    #description; 
    #deliveryDate; 
    #createdAt;
    #updatedAt;

    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.deliveryDate = data.deliveryDate;
        this.#createdAt = data.createdAt;
    }

    get Id() {
        return this.#id;
    }

    set Id(id) {
        this.#id = id;
    }

    get Name(){
        return this.#name
    }

    set Name(name){
        this.#name = name;
    }

    get Description() {
        return this.#descrption
    }

    set Description(descrption){
        this.#descrption = descrption;
    }

    get deliveryDate(){
        return this.#deliveryDate
    }

    set deliveryDate(deliveryDate){
        this.#deliveryDate = deliveryDate;
    }

    get CreatedAt(){
        return this.#createdAt
    }

    set CreatedAt(createdAt){
        this.#createdAt = createdAt;
    }

}