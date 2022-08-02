'use strict'

import { ColumnsView } from "../../view/columns.view.mjs";
import { BoardsService } from "./boards.service.mjs";
import { Config } from "../../config.mjs";

export class TasksService {

    //pendiente por mandar deadlineDate, pero se evita porque no se tiene bien formateada aun 

    createNewTask(newTaskName, newTaskDescription, actualColumn, actualBoard){
        //pendiente organizar endpoint y urlbase por varibale
        return fetch(`http://localhost:8080/api/v1/newTask/${actualBoard}`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    "name": `${newTaskName}`,
                    "description": `${newTaskDescription}`,
                    "columID": `${actualColumn}`,
                    "board_id": `${actualBoard}`
                }
            ),
            headers: {
                'Content-Type': 'application/json'                
            }
        })
        .then((response) => {
            console.log(response)
            
            async function adapter(){
                const {KRELLO_URL_BASE} = Config
                const boardsService = new BoardsService();
                let apiModel = await boardsService.findAll(KRELLO_URL_BASE);
                const {dataRaw} = apiModel
                console.log("🚀 ~ file: tasks.service.mjs ~ line 35 ~ TasksService ~ adapter ~ dataRaw", dataRaw)
                
                const columnView = new ColumnsView()
                columnView.init(await dataRaw[actualBoard]);
            }

        })
        .catch(err => console.error(err));  
    }
}