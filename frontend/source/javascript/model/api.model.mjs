'use strict'

export class ApiModel {
    #results;

    constructor(dataResult){
        this.#results = dataResult; 
    }

    getResults(){
        return this.#results
    }

    setResult(newResult) {
        this.#results = newResult;
    }
}