'use strict';

import { Config } from "../../config.mjs"
import { IndexController } from "../../controller/index.controller.mjs";

export class BoardsService {


    findAll(URL_BASE, END_POINT = "boards") {
        return fetch(URL_BASE + END_POINT).then(response => response.json());
    }

    findById(){

    }

    delete(boardId){
        return fetch(`http://localhost:8080/api/v1/board/${boardId}`,
            {method: 'DELETE'},
        )
        .then((response) => {
            console.log(response)
            const indexController = new IndexController();
            indexController.init()
        })
        .catch(err => console.error(err));
    }

    update(boardId, newName){
        console.log("desde dentro de service update");
        return fetch(`http://localhost:8080/api/v1/board/${boardId}`,{
            method: 'PUT',
            body: JSON.stringify(
                {
                    "name": `${newName}`
                }
            ),
            headers: {
                'Content-Type': 'application/json'                
            }
        })
        .then((response) => {
            console.log(response)
            const indexController = new IndexController();
            indexController.init()
        })
        .catch(err => console.error(err));
    }

    create(boardName){
        return fetch("http://localhost:8080/api/v1/board/", {
            method: 'POST',
            body: JSON.stringify(
                {
                    "name": `${boardName}`
                }
            ),
            headers: {
                'Content-Type': 'application/json'                
            }
        })
        .then((response) => {
            console.log(response)
            const indexController = new IndexController();
            indexController.init()
        })
        .catch(err => console.error(err));
    }
}