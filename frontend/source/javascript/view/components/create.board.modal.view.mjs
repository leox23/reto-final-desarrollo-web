'use strict';

export class CreateBoardModal {
  #nodebody;

  constructor(){
    this.#nodebody = document.querySelector("body")
  }

    showModal(title){
      const modalContainer = document.querySelector('.modal')
      
      modalContainer.innerHTML = this.#updateModalContent(title)
      
      const myModal = new bootstrap.Modal(document.getElementById('createBoardModal'))
      myModal.show()
    }

    init() {
      this.#nodebody.innerHTML += this.#createModalContainer()
    }
    
    #createModalContainer() {
      return `
      <!--container del modal-->
      <div class="modal fade" id="createBoardModal" tabindex="-1" aria-labelledby="createBoardModalLabel" aria-hidden="true">
      </div>
      `
  }

    #updateModalContent(data){
      return `
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createBoardModalLabel">Nuevo tablero</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
          <div class="modal-body">
          <input type="text" class="form-control" placeholder="Nombre de tu nuevo Tablero" aria-label="Recipient's username" aria-describedby="basic-addon2">
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