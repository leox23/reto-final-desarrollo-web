package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.sofka.mykrello.model.service.BoardService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * Board controller tiene como proposito, crear los endpoints necesarios para interactuar los boards
 */
@RestController
@CrossOrigin(value = "*")
public class BoardController {
    @Autowired
    private MyResponseUtility response;

    @Autowired
    private BoardService boardService;

    /**
     *
     * @return retorna todos los tableros
     */
    @GetMapping(path = "/api/v1/boards")
    public ResponseEntity<MyResponseUtility> index() {
        response.data = boardService.getAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     *
     * @param id Recibe el id del tablero que se quiere buscar
     * @return Retorna el tablero buscado
     */
    @GetMapping(path = "/api/v1/board/{id}")
    public ResponseEntity<MyResponseUtility> getBoardById(@PathVariable(value = "id") Integer id) {
        response.data = boardService.findById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     *
     * @param board recibe en el body el nombre que va a tener este nuevo tablero
     * @return retorna un uevo tablero
     */
    @PostMapping(path = "/api/v1/board")
    public ResponseEntity<MyResponseUtility> create(@RequestBody BoardDomain board) {
        response.data = boardService.create(board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     *
     * @param id recibe el id del tablreo que se ba a modificar
     * @param board recibe en eo body lo que se quiere modificar del tablero con sus respectivos cambios
     * @return devuelve el tablero ya modificado
     */
    @PutMapping(path = "/api/v1/board/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable(value = "id") Integer id,
            @RequestBody BoardDomain board) {
        response.data = boardService.update(id, board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     *
     * @param id recibe el id del tablero que se desea eliminar
     * @return retorna un mensaje confirmando que fue eliminado el tablero
     */
    @DeleteMapping(path = "/api/v1/board/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id") Integer id) {
        response.data = boardService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
