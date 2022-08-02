'use strict';

/**
 * Clase para instanciar objetos tipo COlumnModel
 */
export class ColumnModel {
    id;
    name;
    createdAt;
    updatedAt;
    tasks; //tareas pertenecientes a columna

   //Atributos necesarios para la instanciacion de los objetos
    constructor(id, name, createdAt, updatedAt, tasks) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.tasks = tasks;
    }


    get Id(){
        return this.id;
    }

    set Id(id){
        this.id = id;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        this.name = name;
    }

    
    get CreatedAt(){
        return this.createdAt
    }

    set CreatedAt(createdAt){
        this.createdAt = createdAt;
    }

    get UpdatedAt(){
        return this.updatedAt;
    }

    set UpdatedAt(updatedAt){
        this.updatedAt = updatedAt;
    }

    get ColumnsForBoard(){
        return this.columnsForBoard;
    }

    set ColumnsForBoard(columnsForBoard){
        this.columnsForBoard = columnsForBoard;
    }
}