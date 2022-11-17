package com.example.states.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class FunFact {

    private String text;

    @ManyToOne
    @JsonIgnore
    private State state;

    @Id
    @GeneratedValue
    public long id;


    public FunFact(String text){
        this.text = text;
    }

    public FunFact() {
    }

    public long getId() {
        return id;
    }

    public State getState() {
        return state;
    }

    public String getText() {
        return text;
    }

    public void setState(State state) {
        this.state = state;
    }
}
