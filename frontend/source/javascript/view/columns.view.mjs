"use strict";

import { DetailsModal } from "./components/datails.modal.view.mjs";
import { ColumnsController } from "../controller/colums.controller.mjs";

export class ColumnsView {
  #container;
  #modal;

  constructor() {
    this.#container = document.querySelector("#container");
    this.#modal = new DetailsModal();
  }

  async init (columns) {
    console.log("🚀 ~ file: columns.view.mjs ~ line 16 ~ ColumnsView ~ init ~ columns", columns)
    document.querySelector(".modal").remove();
    
    //reconocer en que board estoy actualmente de la
    const nodeBody = document.querySelector("body")
    let actualBoard = nodeBody.getAttribute("boardSelected")

    //recibe contenedor de columnas
    const boardsContainer = this.#addChildFlexContainer();
    let htmlResult = this.#addColumns( await columns, actualBoard).join("");
    boardsContainer.innerHTML = htmlResult;
    this.#modal.init();

    // agregar accion de click para abrir modal con info
    this.#addTaskListeners(columns);
    this.#listenerCreateTaskBtn()
  }

/*
######################################################################
  Setting Listeners
######################################################################
*/
  // para agregar el listener de una tarea del modal
  // para cuando los tenga a todos
  addTaskClickListener(node, taskData) {
    node.addEventListener("click", function () {
      const detailsModal = new DetailsModal();
      detailsModal.showDetailsModal(taskData.name);
    });
  }

  #addTaskListeners(columns) {
    console.log("🚀 ~ file: columns.view.mjs ~ line 42 ~ ColumnsView ~ #addTaskListeners ~ columns", columns)

    const allTaskResolve = [];
    columns.forEach((column) => {
      column.id_column.tasks_column.forEach((tasks) => {
        allTaskResolve.push(tasks);
      });
    });

    console.log("🚀 ~ file: columns.view.mjs ~ line 57 ~ ColumnsView ~ #addTaskListeners ~ allTaskResolve", allTaskResolve)
    //obtener los ids de los tasks
    let taskContainer;
    allTaskResolve.forEach((task) => {
      const bodyNode = document.querySelector("body")
      const actualBoard = bodyNode.getAttribute("boardselected")
      console.log("🚀 ~ file: columns.view.mjs ~ line 64 ~ ColumnsView ~ allTaskResolve.forEach ~ actualBoard", actualBoard)
      console.log("🚀 ~ file: columns.view.mjs ~ line 60 ~ ColumnsView ~ allTaskResolve.forEach ~ task.board_id", task.board_id)
      if (task.board_id == actualBoard) {
        taskContainer = document.querySelector(`[data-task-id="${task.id}"]`);
      console.log("🚀 ~ file: columns.view.mjs ~ line 61 ~ ColumnsView ~ allTaskResolve.forEach ~ taskContainer", taskContainer)

        // listener para injectar datos correctamente
        taskContainer.addEventListener("click", () => {
          const detailsModal = new DetailsModal();
          detailsModal.showDetailsModal(task);
      });
      }
      
    });
  }

  //listeners para botones crear tareas las
  #listenerCreateTaskBtn(){
    const createBtns = document.querySelectorAll(".create-task-button")
    createBtns.forEach((createBtn) => {
        
      createBtn.addEventListener("click", () => {
        //const columnsController = new ColumnsController()
        const detailsModal = new DetailsModal();

        //pasa saber desde que columna se presiono el boton crear tarea
        let actualColumn = createBtn.getAttribute("data-board-index")
        console.log("🚀 ~ file: columns.view.mjs ~ line 76 ~ ColumnsView ~ createBtn.addEventListener ~ actualColumn", actualColumn)
        
        //para saber a cual board pertenecen tales columnas y tareas
        //el board actual
        const nodeBody = document.querySelector("body")
        let actualBoard = nodeBody.getAttribute("boardSelected")
        console.log("🚀 ~ file: columns.view.mjs ~ line 81 ~ ColumnsView ~ createBtn.addEventListener ~ actualBoard", actualBoard)

        detailsModal.showCreateTaskModal(actualColumn, actualBoard)

      })
    })
    
  }

/*
######################################################################
  HTML content
######################################################################
*/

  #addChildFlexContainer() {
    const childContainer = document.createElement("div");
    document.querySelector("#container").innerHTML = "";
    document.querySelector("#container").appendChild(childContainer);
    childContainer.classList.add(
      "container",
      "columns-container",
      "justify-content-center",
      "d-flex",
      "w-100"
    );

    return document.querySelector(".columns-container");
  }

  #addTasks(tasks, actualBoard) {
  console.log("🚀 ~ file: columns.view.mjs ~ line 101 ~ ColumnsView ~ #addTasks ~ tasks", tasks)
    return tasks.map((item) => {
      if (item.board_id == actualBoard) {
      return `<div class="task bg-light bg-gradient border shadow-sm p-2 mb-1 rounded" draggable="true" data-task-id="${
          item.id
        }">
        <p class="m-0" style="font-size:14px;">${item.name}</p>

        ${
          item.delivery_date != null
            ? `<div class="deadline-date bg-danger bg-opacity-25 border d-flex rounded align-items-center" style="padding: 0px 4px;width:fit-content;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg>
        <p class="deadline-date-text align-self-center m-0 p-0 mb-1 ps-1" style="height:14px;padding-left: 6px;font-size:12px;">${item.delivery_date}</p>
    </div>`
            : "" /*else ternario, devuelve nada*/
        } 
    </div>
        `}
    });
  }

  #addColumns(columns, actualBoard) {
    console.log("🚀 ~ file: columns.view.mjs ~ line 153 ~ ColumnsView ~ #addColumns ~ columns", columns)
    console.log("🚀 ~ file: columns.view.mjs ~ line 154 ~ ColumnsView ~ #addColumns ~ actualBoard", actualBoard)
    return columns.map((column, index) => {
      return `
            <div class="column-container mx-3 bg-secondary bg-opacity-10 border rounded" style="width: 272px;max-height: 600px;height:fit-content;">
                <div class="container d-flex flex-row justify-content-between p-2">
                    <h6 class="align-self-center m-0">${column.id_column.name}</h6>
                    <button type="button" style="height:25px;padding:0px 6px;" class="btn btn-light align-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                        </svg>
                    </button>
                </div>
                <div class="tasks-container p-2">

                ${
                  // mandar a agregar todas las tareas de esta columna
                  this.#addTasks(column.id_column.tasks_column, actualBoard).join("") 
                }

            </div>
                    ${index == 0 ? 
                      `
                <button href="#" class="btn btn-secondary mt-1 ps-2 d-flex justify-content-between align-items-center opacity-50" style="
                    margin: 10px;
                    height: 24px;
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <p class="m-0 create-task-button" data-board-index="${index}" style="padding-left:8px">Nueva tarea</p>
                </button>`
                                  : ""}
        </div>
            `;
    });
  }
}
