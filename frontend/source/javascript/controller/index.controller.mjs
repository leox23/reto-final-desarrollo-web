"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models

// Services

export class RickController {
    #privateView;

    constructor() {
        this.#privateView = new IndexView();
    }

    async init() {
        this.#privateView.init("leonel");
    }
}

export const index = new RickController();
index.init();