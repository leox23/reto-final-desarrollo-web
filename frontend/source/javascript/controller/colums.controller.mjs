'use strict'

import { ColumnsView } from '../view/columns.view.mjs'
import { ColumnModel } from '../model/column.model.mjs'
import { TasksService } from '../model/service/tasks.service.mjs';

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

        columnsView.init(columnsRaw)
    }

    createNewTask(newTaskName, newTaskDescription, deadlineDate, actualColumn, actualBoard){
        const taskService = new TasksService();
        taskService.createNewTask(newTaskName, newTaskDescription, deadlineDate, actualColumn, actualBoard)
    }

    changeTaskColumn(taskId, columnIndex){
        const taskService = new TasksService();
        taskService.updateTaskColumn(taskId, columnIndex)
    }

    deleteTaskController(taskId, taskContainer){
        const taskService = new TasksService();
        taskService.deleteTask(taskId, taskContainer)
    }

    modifyTask(taskId, newtaskTitle, newDeadLine, newDescription){
        const taskService = new TasksService();
        taskService.updateTask(taskId, newtaskTitle, newDeadLine, newDescription)
    }
}