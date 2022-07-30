package org.sofka.mykrello.model.service;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.sofka.mykrello.model.domain.ColumnDomain;
import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.repository.LogRepository;
import org.sofka.mykrello.model.repository.TaskRepository;
import org.sofka.mykrello.model.service.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TaskService implements TaskServiceInterface {

    @Autowired
    private LogService logService;

    @Autowired
    private TaskRepository taskRepository;

    /**
     *
     * @param idBoard recibe el id del board donde se encuentra
     * @return retorna las tareas asociadas a ese id
     */
    @Override
    @Transactional(readOnly = true)
    public List<TaskDomain> findAllTasksById(Integer idBoard) {
        return  taskRepository.findAllById(Collections.singleton(idBoard));
    }

    /**
     *
     * @param id recibe el id de la tarea a buscar
     * @return retorna la tarea asociada a ese id
     */
    @Override
    @Transactional(readOnly = true)
    public TaskDomain findById(Integer id) {
        var task = taskRepository.findById(id);
        return task.isPresent() ? task.get() : null;
    }

    /**
     *
     * @param task recibe los datos para crear la tarea
     * @param idboard recibe el id del tablero donde se va a crear la tarea
     * @return retorna la nueva tarea
     */
    @Override
    public TaskDomain create(TaskDomain task,Integer idboard) {
        task.setColumID(1);
        task.setBoard_id(idboard);
        var log=new LogDomain();
        var newtask=taskRepository.save(task);
        log.setTask_id(newtask);
        logService.create(log);
        return newtask;
    }

    /**
     *
     * @param id recibe el id de la tarea que se quiere modificar
     * @param task recibe los datos que le van a cambiar a la tarea
     * @return retorna la tarea ya modificada
     */
    @Override
    public TaskDomain update(Integer id, TaskDomain task) {
        var  taskAntigua=taskRepository.findById(id).get();
        task.setId(id);
        if (task.getName() !=null){
            taskAntigua.setName(task.getName());}
        if (task.getDescription() !=null){
            taskAntigua.setDescription(task.getDescription());}
        if (task.getDelivery_date() !=null){
            taskAntigua.setDelivery_date(task.getDelivery_date());}
        taskAntigua.setUpdated_at(Instant.now());
        return taskRepository.save(taskAntigua);
    }

    /**
     *
     * @param id recibe el id de la tarea a eliminar
     * @return retorna un mensaje con el status de la operacion
     */
    @Override
    public TaskDomain delete(Integer id) {
        var taskdomain=taskRepository.findById(id);
        if (taskdomain!=null){
            var task=taskdomain.get();
            taskRepository.delete(task);
        }
        return null;
    }

    /**
     *
     * @param idnext recibe el id de la columna donde se va a mover la tarea
     * @param id recibe el id de la tarea que se quiere mover
     * @return retorna la tarea en la columna de destino
     */
    public TaskDomain taskmoving(Integer idnext, Integer id) {
        var movingtask=taskRepository.findById(id);
        if (movingtask!=null ){
            var task=movingtask.get();
            var newlog=new LogDomain();
            newlog.setPrevious(task.getColumID());
            task.setColumID(idnext);
            taskRepository.save(task);
            newlog.setCurrent(idnext);
            newlog.setTask_id(task);
            logService.create(newlog);
            return task;
        }
        return null;
    }
}
