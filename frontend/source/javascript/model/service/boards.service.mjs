'use strict';

import { Config } from "../../config.mjs"

export class BoardsService {

    findAll() {
        const {KRELLO_URL_BASE} = Config
        return fetch(KRELLO_URL_BASE + "boards").then(response => response.json());
    }

    findById(){

    }

    delete(){

    }

    update(){

    }
}