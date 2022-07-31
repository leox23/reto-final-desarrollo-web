'use strict'

import { ColumnsView } from '../view/columns.view.mjs'

export class ColumnsController {
    

    constructor() {

    }

    init(boardColumns) {
        const columns = new ColumnsView()
        columns.init(boardColumns)
    }
}