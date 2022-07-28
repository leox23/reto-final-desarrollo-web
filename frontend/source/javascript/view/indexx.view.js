'use strict';

import { BoardsView } from "./components/boards.view.js";

export class IndexxView {

    constructor() {

    }

    init(){
        let boardsView = new BoardsView();
        boardsView.init()
    }
}