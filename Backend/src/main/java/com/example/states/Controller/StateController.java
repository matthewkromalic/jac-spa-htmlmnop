package com.example.states.Controller;


import com.example.states.Model.State;
import com.example.states.Repository.StateRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StateController {

    public StateRepository stateRepo;

    public StateController (StateRepository stateRepo){
        this.stateRepo = stateRepo;
    }

    @GetMapping("/states")
    public Iterable<State> getAllStates(){
        return stateRepo.findAll();
    }

    @GetMapping("/states/{id}")
    public State getStateById(@PathVariable long id){
        return stateRepo.findById(id).get();
    }
}
