package com.example.states.Model;

import javax.persistence.*;

@Entity
public class State {

    @Id
    @GeneratedValue
    private long id;

    public String name;
    public String capital;
    public int population;


    public State(String name, String capital, int population){

    }

    public State(){

    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCapital() {
        return capital;
    }

    public int getPopulation() {
        return population;
    }
}
