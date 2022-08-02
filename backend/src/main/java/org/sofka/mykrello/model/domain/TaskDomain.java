package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

@Data
@Entity
@Table(name = "krl_task")
@JsonIgnoreProperties(value = {"column","log_task_id"}, allowGetters = true)
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;


    @Column(name = "tsk_name", nullable = false, length = 100)
    private String name;

    @Column(name = "clm_id_column",nullable = false)
    private Integer columID=1;

    @Column(name = "tsk_description",  length = 2000)
    private String description;

    @Column(name = "tsk_delivery_date")
    private Instant delivery_date;

    @Column(name = "tsk_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "tsk_updated_at")
    private Instant updated_at;

    @Column(name = "brd_id_board")
    private Integer board_id;

    @ManyToOne(optional = false, fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "clm_id_column", referencedColumnName = "clm_id", nullable = false,insertable = false,updatable = false)
    @JsonBackReference("task_column")
    private ColumnDomain column;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = LogDomain.class, cascade = CascadeType.ALL, mappedBy = "task_id")
    @JsonManagedReference(value = "task_id")
    private List<LogDomain> log_task_id = new ArrayList<>();

    @ManyToOne(optional = false, fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JsonBackReference("tasksForBoard")
    @JoinColumn(name = "brd_id_board", referencedColumnName = "brd_id", nullable = false, updatable = false, insertable = false)
    private BoardDomain boardId;
}
