'use strict';

export class IndexView {
    #privateBody;

    constructor() {
        document.title = "My Krello - Boards";
        this.#privateBody = document.querySelector('body');
    }

    init(name) {
        const paragraph = this.#privateCreateParagraph();
        paragraph.innerHTML = `Hello World!!! ${name}`;
        this.#privateBody.append(paragraph);
    }

    #privateCreateParagraph() {
        return document.createElement('p');
    }

}