"use strict";

import { IndexController } from "../../controller/index.controller.mjs";

/**
 * Clase que contiene los modales para la vista index/boards, para crear tablero y cambiar nombre de tablero
 */
export class InputTextModal {
  #nodebody;

  constructor() {
    this.#nodebody = document.querySelector("body");
  }
  /**
   * Metodo para estructurar el contenido del modal para crear nuevo tablero
   * @param {String} title Titulo del modal
   * @param {String} btnName Nombre del boton accion derecho del
   * @param {String} placeHolder Texto del input cuando esta vacion
   */
  newBoardModal(title, btnName, placeHolder) {
    const modalContainer = document.querySelector(".modal");

    modalContainer.innerHTML = this.#updateDetailModalContent(
      title,
      btnName,
      placeHolder
    );

    const myModal = new bootstrap.Modal(
      document.getElementById("inputTextModal")
    );
    myModal.show();

    //agregando listener a guardar
    const saveBtn = document.querySelector(".save-btn");
    saveBtn.addEventListener("click", () => {
      const indexController = new IndexController();
      const name = document.querySelector(".input-board-name").value;
      myModal.hide();
      indexController.saveBoard(name);
    });
  }

  /**
   *
   * @param {String} title Nombre del Modal title
   * @param {String} btnName Nombre del boton accion derecho
   * @param {String} placeHolder Texto del input vacio
   * @param {Int} boardId Numero de id del tablero a modificar
   */
  renameBoardModal(title, btnName, placeHolder, boardId) {
    const modalContainer = document.querySelector(".modal");

    modalContainer.innerHTML = this.#updateDetailModalContent(
      title,
      btnName,
      placeHolder
    );

    const myModal = new bootstrap.Modal(
      document.getElementById("inputTextModal")
    );
    myModal.show();

    //agregando listener a guardar
    const saveBtn = document.querySelector(".save-btn");
    saveBtn.addEventListener("click", () => {
      const indexController = new IndexController();
      const newName = document.querySelector(".input-board-name").value;
      myModal.hide();
      indexController.update(boardId, newName);
    });
  }

  /**
   * Inicializacion del modal, colocando el container dentro de body
   */
  init() {
    this.#nodebody.innerHTML += this.#createModalContainer();
  }
  /**
   * Metodo para estructurar el container del modal
   * @returns El contenido html del modal para ser usado en esta vista index
   */
  #createModalContainer() {
    return `
      <div class="modal fade" id="inputTextModal" tabindex="-1" aria-labelledby="inputTextModalLabel" aria-hidden="true">
      </div>
      `;
  }

  /**
   *
   * @param {String} title Titulo del Modal
   * @param {String} btnName Nombre del boton accion deechos
   * @param {String} placeHolder Texto del input vacio
   * @returns
   */
  #updateDetailModalContent(title, btnName, placeHolder) {
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
      `;
  }
}
