package com.example.demoApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demoApp.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}

