'use strict';

import { InputTextModal } from "./input.text.modal.view.mjs";
import { ColumnsController } from "../../controller/colums.controller.mjs";
import { IndexController } from "../../controller/index.controller.mjs";
import { ColumnsView } from "../columns.view.mjs";

export class BoardsView {
    #nodeBody;
    #columsController;

    constructor() {        
        this.#nodeBody = document.querySelector('body')
        this.#columsController = new ColumnsController()
    }

    init(data) {
        // desesctructurando datos
        console.log("data recibida");
        console.log(data);

        //container de section
        const container = this.#createContainer()
        this.#nodeBody.append(container);

        //agregar titulo y container de boards
        container.innerHTML = this.#addTitleSection()
        container.id = "container"

        //agregar boton crear y boards a sus containers
        document.querySelector('.all-boards').innerHTML = this.#addButtonInputText() + this.#addBoards(data).join('')
        
        //establecer de fondo modal create board
        this.#setInputTextModal()

        //configurar listeners del board container
        //const nodes = document.querySelectorAll(".board-container")
        //this.#addClickListener(nodes,data)
        //this.#onEventBoard(data)

        //listener de boton create board
        const createBtn = document.querySelector(".btn-create-board")
        createBtn.addEventListener('click', function() {
            const inputTextModal = new InputTextModal();
            inputTextModal.showModal("Nuevo tablero", "Crear", "Nombre del tablero")
        })

        //dropdown show on hover y hide on out
        const dropdowns = document.querySelectorAll(".dropdown")
        const dropdownsLists = document.querySelectorAll(".dropdown-menu")
        dropdowns.forEach((dropdown, index) => {
            dropdown.addEventListener("mouseover", () => { 
                dropdownsLists[index].classList.add("show");
            })
            
            dropdown.addEventListener("mouseout", () => { 
                dropdownsLists[index].classList.remove("show");
            })
        })
        
        
        const optionEliminar = document.querySelectorAll(".option-eliminar")
        optionEliminar.forEach( (item) => {
            item.addEventListener("click", () => {
                const indexController = new IndexController()
                const boardId = item.getAttribute("data-board-id")
                indexController.deleteBoard(boardId)
            })
        })
        

        const optionCambiarNombre = document.querySelectorAll(".option-cambiar-nombre")
        optionCambiarNombre.forEach( (item) => {
            item.addEventListener("click", () => {
                const indexController = new IndexController()
                const boardId = item.getAttribute("data-board-id")
                console.log("entre a la cambio nombre listener")
                console.log(boardId);
                indexController.renameBoard(boardId, newName)
            })
        })

    }


    /*
    #addClickListener(node, data){
        console.log("data de listener");
        console.log(data);
        Array.from(node).map(function(item,index){
            item.addEventListener('click', function() {
                const columns = new ColumnsView()
                console.log("entre al listener");
                columns.init(data[index])
            })
        })
    }
*/


    #onEventBoard(data) {
        console.log("desde on event boadr");
        console.log(data);
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, (e) => {
              if (e.target.closest(selector)) {
                e.preventDefault();
                handler(e);
              }
            });
          };

          const nodes = document.querySelectorAll(".board-container")
          const parent = document.querySelector(".all-boards") 

          on(document, "click", ".board-container", (e) => {

            const index = e.target.getAttribute("data-index-node")
            const columns = new ColumnsController()
            console.log("probando maxima");
            console.log(index);
            columns.init(data[index])
/*
            #addClickListener(node, data){
                Array.from(node).map(function(item,index){
                    item.addEventListener('click', function() {
                    })
                })
            }
            */
        });
    }

    /*
    #optionsButtonListener() {
        const dropdowns = document.querySelectorAll(".dropdown")
        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener("click", () => {
            })
        }) 
    }
    */

    #setInputTextModal(){
        const inputTextModal = new InputTextModal();
        inputTextModal.init()
    }

    #createContainer() {
        return document.createElement('div')
    }

    #addTitleSection(){
        return `
        <div class="container ps-3">
            <h1 style="border-bottom: 1px solid #F7F7F7;width: fit-content;">Tableros</h1>
            <p class="fs-6">Cantidad de tableros 1/1</p>
        </div>
    
    <div class="container justify-content-center all-boards d-flex flex-row flex-wrap align-content-between bd-highlight">
    </div>
    `
    }

    #addButtonInputText() {
        return `
        <button class="btn btn-create-board btn-ligth align-self-center mx-2" style=" height: auto;" type="button">

            crear tablero

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
    </button>
    `
    }

    #addBoards(data) {
        return data.map( (item, index) => {
            return `
        <div id="container" class="board-container me-4 mb-5" data-index-node="${index}">
            <div class="card" style="width: 18rem;">
                <img src="./images/tempGalaxi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title align-self-center">${item.name}</h5>
                        <div class="dropdown">
                            <button class="btn btn-options btn-ligth" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                </svg>
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item option-cambiar-nombre" data-board-id="${item.id}" style="cursor: pointer;">Editar nombre</a></li>
                            <li><a class="dropdown-item option-eliminar" data-board-id="${item.id}" style="cursor: pointer;">Eliminar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        })
    }
}