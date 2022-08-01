'use strict'

import { ColumnsView } from '../view/columns.view.mjs'
import { ColumnModel } from '../model/column.model.mjs'

export class ColumnsController {
    
    init(data) {
        const columnsView = new ColumnsView();
        let columnsRaw = data.columnsForBoard;

        let columnList = [];

        columnsRaw.forEach(column => {
            columnList.push( new ColumnModel(column.id,
                column.id_column.name,
                column.id_column.createdAt,
                column.id_column.updatedAt,
                column.id_column.tasks_column
            ))
        })
        console.log("🚀 ~ file: colums.controller.mjs ~ line 13 ~ ColumnsController ~ init ~ columnList", columnList)

        columnsView.init(columnsRaw)
    }
}