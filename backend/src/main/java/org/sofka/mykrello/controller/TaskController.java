package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.service.BoardService;
import org.sofka.mykrello.model.service.TaskService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/**
 * Taskcontroller tiene como proposito, crear los endpoints necesarios para interactuar las tasks
 */
@CrossOrigin(value = "*")
@RestController
public class TaskController {

    @Autowired
    private MyResponseUtility response;

    @Autowired
    private TaskService taskService;

    /**
     *
     * @param idtask recibe el id del task
     * @return retorna  el resultado de la busqueda de dicha task
     */
    @GetMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> gettaskById(@PathVariable(value = "id") Integer idtask) {
        response.data = taskService.findById(idtask);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     *
     * @param idnext recibe el id de la columna donde se va a mover la task
     * @param id recibe el id de la task que queremos cambiar de columna
     * @return retorna la task con el cambbio de posicion y su registro en los logs
     */
    @GetMapping(path = "/api/v1/movingtask/{id}/{idnext}")
    public ResponseEntity<MyResponseUtility> moving(@PathVariable(value = "idnext") Integer idnext,
                                                        @PathVariable(value = "id") Integer id) {
        response.data = taskService.taskmoving(idnext,id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     *
     * @param task recibe el nombre y datos de la task que se va a crear
     * @param idBoard recibe el id del tablero donde se quiere crear la nueva task
     * @return retorna la task creada en el tablero donde se desea en la primera columna
     */
    @PostMapping(path = "/api/v1/newTask/{idBoard}")
    public ResponseEntity<MyResponseUtility> create(@RequestBody TaskDomain task,@PathVariable(value = "idBoard")Integer idBoard) {
        response.data = taskService.create(task,idBoard);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     *
     * @param id recibe el id de la task que se desea modificar
     * @param task recibe los cambios que se quieren modificar de la task en el body
     * @return retorna la task ya modificada
     */
    @PutMapping(path = "/api/v1/updateTask/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable(value = "id") Integer id, @RequestBody TaskDomain task) {
        response.data = taskService.update(id, task);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     *
     * @param id recibe el id de la task que se desea eliminar
     * @return rentorna un mensaje de confirmacion de ser exitosa la eliminacion de la task
     */
    @DeleteMapping(path = "/api/v1/deleteTask/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id") Integer id) {
        response.data = taskService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
