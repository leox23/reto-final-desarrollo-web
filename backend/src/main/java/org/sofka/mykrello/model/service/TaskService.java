package org.sofka.mykrello.model.service;

import java.util.Collections;
import java.util.List;

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
    @Transactional(readOnly = true)
    public TaskDomain create(TaskDomain task) {
        var tarea=taskRepository.save(task);

        var columna = new ColumnDomain();
        columna.setId(1);

        var log=new LogDomain();
        log.setCurrent(columna);
        log.setPrevious(columna);
        log.setTask_id(tarea);

        logService.create(log);
        return (tarea);
    }

    @Override
    public TaskDomain update(Integer id, TaskDomain task) {
        task.setId(id);
        return taskRepository.save(task);
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
}
