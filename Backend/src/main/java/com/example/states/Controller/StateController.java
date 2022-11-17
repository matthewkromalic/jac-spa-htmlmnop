package com.example.states.Controller;


import com.example.states.Model.FunFact;
import com.example.states.Model.State;
import com.example.states.Repository.FactRepository;
import com.example.states.Repository.StateRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class StateController {

    public StateRepository stateRepo;
    public FactRepository factRepo;

    public StateController (StateRepository stateRepo, FactRepository factRepo){
        this.stateRepo = stateRepo;
        this.factRepo = factRepo;
    }

    @GetMapping("/states")
    public Iterable<State> getAllStates(){
        return stateRepo.findAll();
    }

    @GetMapping("/state/{id}")
    public State getStateById(@PathVariable long id){
        return stateRepo.findById(id).get();
    }

    @GetMapping("/states/{name}")
    public State getStateByName(@PathVariable String name){
        Optional<State> state = stateRepo.findByName(name);
        if(state.isPresent()){
            return state.get();
        }
        return null;
    }
    @PostMapping("/state/{name}/addFact")
    public State addFunFact(@PathVariable String name, @RequestBody FunFact fact){
        Optional<State> state = stateRepo.findByName(name);
        if(state.isPresent()) {
            State newState = state.get();
            factRepo.save(fact);
            newState.addFact(fact);
            stateRepo.save(newState);
            return newState;
        }
        return null;
    }

}
