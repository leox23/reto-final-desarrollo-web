'use strict';

export class BoardsView {
    #container;

    constructor() {
        this.#container = document.querySelector('#container');
    }

    #firstInflater(){
        this.container.innerHTML = "<p>LeonelMira</p>"
    }

    init(){
        this.#firstInflater()
    }
}
