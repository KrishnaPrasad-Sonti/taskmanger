package com.cdd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdd.models.Task;

public interface TaskRepository  extends JpaRepository<Task, Long> 
{

}
