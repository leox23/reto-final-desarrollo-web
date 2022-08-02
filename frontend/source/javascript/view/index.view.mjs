"use strict";

import { BoardsView } from "./components/boards.view.mjs";
import { Header } from "./components/header.view.mjs";

/**
 * Clase que es el punto de entrada en cuanto a vistas, es ejecutado por IndexController class
 */
export class IndexView {
  #board;
  #header;
/**
 * Cambio de titulo e instanciamiento de vistas a usar
 */
  constructor() {
    document.title = "My Krello - Boards";
    this.#header = new Header();
    this.#board = new BoardsView();
  }

  init(boardsResult) {
    this.#header.init();
    this.#board.init(boardsResult)
  }
}
