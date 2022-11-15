package com.example.states.Repository;

import com.example.states.Model.State;
import org.springframework.data.repository.CrudRepository;

public interface StateRepository extends CrudRepository<State, Long> {
}
