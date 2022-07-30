'use strict'

import { BoardsView } from "./boards.view.mjs";

export class Header {
    #logoPath;
    #body;

    constructor () {
        this.#logoPath = "./images/krello-logo.svg"
        this.#body = document.querySelector('body')
    }

    init(){
        this.#body.innerHTML = this.#contentHeader()
        this.#addClickListener('.logo-title-container')
    }

    #addClickListener(node){
        document.querySelector(node).addEventListener('click', function(){
            const boards = new BoardsView();
            boards.init()
        })
    }

    #contentHeader(){
        return `<div class="container-fluid w-100 ps-5 mb-4 d-flex align-items-center" style="
        height:80px;
        border-bottom:2px solid #F7F7F7;
        background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,255,102,0.3113620448179272) 100%);
    ">
            <div href="alert(leo)" class="logo-title-container d-flex align-items-center">
                <img src=${this.#logoPath} style="
                width:60px;
                height:60px;" alt="Krello logo">

                <h1 class="ms-3">Krello</h1>
            </div>
        
        </div>
        `
    }
}