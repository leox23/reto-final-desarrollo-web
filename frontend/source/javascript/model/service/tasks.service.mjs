"use strict";

import { ColumnsView } from "../../view/columns.view.mjs";
import { BoardsService } from "./boards.service.mjs";
import { Config } from "../../config.mjs";

export class TasksService {
  //pendiente por mandar deadlineDate, pero se evita porque no se tiene bien formateada aun
  createNewTask(
    newTaskName,
    newTaskDescription,
    deadlineDate,
    actualColumn,
    actualBoard
  ) {
    let date = new Date(deadlineDate);
    let delivery_date = date.toISOString();
    //pendiente organizar endpoint y urlbase por varibale
    return fetch(`http://localhost:8080/api/v1/newTask/${actualBoard}`, {
      method: "POST",
      body: JSON.stringify({
        name: `${newTaskName}`,
        description: `${newTaskDescription}`,
        columID: `${actualColumn}`,
        board_id: `${actualBoard}`,
        delivery_date: `${delivery_date}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);

        async function adapter() {
          const { KRELLO_URL_BASE } = Config;
          const boardsService = new BoardsService();
          let apiModel = await boardsService.findAll(KRELLO_URL_BASE);
          const { dataRaw } = apiModel;

          const columnView = new ColumnsView();
          columnView.init(await dataRaw[actualBoard]);
        }
      })
      .catch((err) => console.error(err));
  }

  updateTaskColumn(taskId, columnIndex) {
    return fetch(
      `http://localhost:8080/api/v1/movingtask/${taskId}/${columnIndex}`,
      { method: "GET" }
    )
      .then((response) => {
        console.log(response);
        /*const indexController = new IndexController();
            indexController.init()*/
      })
      .catch((err) => console.error(err));
  }

  deleteTask(taskId, taskContainer) {
    return fetch(`http://localhost:8080/api/v1/deleteTask/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        taskContainer.remove();
      })
      .catch((err) => console.error(err));
  }

  updateTask(taskId, newtaskTitle, newDeadLine, newDescription) {
    let date = new Date(newDeadLine);
    let delivery_date = date.toISOString();
    //pendiente organizar endpoint y urlbase por varibale
    return fetch(`http://localhost:8080/api/v1/updateTask/${taskId}`, {
      method: "PUT",
      body: JSON.stringify({
        name: `${newtaskTitle}`,
        description: `${newDescription}`,
        delivery_date: `${delivery_date}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        console.log("Actualizado con exito");
      })
      .catch((err) => console.error(err));
  }
}
