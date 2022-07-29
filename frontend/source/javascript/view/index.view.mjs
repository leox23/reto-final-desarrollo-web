"use strict";

import { BoardsView } from "./components/boards.view.mjs";
import { Header } from "./components/header.view.mjs";

export class IndexView {
  #board;
  #header;

  constructor() {
    document.title = "My Krello - Boards";
    this.#header = new Header();
    this.#board = new BoardsView();
  }

  init() {
    this.#header.init();
    this.#board.init()
  }
}
