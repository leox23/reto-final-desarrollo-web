"use strict";

import { ColumnsView } from "../view/columns.view.mjs";
import { ColumnModel } from "../model/column.model.mjs";
import { TasksService } from "../model/service/tasks.service.mjs";
import { Config } from "../config.mjs";
import { BoardsService } from "../model/service/boards.service.mjs";
import { ApiModel } from "../model/api.model.mjs";
import { Header } from "../view/components/header.view.mjs";

/**
 * Clase para ser intermediario de todo el control y estado de la vista Controller
 */
export class ColumnsController {
  #apiModel;

  constructor() {
    this.#apiModel = new ApiModel();
  }

  init(data) {
    const columnsView = new ColumnsView();
    let columnsRaw = {};
    columnsRaw = data.columnsForBoard;

    let columnList = [];

    columnsRaw.forEach((column) => {
      columnList.push(
        new ColumnModel(
          column.id,
          column.id_column.name,
          column.id_column.createdAt,
          column.id_column.updatedAt,
          column.id_column.tasks_column
        )
      );
    });
    columnsView.init(columnList);
  }

  createNewTask(
    newTaskName,
    newTaskDescription,
    deadlineDate,
    actualColumn,
    actualBoard
  ) {
    const taskService = new TasksService();
    taskService.createNewTask(
      newTaskName,
      newTaskDescription,
      deadlineDate,
      actualColumn,
      actualBoard
    );
  }

  changeTaskColumn(taskId, columnIndex) {
    const taskService = new TasksService();
    taskService.updateTaskColumn(taskId, columnIndex);
  }

  deleteTaskController(taskId, taskContainer) {
    const taskService = new TasksService();
    taskService.deleteTask(taskId, taskContainer);
  }

  modifyTask(taskId, newtaskTitle, newDeadLine, newDescription) {
    const taskService = new TasksService();
    taskService.updateTask(taskId, newtaskTitle, newDeadLine, newDescription);
  }

  async refreshView() {
    const { KRELLO_URL_BASE } = Config;
    const boardsService = new BoardsService();
    this.#apiModel = await boardsService.findAll(KRELLO_URL_BASE);
    const { data } = this.#apiModel;

    //reconocer en que board estaba actualmente
    const nodeBody = document.querySelector("body");
    const objBoardIndexSelected = nodeBody.getAttribute(
      "objBoardIndexSelected"
    );

    //borrar todo
    document.querySelector("#container").innerHTML = "";
    //container de section
    const container = document.createElement("div");
    document.querySelector("body").append(container);
    container.id = "container";
    //agregar titulo y container de boards)
    const header = new Header();
    header.init();
    this.init(data[objBoardIndexSelected]);
  }
}
