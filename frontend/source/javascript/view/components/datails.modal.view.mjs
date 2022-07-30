'use strict';

export class DetailsModal {
    #nodebody;

    #titleModal;

    constructor(){
      this.#nodebody = document.querySelector("body")
      this.#titleModal = "Titulo desde atributo"
    }

    showModal(title){
      const modalContainer = document.querySelector('.modal')
      modalContainer.innerHTML = this.#updateModalContent(title)
      
      const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
      myModal.show()
    }

    init() {
      this.#nodebody.innerHTML += this.#createModalContainer()
    }
    
    #createModalContainer() {
      return `
      <!--container del modal-->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      </div>
      `
  }

    #updateModalContent(data){
      return `
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <!--titulo del modal-->
        <h5 class="modal-title" id="exampleModalLabel">${data}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <!--cuerpo del modal-->
      <div class="modal-body">

          <!--fecha de vencimiento-->
        <div class="container-task-deadline mb-2">
          <p class="fs-6 m-0">Vencimiento:</p>
        <div class="deadline-date bg-danger bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
          
          <p class="deadline-date-text" style="height:10px;padding-left: 6px;">4 de julio [plazo vencido]</p>
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
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
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
              
              <!--agregar nuevo log-->
              <div class="input-group mb-2">
                  <span href="#" class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </span>
                  <input type="text" class="form-control" placeholder="Nueva actividad en tarea" aria-label="Input group example" aria-describedby="basic-addon1">
                </div>

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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
      `
    }

}