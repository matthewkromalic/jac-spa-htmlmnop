package com.example.states.Repository;

import com.example.states.Model.FunFact;
import org.springframework.data.repository.CrudRepository;

public interface FactRepository extends CrudRepository<FunFact,Long> {
}
