'use strict';

import { IndexController } from "../../controller/index.controller.mjs";

export class InputTextModal {
  #nodebody;

  constructor(){
    this.#nodebody = document.querySelector("body")
  }

    newBoardModal(title, btnName, placeHolder){
      const modalContainer = document.querySelector('.modal')
      
      modalContainer.innerHTML = this.#updateModalContent(title, btnName,placeHolder)
      
      const myModal = new bootstrap.Modal(document.getElementById('inputTextModal'))
      myModal.show()
      
      //agregando listener a guardar
      const saveBtn = document.querySelector(".save-btn")
      saveBtn.addEventListener("click", () => {
        const indexController = new IndexController();
        const name = document.querySelector(".input-board-name").value;
        myModal.hide()
        indexController.saveBoard(name)
      })
    }


    renameBoardModal(title, btnName, placeHolder, boardId){
      const modalContainer = document.querySelector('.modal')
      
      modalContainer.innerHTML = this.#updateModalContent(title, btnName,placeHolder)
      
      const myModal = new bootstrap.Modal(document.getElementById('inputTextModal'))
      myModal.show()
      
      //agregando listener a guardar
      const saveBtn = document.querySelector(".save-btn")
      saveBtn.addEventListener("click", () => {
        const indexController = new IndexController();
        const newName = document.querySelector(".input-board-name").value;
        myModal.hide()
        indexController.update(boardId, newName)
      })
    }


    init() {
      this.#nodebody.innerHTML += this.#createModalContainer()
    }
    
    #createModalContainer() {
      return `
      <!--container del modal-->
      <div class="modal fade" id="inputTextModal" tabindex="-1" aria-labelledby="inputTextModalLabel" aria-hidden="true">
      </div>
      `
  }

    #updateModalContent(title, btnName, placeHolder){
      return `
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inputTextModalLabel">${title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
          <div class="modal-body">
          <input type="text" class="form-control input-board-name" placeholder="${placeHolder}" aria-label="Recipient's username" aria-describedby="basic-addon2">
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary save-btn">${btnName}</button>
        </div>
      </div>
    </div>
      `
    }

}