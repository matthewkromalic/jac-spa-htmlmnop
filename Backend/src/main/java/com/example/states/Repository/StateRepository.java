package com.example.states.Repository;

import com.example.states.Model.State;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface StateRepository extends CrudRepository<State, Long> {
    Optional<State> findByName(String str);
}
