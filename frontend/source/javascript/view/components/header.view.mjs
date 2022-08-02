'use strict'

import { BoardsView } from "./boards.view.mjs";
import { IndexController } from "../../controller/index.controller.mjs";

export class Header {
    #logoPath;
    #body;

    constructor () {
        this.#logoPath = "./images/krello-logo.svg"
        this.#body = document.querySelector('body')
    }

    init(){
        this.#body.innerHTML = this.#contentHeader()
    }

    #contentHeader(){
        return `<div class="container-fluid w-100 ps-5 mb-4 d-flex align-items-center" style="
        height:80px;
        border-bottom:2px solid #F7F7F7;
        background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,255,102,0.3113620448179272) 100%);
    ">
        <a id="goHome" href="http://127.0.0.1:5502/" style="text-decoration:none;"><div class="logo-title-container d-flex align-items-center" style="cursor:pointer;color:black;">
                <img src=${this.#logoPath} style="
                width:60px;
                height:60px;" alt="Krello logo">

                <h1 class="ms-3">Krello</h1>
            </div> 
        </a>
            
        
        </div>
        `
    }
}
