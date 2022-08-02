'use strict'

/**
 * Clase modalo sencillo para recibir el resultado de la api
 */
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