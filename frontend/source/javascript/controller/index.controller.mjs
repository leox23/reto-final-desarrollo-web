"use strict";

// Services
import { MyUsersService } from "../model/services/my-users.service.mjs";

// Views
import { IndexxView } from "../view/indexx.view.js";



class IndexController {
    #View;
    //#privateMyUsersService;

    constructor() {
        //const headerData = ['nombre', 'apellidos', 'correo', 'teléfono', 'creado', 'acciones'];
        //this.#privateView = new IndexView(headerData);
        //this.#privateMyUsersService = new MyUsersService();
        this.#View = new IndexxView();
    }

    init() {
        /*
        this.#privateView.Data = await this.#privateMyUsersService.getUsers();
        this.#privateView.init();
        */
        this.#View.init();
    }
}
export const index = new IndexController();
index.init();