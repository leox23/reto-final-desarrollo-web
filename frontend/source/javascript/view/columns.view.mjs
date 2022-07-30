'use strict'

import { DetailsModal } from "./components/datails.modal.view.mjs";

export class Columns {
      #container;
      #modal;

     constructor() {
        this.#container = document.querySelector("#container")
        this.#modal = new DetailsModal()
     }

     init(boardColumns){
        console.log(boardColumns);
        this.#container.innerHTML = this.#addColumns()
        this.#modal.init()
        this.#addClickListener(".task")
        document.querySelector('.modal').remove()


     }

     #addClickListener(node) {
         document.querySelector(node).addEventListener("click", function(){
            const detailsModal = new DetailsModal();
            detailsModal.showModal("hola dsde jajaj");
         })
     }

     #addColumns(){
         return `<div class="container justify-content-center d-flex w-100">
         <div class="column-container mx-3 bg-secondary bg-opacity-10 border rounded" style="width: 272px">
             <div class="container d-flex flex-row justify-content-between p-2">
                 <h6 class="align-self-center m-0">Tareas pendientes</h6>
                 <button type="button" style="height:25px;padding:0px 6px;" class="btn btn-light align-self-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                     <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                     </svg>
                 </button>
             </div>
             
             <div class="tasks-container p-2">
     
                 <div class="task bg-light bg-gradient border shadow-sm p-2 mb-1 rounded ">
                     <p class="m-0">Estudio Control de versiones</p>
                     <div class="deadline-date bg-danger bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
                     
                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
                             <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                             <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                           </svg>
                         
                         <p class="deadline-date-text" style="height:10px;padding-left: 6px;">4 de jul.</p>
                     </div>
                 </div>
     
                 <div class="task bg-light bg-gradient border shadow-sm p-2 rounded mb-1">
                     <p class="m-0">Pair programming</p><div class="deadline-date bg-success bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
                     
                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
                             <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                             <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                           </svg>
                         
                         <p class="deadline-date-text" style="height:10px;padding-left: 6px;">7 de jul.</p>
                     </div>
                 </div>
     
             <button href="#" class="btn btn-secondary mt-2 d-flex justify-content-between align-items-center opacity-50">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                 </svg>
                 <p class="m-0" style="padding-left:8px">Añada una tarjeta</p>
             </button>
         </div>
     </div>
         
     
     <!-- 
     /*
     ######################################################################
       secunda columna
     ######################################################################
     */  
     --><div class="column-container mx-3 bg-secondary bg-opacity-10 border rounded" style="width: 272px">  
         <div class="container d-flex flex-row justify-content-between p-2">
             <h6 class="align-self-center m-0">Tareas en curso</h6>
             <button type="button" style="height:25px;padding:0px 6px;" class="btn btn-light align-self-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                 <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                 </svg>
             </button>
         </div>
         
         <div class="tasks-container p-2">
     
             <div class="task bg-light bg-gradient border shadow-sm p-2 mb-1 rounded ">
                 <p class="m-0">Estudio Control de versiones</p>
                 <div class="deadline-date bg-danger bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
                 
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
                         <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                         <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                       </svg>
                     
                     <p class="deadline-date-text" style="height:10px;padding-left: 6px;">4 de jul.</p>
                 </div>
             </div>
     
             <div class="task bg-light bg-gradient border shadow-sm p-2 rounded mb-1">
                 <p class="m-0">Pair programming</p><div class="deadline-date bg-success bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
                 
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
                         <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                         <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                       </svg>
                     
                     <p class="deadline-date-text" style="height:10px;padding-left: 6px;">7 de jul.</p>
                 </div>
             </div>
     
         <button href="#" class="btn btn-secondary mt-2 d-flex justify-content-between align-items-center opacity-50">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
             </svg>
             <p class="m-0" style="padding-left:8px">Añada una tarjeta</p>
     </button>
     </div>
     </div>  
     <!--
     /*
     ######################################################################
       Tercera columna
     ######################################################################
     */
     -->
     <div class="column-container mx-3 bg-secondary bg-opacity-10 border rounded" style="width: 272px">
     <div class="container d-flex flex-row justify-content-between p-2">
         <h6 class="align-self-center m-0">Tareas pendientes</h6>
         <button type="button" style="height:25px;padding:0px 6px;" class="btn btn-light align-self-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
             <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
             </svg>
         </button>
     </div>
     
     <div class="tasks-container p-2">
     
         <div class="task bg-light bg-gradient border shadow-sm p-2 mb-1 rounded ">
             <p class="m-0">Estudio Control de versiones</p>
             <div class="deadline-date bg-danger bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
             
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
                     <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                     <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                   </svg>
                 
                 <p class="deadline-date-text" style="height:10px;padding-left: 6px;">4 de jul.</p>
             </div>
         </div>
     
         <div class="task bg-light bg-gradient border shadow-sm p-2 rounded mb-1">
             <p class="m-0">Pair programming</p><div class="deadline-date bg-success bg-opacity-25 border d-flex rounded" style="padding: 0px 4px;width:fit-content;">
             
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock align-self-center" viewBox="0 0 16 16">
                     <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                     <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                   </svg>
                 
                 <p class="deadline-date-text" style="height:10px;padding-left: 6px;">7 de jul.</p>
             </div>
         </div>
     
     <button href="#" class="btn btn-secondary mt-2 d-flex justify-content-between align-items-center opacity-50">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
         </svg>
         <p class="m-0" style="padding-left:8px">Añada una tarjeta</p>
     </button>
     </div>
     </div>         
         `
     }

}