package com.example.states.Model;

import javax.persistence.*;

@Entity
public class State {

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String abv;
    private String capital;
    private int population;


    public State(String name,String abv, String capital, int population){
        this.name = name;
        this.abv = abv;
        this.capital = capital;
        this.population = population;

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
