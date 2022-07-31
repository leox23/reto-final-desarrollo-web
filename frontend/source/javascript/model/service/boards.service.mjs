'use strict';

import { Config } from "../../config.mjs"

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
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    update(boardId, newName){
        return fetch(`http://localhost:8080/api/v1/board/${boardId}`,
            {method: 'PUT',
            body: JSON.stringify(
                {
                    "name": `${newName}`,
                }
            )},
        )
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    create(boardName){
        return fetch("http://localhost:8080/api/v1/board/", {
            method: 'POST',
            body: JSON.stringify(
                {
                    "name": `${boardName}`,
                }
            ),
            headers: {
                'Content-Type': 'application/json'                
            }
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
}