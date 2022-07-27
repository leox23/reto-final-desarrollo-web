'use strict'

export class Board {
    #id;
    #name;
    #createdAt;
    #updatedAt;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

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
}