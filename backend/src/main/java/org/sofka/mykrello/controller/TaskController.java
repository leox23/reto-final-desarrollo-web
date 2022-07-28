package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.BoardDomain;
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

    @GetMapping(path = "/api/v1/tasks/{idBoard}")
    public ResponseEntity<MyResponseUtility> getTasks(@PathVariable(value = "idBoard") Integer id) {
        response.data = taskService.findAllTasksById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> gettaskById(@PathVariable(value = "id") Integer idtask) {
        response.data = taskService.findById(idtask);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
/*
    @PostMapping(path = "/api/v1/board")
    public ResponseEntity<MyResponseUtility> create(@RequestBody BoardDomain board) {
        response.data = taskService.create(board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping(path = "/api/v1/board/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable(value = "id") Integer id,
                                                 @RequestBody BoardDomain board) {
        response.data = taskService.update(id, board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/api/v1/board/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id") Integer id) {
        response.data = taskService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }*/

}
