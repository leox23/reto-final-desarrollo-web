package org.sofka.mykrello.model.service.interfaces;

import java.util.List;

import org.sofka.mykrello.model.domain.TaskDomain;

public interface TaskServiceInterface {
    public List<TaskDomain> findAllTasksById(Integer idBoard);
    public TaskDomain findById(Integer id);
    public TaskDomain create(TaskDomain task,Integer idboard);
    public TaskDomain update(Integer id, TaskDomain task);
    public TaskDomain delete(Integer id);
}
