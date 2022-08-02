"use strict";

import { ColumnsController } from "../../controller/colums.controller.mjs"
export class TasksService {
  //pendiente por mandar deadlineDate, pero se evita porque no se tiene bien formateada aun
  createNewTask(
    newTaskName,
    newTaskDescription,
    deadlineDate,
    actualColumn,
    actualBoard
  ) {
    let delivery_date;
    if (deadlineDate != "" && deadlineDate != null && deadlineDate != undefined){
      let date = new Date(deadlineDate);
      delivery_date = date.toISOString();
    } else {
      delivery_date = ""
    }
    //pendiente organizar endpoint y urlbase por varibale
    return fetch(`http://localhost:8080/api/v1/newTask/${actualBoard}`, {
      method: "POST",
      body: JSON.stringify({
        name: `${newTaskName}`,
        description: `${newTaskDescription}`,
        board_id: `${actualBoard}`,
        delivery_date: `${delivery_date}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const columnsController = new ColumnsController()
        columnsController.refreshView()
      })
      .catch((err) => console.error(err));
  }

  updateTaskColumn(taskId, columnIndex) {
    return fetch(
      `http://localhost:8080/api/v1/movingtask/${taskId}/${columnIndex}`,
      { method: "GET" }
    )
      .then((response) => {
        const columnsController = new ColumnsController()
        columnsController.refreshView()

      })
      .catch((err) => console.error(err));
  }

  deleteTask(taskId, taskContainer) {
    return fetch(`http://localhost:8080/api/v1/deleteTask/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => {
        taskContainer.remove();
      })
      .catch((err) => console.error(err));
  }

  updateTask(taskId, newtaskTitle, newDeadLine, newDescription) {
    let delivery_date;
    if (newDeadLine != "" && newDeadLine != null && newDeadLine != undefined){
      let date = new Date(newDeadLine);
      delivery_date = date.toISOString();
    } else {
      delivery_date = ""
    }
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
        const columnsController = new ColumnsController()
        columnsController.refreshView()
      })
      .catch((err) => console.error(err));
  }
}
