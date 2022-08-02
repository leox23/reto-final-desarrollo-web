"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { ApiModel } from "../model/api.model.mjs";

// Services
import { BoardsService } from "../model/service/boards.service.mjs";

/**
 * Clase para ser intermediario de todo el control y estado de la vista index
 */
export class IndexController {
    #indexView;
    #fetchBoards;
    #apiModel;

    constructor() {
        this.#indexView = new IndexView();
        this.#fetchBoards = new  BoardsService();
        this.#apiModel = new ApiModel();

        
        //container de section
        const container = document.createElement('div')
        document.querySelector("body").append(container);
        container.id = "container"
    }

    async init() {
        const {KRELLO_URL_BASE} = Config
        this.#apiModel = await this.#fetchBoards.findAll(KRELLO_URL_BASE);
        const {data} = this.#apiModel
        this.#indexView.init(data);
    }

    /**
     * Metodo para interactuar con el servicio de api de creacion
     * @param {String} boardName Nombre del board a crear
     */
    saveBoard(boardName) {
        //api crear nuevo board
        this.#fetchBoards.create(boardName)
    }
/**
 * Metodo para interactuar con el servicio de api de borrar board
 * @param {Int} boardId El id del board a borrar
 */
    deleteBoard(boardId){
        this.#fetchBoards.delete(boardId)
    }

    /**
     * Metodo para interactuar con el servicio de api de cambio de nombre de board
     * @param {Int} boardId El id del board a cambiar nombre
     * @param {String} newName Nuevo nombre del board
     */
    update(boardId, newName){
        this.#fetchBoards.update(boardId, newName)
    }
}
export const index = new IndexController();
index.init();