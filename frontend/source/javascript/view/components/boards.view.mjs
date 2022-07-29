'use strict';

export class BoardsView {
    #content;

    constructor() {
        //this.#container = document.querySelector('#container');
    }

    #boardHtml(){
        return `<p>LeonelMira</p>`
    }

    init(){
        return this.#boardHtml();
    }
}
