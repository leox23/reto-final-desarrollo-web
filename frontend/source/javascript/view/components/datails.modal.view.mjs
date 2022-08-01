'use strict';
import { ColumnsController } from "../../controller/colums.controller.mjs";
export class DetailsModal {
    #nodebody;

    constructor(){
      this.#nodebody = document.querySelector("body")
    }

    init() {
      this.#nodebody.innerHTML += this.#createModalContainer()
    }

/*
######################################################################
  Tipos de modales
######################################################################
*/
    showCreateTaskModal(actualColumn, actualBoard){
      const modalContainer = document.querySelector('.modal')
      modalContainer.innerHTML = this.#inflateCreateTaskModal()
      
      const myModal = new bootstrap.Modal(document.getElementById('containerModal'))
      myModal.show()

      //listener del boton crear
      const createBtn = document.querySelector(".create-btn")
      createBtn.addEventListener('click',() => {
        const columnsController = new ColumnsController();

        //obtener valores del modal del modal
        const newTaskNameNode = document.querySelector(".input-task-name")
        const newTaskName = newTaskNameNode.value;

        const deadlineDateNode = document.querySelector(".new-task-deadline")
        const deadlineDate = deadlineDateNode.textContent;

        const newTaskDescriptionNode = document.querySelector(".new-task-description")
        const newTaskDescription = newTaskDescriptionNode.value;
        

        columnsController.createNewTask(newTaskName, newTaskDescription, actualColumn, actualBoard)
        myModal.hide()
      })
    }

    
    showDetailsModal(taskData){
      const modalContainer = document.querySelector('.modal')
      console.log("🚀 ~ file: datails.modal.view.mjs ~ line 50 ~ DetailsModal ~ showDetailsModal ~ modalContainer", modalContainer)
      modalContainer.innerHTML = this.#updateDetailModalContent(taskData)
      
      const myModal = new bootstrap.Modal(document.getElementById('containerModal'))
      myModal.show()
    }


/*
######################################################################
  HTML content
######################################################################
*/
    #createModalContainer() {
      return `
      <!--container del modal-->
      <div class="modal fade" id="containerModal" tabindex="-1" aria-labelledby="containerModalLabel" aria-hidden="true">
      </div>
      `
  }
/*
######################################################################
  Modal de crear tarea
######################################################################
*/
  #inflateCreateTaskModal(){
    return `
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="newTaskModal">Crear nueva tarea</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
          
          <!--label nueva tarea y input-->
          <div class="description-title-container d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-heading me-2" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
        </svg>
                  <p class="fs-5 m-0">Titulo de la tarea</p> 
                  
          </div>
          <input type="text" class="form-control input-task-name" placeholder="Nombre de la nueva tarea" aria-label="Recipient's username" aria-describedby="basic-addon2">
          </div>

          <!--fecha de vencimiento-->
      <div class="container-task-deadline mb-2">
        <p class="fs-6 m-0">Vencimiento: 
        <input type="date" id="start" style="width:24px;height:24px;" name="date-picker"
        value="2018-07-22"
        min="2018-01-01" max="2018-12-31">
        </p>

      <div class="deadline-date bg-danger bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg>
      <p class="deadline-date-text new-task-deadline" style="height:10px;padding-left: 6px;">??/??/???? [unknown]</p>
      </div>
    </div>

          <!--descripcion-->
          <div class="container-description mb-3">
              <div class="description-title-container d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-left me-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  <p class="fs-5 m-0">Descripcion de la tarea</p> 
                  
              </div>
              <!--campo de descripcion-->
              <div class="form-floating">
                  <textarea class="form-control new-task-description"  placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                  <label for="floatingTextarea2">Añade cosas especificas sobre la tarea</label>
                </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary create-btn">Crear</button>
        </div>
      </div>
    </div>
      `
  }

/*
######################################################################
  Modal de detalle de tarea
######################################################################
*/
    #updateDetailModalContent(taskData){
      return `
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <!--titulo del modal-->
        <h5 class="modal-title" id="exampleModalLabel">${taskData.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <!--cuerpo del modal-->
      <div class="modal-body">

      <!--fecha de creacion-->
      <div class="container-task-deadline mb-2">
        <p class="fs-6 m-0">Fecha creacion:</p>
      <div class="deadline-date bg-primary bg-opacity-10 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar mt-1" viewBox="0 0 16 16">
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg>
      <p class="deadline-date-text" style="height:10px;padding-left: 6px;">${taskData.createdAt}</p>
      </div>
    </div>
          


      ${taskData.delivery_date ? `<!--fecha de vencimiento-->
      <div class="container-task-deadline mb-2">
        <p class="fs-6 m-0">Vencimiento: 
        <input type="date" id="start" style="width:24px;height:24px;" name="date-picker"
        value="2018-07-22"
        min="2018-01-01" max="2018-12-31">
        </p>

      <div class="deadline-date bg-danger bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg>
      <p class="deadline-date-text" style="height:10px;padding-left: 6px;">${taskData.delivery_date} [plazo vencido]</p>
      </div>
    </div>`
        
          :  ""
    }

        <!--descripcion-->
          <div class="container-description mb-3">
              <div class="description-title-container d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-left me-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  <p class="fs-5 m-0">Descripcion de la tarea</p> 
                  
              </div>
              <!--campo de descripcion-->
              <div class="form-floating">
                  <textarea class="form-control"  placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px">${taskData.description ? taskData.description : ''}</textarea>
                  <label for="floatingTextarea2">Añade cosas especificas sobre la tarea</label>
                </div>
          </div>

          
        <!--Actividad de la tarea-->
        <div class="container-description mb-3">
          <div class="description-title-container d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt me-2" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                </svg>
              <p class="fs-5 mb-2">Registro de actividad</p> 

              
          </div>
          <!--log items-->
          <div class="logs-container">
              <!--lista de tareas-->
              <div class="logs-items-container">
                  <div class="log-item p-2 mb-1 border shadow-sm rounded">
                      <p class="log-text m-0">
                          avanze un poco en la tarea
                      </p>
                  </div>
                  
                  <div class="log-item p-2 mb-1 border shadow-sm rounded">
                      <p class="log-text m-0">
                          otras modificaciones en la tarea
                      </p>
                  </div>
              </div>
              </div>
      </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
      `
    }

}