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

@CrossOrigin(value = "*")
@RestController
public class TaskController {

    @Autowired
    private MyResponseUtility response;

    @Autowired
    private TaskService taskService;

    @GetMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> gettaskById(@PathVariable(value = "id") Integer idtask) {
        response.data = taskService.findById(idtask);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "/api/v1/task_column/{id}/{idnext}")
    public ResponseEntity<MyResponseUtility> moving(@PathVariable(value = "idnext") Integer idnext,
                                                        @PathVariable(value = "id") Integer id) {
        response.data = taskService.taskmoving(idnext,id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(path = "/api/v1/newTask/{idBoard}")
    public ResponseEntity<MyResponseUtility> create(@RequestBody TaskDomain task,@PathVariable(value = "idBoard")Integer idBoard) {
        response.data = taskService.create(task,idBoard);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping(path = "/api/v1/updateTask/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable(value = "id") Integer id, @RequestBody TaskDomain task) {
        response.data = taskService.update(id, task);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/api/v1/deleteTask/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id") Integer id) {
        response.data = taskService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
