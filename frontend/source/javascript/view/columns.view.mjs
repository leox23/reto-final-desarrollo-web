"use strict";

import { DetailsModal } from "./components/datails.modal.view.mjs";
import { ColumnModel } from "../model/column.model.mjs";

export class ColumnsView {
  #container;
  #modal;

  constructor() {
    this.#container = document.querySelector("#container");
    this.#modal = new DetailsModal();
  }

  async init(boardColumns) {
    const columnModel = new ColumnModel();
    const columns = columnModel.columnAdapter(boardColumns);
    console.log("imprimiendo adapter");
    console.log(columns);

    document.querySelector(".modal").remove();

    console.log("el retorno del metodo");
    console.log(columns);

    const boardsContainer = this.#addChildFlexContainer();
    let htmlResult = this.#addColumns(columns).join("");
    boardsContainer.innerHTML = htmlResult;
    this.#modal.init();

    this.#addTaskListeners(columns);

    //para agregar el listener del modal de una tarea
    //para cuando los tenga a todos
    //this.#addClickListener(".task")
  }

  // para agregar el lintener de una tarea del modal
  //para cuando los tenga a todos
  addTaskClickListener(node, taskData) {
    node.addEventListener("click", function () {
      const detailsModal = new DetailsModal();
      detailsModal.showModal(taskData.name);
    });
  }

  #addTaskListeners(columns) {
    const allTaskResolve = [];
    columns.forEach((column) => {
      column.tasks.forEach((tasks) => {
        allTaskResolve.push(tasks);
      });
    });
    console.log("allTaskResolve");
    console.log(allTaskResolve);

    allTaskResolve.forEach((task, index) => {
      let taskContainer = document.querySelector(`[data-task-id="${task.id}"]`);

      taskContainer.addEventListener("click", () => {
        const detailsModal = new DetailsModal();
        detailsModal.showModal(task);
      });

      //this.#addClickListener(".task")

      /*
    #addClickListener(node) {
        document.querySelector(node).addEventListener("click", function(){
           const detailsModal = new DetailsModal();
           detailsModal.showModal("hola dsde jajaj");
        })
    }
    */
    });

    /*
    let element = document.querySelector('[data-task-id="2"]').innerText;

    var elementNode = document.querySelector('[data-task-id="2"]');
    elementNode.addEventListener("click", prueba);

    function prueba() {
      alert("leo");
    }
    console.log(element);
    */
  }

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

  #addTasks(tasks) {
    return tasks.map((item, index) => {
      return `
        <div class="task bg-light bg-gradient border shadow-sm p-2 mb-1 rounded" draggable="true" data-task-id="${
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
            : "" /*else ternario, devolver nada*/
        } 
    </div>
        `;
    });
  }

  #addColumns(columns) {
    return columns.map((item) => {
      return `
            <div class="column-container mx-3 bg-secondary bg-opacity-10 border rounded" style="width: 272px;max-height: 600px;height:fit-content;">
                <div class="container d-flex flex-row justify-content-between p-2">
                    <h6 class="align-self-center m-0">${item.name}</h6>
                    <button type="button" style="height:25px;padding:0px 6px;" class="btn btn-light align-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                        </svg>
                    </button>
                </div>
                <div class="tasks-container p-2">

                ${
                  //agregar las tareas correspondientes
                  this.#addTasks(item.tasks).join("")
                }

            </div>
                <button href="#" class="btn btn-secondary mt-1 ps-2 d-flex justify-content-between align-items-center opacity-50" style="
                    margin: 10px;
                    height: 24px;
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <p class="m-0" style="padding-left:8px">Nueva tarea</p>
                </button>
        </div>
            `;
    });
  }
}
