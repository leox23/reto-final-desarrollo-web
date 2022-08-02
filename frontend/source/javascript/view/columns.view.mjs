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

    
    


/*
######################################################################
  Configuracion drag and drop
######################################################################
*/
    // estableciendo drag and drop
    const columnContainers = document.querySelectorAll(".tasks-container")
    columnContainers.forEach((column) => {
      Sortable.create(column, {
        group: 'interDragable',
        animation: 150
    });
    })

    const tasks = document.querySelectorAll(".task")
    tasks.forEach((task) => {
      task.addEventListener('dragstart', () => {
        let taskId = task.getAttribute("data-task-id")
        const bodyNode = document.querySelector("body")
        bodyNode.setAttribute("dragged-task-id", taskId)
      })

      task.addEventListener('dragend', () => {
        const bodyNode = document.querySelector("body")
        const taskId = bodyNode.getAttribute("dragged-task-id")
        
        const taskNode = document.getElementById(task.id)

        let parentTaskContainer = task.parentNode

        const tasksContainers = document.querySelectorAll(".tasks-container")

        const columnIndex = Array.prototype.indexOf.call(tasksContainers, parentTaskContainer);

        const columnsController = new ColumnsController();
        columnsController.changeTaskColumn(taskId, columnIndex + 1)
      })
    })





/*
######################################################################
  Configuracion borrar tarea
######################################################################
*/
//hover y on click del delete icon
        const tasksContainers = document.querySelectorAll(".task")
        const deleteIcon = document.querySelectorAll(".delete-icon")
        tasksContainers.forEach((taskContainer, index) => {
            deleteIcon[index].style.visibility = "hidden";
            deleteIcon[index].addEventListener("click", (event) => { 
              event.stopPropagation()
              let taskId = deleteIcon[index].getAttribute("data-task-id")

              const columnController = new ColumnsController()
              columnController.deleteTaskController(taskId, taskContainer)
            })

            taskContainer.addEventListener("mouseover", () => { 
              deleteIcon[index].style.visibility = "visible";
            })
            
            taskContainer.addEventListener("mouseout", () => { 
              deleteIcon[index].style.visibility = "hidden";
            })
        })
        




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
    const allTaskResolve = [];
    columns.forEach((column) => {
      column.id_column.tasks_column.forEach((tasks) => {
        allTaskResolve.push(tasks);
      });
    });

    //obtener los ids de los tasks
    let taskContainer;
    allTaskResolve.forEach((task) => {
      const bodyNode = document.querySelector("body")
      const actualBoard = bodyNode.getAttribute("boardselected")
      console.log("🚀 ~ file: columns.view.mjs ~ line 60 ~ ColumnsView ~ allTaskResolve.forEach ~ task.board_id", task.board_id)
      if (task.board_id == actualBoard) {
        taskContainer = document.querySelector(`[data-task-id="${task.id}"]`);

        // listener para injectar datos correctamente
        taskContainer.addEventListener("click", () => {
          const detailsModal = new DetailsModal();
          detailsModal.showDetailsModal(task,task.id);
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
        
        //para saber a cual board pertenecen tales columnas y tareas
        //el board actual
        const nodeBody = document.querySelector("body")
        let actualBoard = nodeBody.getAttribute("boardSelected")

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
    return tasks.map((item, index) => {
      if (item.board_id == actualBoard) {

      return `<div class="task bg-light bg-gradient border shadow-sm p-2 mb-1 rounded" id="taskNodeId${index}" draggable="true" data-task-id="${
          item.id
        }">
        <div class="container d-flex justify-content-between align-content-center">
          <p class="m-0" style="font-size:14px;">${item.name}</p> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash delete-icon"  data-task-id="${item.id}" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
        </div>

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
    return columns.map((column, index) => {
      return `
            <div class="column-container mx-3 bg-secondary bg-opacity-10 border rounded" style="width: 272px;height:fit-content;">
                <div class="container d-flex flex-row justify-content-between p-2">
                    <h6 class="align-self-center m-0">${column.id_column.name}</h6>
                    <button type="button" style="height:25px;padding:0px 6px;" class="btn btn-light align-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                        </svg>
                    </button>
                </div>
                <div class="tasks-container p-2" style="max-height:400px;overflow-y: auto;" id="column${index}">

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
