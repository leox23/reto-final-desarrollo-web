"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { ApiModel } from "../model/api.model.mjs";

// Services
import { BoardsService } from "../model/service/boards.service.mjs";

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

    saveBoard(boardName) {
        //api crear nuevo board
        this.#fetchBoards.create(boardName)
    }

    deleteBoard(boardId){
        this.#fetchBoards.delete(boardId)
    }

    update(boardId, newName){
        this.#fetchBoards.update(boardId, newName)
    }
}
export const index = new IndexController();
index.init();