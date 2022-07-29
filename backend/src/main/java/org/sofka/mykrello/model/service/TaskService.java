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

    @Override
    @Transactional(readOnly = true)
    public List<TaskDomain> findAllTasksById(Integer idBoard) {
        return  taskRepository.findAllById(Collections.singleton(idBoard));
    }

    @Override
    @Transactional(readOnly = true)
    public TaskDomain findById(Integer id) {
        var task = taskRepository.findById(id);
        return task.isPresent() ? task.get() : null;
    }

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

    @Override
    public TaskDomain update(Integer id, TaskDomain task) {
        var  taskAntigua=taskRepository.findById(id).get();
        task.setId(id);
        if (task.getName() !=null){
            String nombre=task.getName();
            taskAntigua.setName(nombre);
        }
        if (task.getDescription() !=null){
            String description=task.getDescription();
            taskAntigua.setDescription(description);
        }
        if (task.getDelivery_date() !=null){
            Instant deliveryDate=task.getDelivery_date();
            taskAntigua.setDelivery_date(deliveryDate);
        }
        taskAntigua.setUpdated_at(Instant.now());
        return taskRepository.save(taskAntigua);
    }

    @Override
    public TaskDomain delete(Integer id) {
        var taskdomain=taskRepository.findById(id);
        if (taskdomain!=null){
            var task=taskdomain.get();
            taskRepository.delete(task);
        }
        return null;
    }

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
