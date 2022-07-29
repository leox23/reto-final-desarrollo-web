"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";
import { Header } from "../view/components/header.view.mjs";

// Models

// Services

export class RickController {
    #indexView;
    #header;

    constructor() {
        this.#indexView = new IndexView();
        this.#header = new Header();
    }

    init() {
        this.#header.init()
        this.#indexView.init();
    }
}

export const index = new RickController();
index.init();