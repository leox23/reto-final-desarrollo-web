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
    /*
    moment.locale('es');
console.log(moment(Date.now()).fromNow()); 
console.log(moment(Date.now())); 
console.log(moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'));
*/

    
  }

  init() {
    this.#header.init();
    this.#board.init()
  }
}
